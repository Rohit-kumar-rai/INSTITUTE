import React from 'react';

// Mock course-related testimonials
const testimonials = [
  {
    name: 'Ramdas Bhakt',
    title: 'Data Science Student',
    quote: 'The AI course helped me land my first job as a data analyst. The hands-on assignments were extremely useful!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Aniket Sharma',
    title: 'Marketing Analytics Student',
    quote: 'The marketing analytics certification gave me practical skills in Google Analytics and campaign performance.',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Priya Patel',
    title: 'Python & AI Student',
    quote: 'Loved the Data Science and AI course! The mentors were supportive and the projects were industry-relevant.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bablu Pandit',
    title: 'Web Development Student',
    quote: 'The full-stack web development projects helped me build a strong portfolio that impressed recruiters.',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sarkchanda Upadhayay',
    title: 'AI & Machine Learning Student',
    quote: 'I gained confidence in applying AI concepts to real-world datasets. Highly recommend the mentorship support!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Syamsunder Kumar',
    title: 'Database Management Student',
    quote: 'The database courses helped me master SQL and PL/SQL. Now I can confidently handle enterprise-level databases.',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, title, quote, avatar }) => (
  <div className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-2xl border border-pink-300 shadow-lg p-4 sm:p-6 md:p-8 mx-3 sm:mx-4 my-4">
    <div className="flex items-center mb-3 sm:mb-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-3 sm:mr-4 border-2 border-gray-200"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/64x64/EBF4FF/7F9CF5?text=${name.charAt(0)}`; }}
      />
      <div>
        <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <p className="text-gray-600 italic text-sm sm:text-base">"{quote}"</p>
  </div>
);

// Main Component with Auto-scrolling animation
function ComponentFour() {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="font-sans bg-gradient-to-br from-blue-100 to-purple-200 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
          What Our Students Say About IIDI Courses
        </h2>
      </div>

      <div 
        className="relative w-full max-w-6xl overflow-hidden group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${testimonials.length * 400}px)); /* Approx card width + margin */
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default ComponentFour;
