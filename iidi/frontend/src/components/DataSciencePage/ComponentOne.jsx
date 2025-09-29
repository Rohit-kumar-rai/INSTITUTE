import React from 'react';
import img from '../../assets/dataScience/firstpic.png';

const ComponentOne = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Introduction To Data Science And Artificial Intelligence
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={img} 
              alt="Abstract representation of Artificial Intelligence" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
