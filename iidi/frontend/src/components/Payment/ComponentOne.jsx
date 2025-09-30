// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../context/AuthContext.jsx';
// import img from '../../assets/paymentPic/paymentPic.png';

// // SVG Icon for the mail
// const MailIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );

// // SVG Icon for the phone
// const PhoneIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//   </svg>
// );

// // Topographical background pattern SVG
// const TopoBackground = () => (
//     <svg
//       aria-hidden="true"
//       className="absolute inset-0 h-full w-full text-gray-200/75 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
//     >
//       <defs>
//         <pattern
//           id="topo"
//           width="80"
//           height="80"
//           patternUnits="userSpaceOnUse"
//           patternTransform="translate(0, 0) scale(0.5)"
//         >
//           <path
//             d="M0 80V0h80"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           />
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" fill="url(#topo)" />
//     </svg>
// );

// const ComponentOne = () => {
//   const [formData, setFormData] = useState({
//     fullName: 'Jay S',
//     email: 'jay.s@example.com',
//     courseId: '',
//     feeAmount: '3000',
//     gst: '3000',
//   });
//   const [courses, setCourses] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const { user } = useAuth();

//   const loadRazorpay = () => new Promise((resolve) => {
//     if (window.Razorpay) return resolve(true);
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });

//   const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   // Load available courses from backend so the user selects a real courseId
//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const res = await fetch(`${API_BASE}/api/courses`);
//         const data = await res.json();
//         setCourses(data.courses || []);
//       } catch {}
//     };
//     loadCourses();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       alert('Please login to continue');
//       return;
//     }
//     const ok = await loadRazorpay();
//     if (!ok) {
//       alert('Failed to load Razorpay. Check your internet connection.');
//       return;
//     }

//     try {
//       // If no courseId selected, ask user to choose
//       if (!formData.courseId) {
//         alert('Please select a course');
//         return;
//       }
//       const res = await fetch(`${API_BASE}/api/payments/create-order`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({ courseId: formData.courseId })
//       });
//       if (!res.ok) throw new Error('Failed to create order');
//       const data = await res.json();

//       const options = {
//         key: data.key,
//         amount: data.order.amount,
//         currency: data.order.currency,
//         name: 'Institute',
//         description: 'Course Fee',
//         order_id: data.order.id,
//         prefill: { name: formData.fullName, email: formData.email },
//         theme: { color: '#EF4444' },
//         handler: async function (response) {
//           const verifyRes = await fetch(`${API_BASE}/api/payments/verify`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             credentials: 'include',
//             body: JSON.stringify({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               dbOrderId: data.dbOrderId
//             })
//           });
//           const verifyJson = await verifyRes.json();
//           if (verifyRes.ok) alert('Payment successful');
//           else alert(`Payment verification failed: ${verifyJson.message}`);
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       alert('Payment initialization failed');
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <main className="flex flex-col lg:flex-row w-full min-h-screen">
//         {/* Left Side: Form */}
//         <div className="w-full lg:w-1/2 p-6 md:p-12 bg-white flex items-center">
//           <div className="max-w-lg mx-auto w-full">
//             <h1 className="text-3xl font-bold text-gray-800">Fee Payment</h1>
//             <p className="mt-2 text-gray-600">We're here to help. Reach out with any questions or inquiries.</p>

//             <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST" action="/payment">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   id="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">Course</label>
//                 <select
//                   id="courseId"
//                   name="courseId"
//                   value={formData.courseId}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
//                 >
//                   <option value="">Select course</option>
//                   {courses.map(c => (
//                     <option key={c._id} value={c._id}>{c.title} (₹{c.priceInr})</option>
//                   ))}
//                 </select>
//                 {/* If the dropdown is empty, make sure you've seeded courses or created them via admin routes. */}
//               </div>

//               <div>
//                 <label htmlFor="feeAmount" className="block text-sm font-medium text-gray-700">Fee Amount</label>
//                 <input
//                   type="number"
//                   name="feeAmount"
//                   id="feeAmount"
//                   value={formData.feeAmount}
//                   onChange={handleInputChange}
//                   required
//                   min="0"
//                   step="0.01"
//                   className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="gst" className="block text-sm font-medium text-gray-700">GST/TAX</label>
//                 <input
//                   type="number"
//                   name="gst"
//                   id="gst"
//                   value={formData.gst}
//                   onChange={handleInputChange}
//                   required
//                   min="0"
//                   step="0.01"
//                   className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
//                 >
//                   Proceed to Payment
//                 </button>
//               </div>
//             </form>

//             <div className="mt-12">
//               <img 
//               src={img} 
//                 alt="A student smiling and holding books" 
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//                 onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/F9FAFB/333333?text=Student+Image'; }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Contact Info */}
//         <div className="w-full lg:w-1/2 bg-gray-100 relative flex items-center justify-center p-6 md:p-12 min-h-screen lg:min-h-full">
//           <TopoBackground />
//           <div className="relative z-10 w-full max-w-lg h-full flex flex-col justify-center py-8">
//             <div className="mb-16">
//               <h2 className="text-base font-semibold text-gray-600 uppercase tracking-wider mb-8">Contact Info</h2>
//               <p className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
//                 We are always happy to assist you
//               </p>
//             </div>

//             <div className="space-y-16 flex-1 flex flex-col justify-center">
//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 mt-2">
//                   <div className="w-1.5 h-12 bg-red-500 rounded-full"></div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Address</h3>
//                   <a href="mailto:help@info.com" className="text-xl text-gray-700 hover:text-red-500 transition-colors font-medium block mb-4">help@info.com</a>
//                   <p className="text-base text-gray-500 leading-relaxed">
//                     Assistance hours:<br />
//                     Monday - Friday 6 am to 8 pm EST
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-6">
//                 <div className="flex-shrink-0 mt-2">
//                   <div className="w-1.5 h-12 bg-red-500 rounded-full"></div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Number</h3>
//                   <a href="tel:8889990000" className="text-xl text-gray-700 hover:text-red-500 transition-colors font-medium block mb-4">(888) 999-0000</a>
//                   <p className="text-base text-gray-500 leading-relaxed">
//                     Assistance hours:<br />
//                     Monday - Friday 6 am to 8 pm EST
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ComponentOne;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/paymentPic/paymentPic.png';

// Background pattern SVG
const TopoBackground = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full text-gray-200/75 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
  >
    <defs>
      <pattern
        id="topo"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
        patternTransform="translate(0, 0) scale(0.5)"
      >
        <path d="M0 80V0h80" fill="none" stroke="currentColor" strokeWidth="2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);

const ComponentOne = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    courseId: '',
    feeAmount: ''
  });

  const courses = [
    { id: 'Data Science & AI', title: 'Data Science & AI' },
    { id: 'Digital Marketing With AI', title: 'Digital Marketing With AI' },
    { id: 'Influencer Marketing With Content Creation', title: 'Influencer Marketing With Content Creation' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.courseId) {
      alert('Please fill all required fields');
      return;
    }

    // For now, we just navigate to QR page with formData
    navigate('/qrcode', { state: { formData } });

    // You can also integrate EmailJS here to send data to your email directly
    // emailjs.send('serviceID', 'templateID', formData, 'publicKey')
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 bg-white flex items-center">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-800">Fee Payment</h1>
            <p className="mt-2 text-gray-600">
              Please confirm your details and proceed to payment.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">
                  Course
                </label>
                <select
                  id="courseId"
                  name="courseId"
                  value={formData.courseId}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                >
                  <option value="">Select course</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Digital Marketing With AI">Marketing Analytics</option>
                  <option value="Influencer Marketing With Content Creation">Influencer Marketing With Content Creation</option>
                </select>
              </div>


              <div>
                <label htmlFor="feeAmount" className="block text-sm font-medium text-gray-700">
                  Fee Amount
                </label>
                <input
                  type="number"
                  name="feeAmount"
                  id="feeAmount"
                  value={formData.feeAmount}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none transition-colors duration-200"
                >
                  Pay Now
                </button>
              </div>
            </form>

            <div className="mt-12">
              <img
                src={img}
                alt="A student smiling and holding books"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/600x400/F9FAFB/333333?text=Student+Image';
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-1/2 bg-gray-100 relative flex items-center justify-center p-6 md:p-12 min-h-screen lg:min-h-full">
          <TopoBackground />
          <div className="relative z-10 w-full max-w-lg h-full flex flex-col justify-center py-8">
            <div className="mb-16">
              <h2 className="text-base font-semibold text-gray-600 uppercase tracking-wider mb-8">
                Contact Info
              </h2>
              <p className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                We are always happy to assist you
              </p>
            </div>
            <div className="space-y-16 flex-1 flex flex-col justify-center">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-1.5 h-12 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@internationalinsituteofdataintellegence.com"
                    className="text-xl text-gray-700 hover:text-red-500 transition-colors font-medium block mb-4"
                  >
                    info@internationalinsituteofdataintellegence.com
                  </a>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Assistance Day:<br />
                    Monday - Saturday
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-1.5 h-12 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Number</h3>
                  <a
                    href="tel:9761954123"
                    className="text-xl text-gray-700 hover:text-red-500 transition-colors font-medium block mb-4"
                  >
                    +91-9761954123
                  </a>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Assistance day:<br />
                    Monday - Saturday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentOne;
