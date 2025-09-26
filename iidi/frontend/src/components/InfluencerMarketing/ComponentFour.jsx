import React from 'react';

const ComponentFour = () => {
  return (
    <div className="bg-gray-50 font-sans flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Text and Button */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Need to know more about this course?
            </h2>
            <p className="text-gray-600 mb-6">
              Get to know the course in-depth by downloading the course brochure
            </p>
            <button className="bg-red-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300">
              Download Brochure
            </button>
          </div>

          {/* Right Side: Phone Mockups */}
          <div className="flex-shrink-0 relative w-64 h-48 hidden md:block">
             {/* Phone 1 */}
            <div className="absolute top-0 left-10 w-24 h-48 bg-white border-4 border-gray-800 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl font-bold text-red-500 tracking-tighter">II</span>
                </div>
            </div>
             {/* Phone 2 */}
            <div className="absolute top-8 right-0 w-24 h-48 bg-white border-4 border-gray-800 rounded-3xl flex items-center justify-center overflow-hidden transform translate-x-4">
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl font-bold text-red-500 tracking-tighter">DI</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComponentFour;
