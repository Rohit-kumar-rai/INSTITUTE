import React from 'react';
import img from '../../assets/coursepics/people.png'

// A simple arrow icon component for the button
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);


export default function ComponentSix() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left side: Text content and button */}
          <div className="w-full md:w-1/2 p-8 lg:p-12 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Need guidance? <span className="text-red-600">Talk to our career expert!</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Get in touch with our program advisor & get your queries resolved.
            </p>
            <button className="group mt-8 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out flex items-center justify-center mx-auto md:mx-0">
              Register Now
              <ArrowRightIcon />
            </button>
          </div>
          
          {/* Right side: Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-auto self-stretch">
          
               <img src={img} alt="Career Experts" className="w-full h-full object-contain" />
            
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
               <img 
                 src="https://storage.googleapis.com/maker-studio-project-media-prod/1727274577134_f192aa7d-5a98-47d0-a19f-09e8b67b6134.png"
                 alt="Two career experts, a man and a woman, smiling professionally"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
