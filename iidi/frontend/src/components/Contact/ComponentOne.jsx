import React, { useState, useRef } from 'react';
// Make sure to install the emailjs library: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

// A simple SVG icon component for social media links
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
        {children}
    </a>
);

// A simple SVG icon component for contact info
const InfoIcon = ({ children }) => (
    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md">
        {children}
    </div>
);

// Main Component
export default function App() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus({ message: 'Sending...', type: 'info' });

        // --- EMAILJS INTEGRATION ---
        // Replace with your Public Key, Template ID, and Service ID
        const publicKey = 'YOUR_PUBLIC_KEY';
        const templateId = 'YOUR_TEMPLATE_ID';
        const serviceId = 'YOUR_SERVICE_ID';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormStatus({ message: 'Message sent successfully!', type: 'success' });
                    form.current.reset(); // Reset form fields
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormStatus({ message: `Failed to send message: ${error.text}`, type: 'error' });
                },
            );
    };
    
    // SVG background pattern
    const TopoBackground = () => (
        <svg
            className="absolute top-0 left-0 w-full h-full z-0 opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
        >
            <defs>
                <pattern
                    id="topo"
                    patternUnits="userSpaceOnUse"
                    width="80"
                    height="80"
                    patternTransform="scale(1)"
                >
                    <path
                        d="M0 40.5q5 0 5 5a5 5 0 01-10 0q0-5 5-5M0 0.5q5 0 5 5a5 5 0 01-10 0q0-5 5-5M40 0.5q5 0 5 5a5 5 0 01-10 0q0-5 5-5M40 40.5q5 0 5 5a5 5 0 01-10 0q0-5 5-5M80 40.5q5 0 5 5a5 5 0 01-10 0q0-5 5-5"
                        strokeWidth="1"
                        stroke="rgba(0, 0, 0, 0.2)"
                        fill="none"
                    ></path>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)"></rect>
        </svg>
    );


    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans relative overflow-hidden">
            {/* Decorative Blue Lines */}
            <div className="absolute top-0 left-0 h-1/2 w-2 bg-blue-600 hidden lg:block" style={{ top: '20%', left: '5%' }}></div>
            <div className="absolute bottom-0 right-0 h-1/2 w-2 bg-blue-600 hidden lg:block" style={{ bottom: '20%', right: '5%' }}></div>
            <div className="absolute top-0 left-0 w-1/2 h-2 bg-blue-600 hidden lg:block" style={{ top: '%', left: '10%' }}></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-blue-600 hidden lg:block" style={{ bottom: '0%', right: '15%' }}></div>
            
            <main className="max-w-6xl w-full mx-auto relative z-10">
                <header className="flex justify-between items-start mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-lg">
                        Get in touch with us. We're here to assist you.
                    </h1>
                    <div className="flex flex-col space-y-4">
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </SocialIcon>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white shadow-2xl rounded-lg overflow-hidden">
                    {/* Form Section */}
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                        <p className="text-gray-500 mt-2 mb-6">We're here to help. Reach out with any questions or inquiries.</p>
                        
                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="user_name" id="full-name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="user_email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email address" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" name="user_phone" id="phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Interested In</label>
                                <select name="course_interest" id="course" required className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option>Select a course</option>
                                    <option>Web Development</option>
                                    <option>Data Science</option>
                                    <option>UX/UI Design</option>
                                    <option>Digital Marketing</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                                <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                        {formStatus.message && (
                            <p className={`mt-4 text-sm text-center font-medium ${
                                formStatus.type === 'success' ? 'text-green-600' : 
                                formStatus.type === 'error' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                                {formStatus.message}
                            </p>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="bg-gray-100 p-8 md:p-12 relative">
                        <TopoBackground />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-gray-800">We are always happy to assist you</h2>
                            <div className="mt-10 space-y-8">
                                <div className="flex items-start">
                                    <InfoIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </InfoIcon>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-700">Email Address</h3>
                                        <a href="mailto:help@info.com" className="text-blue-600 hover:underline">help@info.com</a>
                                        <p className="text-sm text-gray-500 mt-1">Assistance hours:<br />Monday - Friday 6 am to 8 pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <InfoIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </InfoIcon>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-700">Number</h3>
                                        <a href="tel:8889990000" className="text-blue-600 hover:underline">(888) 999-0000</a>
                                        <p className="text-sm text-gray-500 mt-1">Assistance hours:<br />Monday - Friday 6 am to 8 pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
