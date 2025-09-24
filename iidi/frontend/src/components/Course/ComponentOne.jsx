import React from 'react';

// Star Icon Component
const StarIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

// Main Component
const ComponentOne = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight leading-tight mb-6">
              INTRODUCTION TO DATA SCIENCE AND ARTIFICIAL INTELLIGENCE
            </h1>
            <p className="text-gray-600 text-base lg:text-lg mb-8">
              Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets.
            </p>
            
            {/* Creator Info */}
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-8">
              <img 
                className="w-10 h-10 rounded-full object-cover" 
                src="https://placehold.co/40x40/E94F64/FFFFFF?text=RR" 
                alt="Creator Ronal Richards" 
              />
              <div className="text-sm">
                <p className="text-gray-800 font-semibold">Created by <span className="text-red-500">Ronal Richards</span></p>
                <div className="flex items-center mt-1">
                  <span className="text-gray-800 font-bold mr-1">4.6</span>
                  <div className="flex text-yellow-400">
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4" />
                    <StarIcon className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-gray-500 ml-2">(274 reviews)</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
              Register Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
             <img 
                className="w-full h-auto max-w-md lg:max-w-xl object-contain" 
                src="https://i.imgur.com/8L4oYxY.png" 
                alt="Abstract representation of Artificial Intelligence" 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/E0E7FF/3730A3?text=AI+Visual'; }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
