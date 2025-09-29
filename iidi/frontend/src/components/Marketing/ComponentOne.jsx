import React from 'react';
import img from "../../assets/marketingPics/img.png";

// SVG Icon for the button
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const ComponentOne = () => {
    return (
        <section className="w-full bg-white font-sans antialiased overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="max-w-md text-center lg:text-left mx-auto lg:mx-0">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            INTRODUCTION TO DIGITAL MARKETING WITH AI
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-gray-600">
                            Artificial Intelligence (AI) in digital marketing has transformed from an imaginative idea to a crucial tool for modern marketers. It has emerged as a powerful technology that enhances personalization, predictive analytics, customer experiences, and more.
                        </p>
                        <button className="group mt-8 inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Register Now
                            <ArrowRightIcon />
                        </button>
                    </div>

                    {/* Right Column: Abstract Graphics */}
                    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
                        {/* Main Image Placeholder */}
                        <div className="absolute z-20 w-48 h-48 bg-white rounded-full flex items-center justify-center text-gray-500 right-1/5">
                            {/* You can replace this div with your actual image component or img tag */}
                            <img src={img} alt="Career Experts" className="w-full h-full object-contain" />
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute inset-0 w-full h-full transform scale-90 sm:scale-100">
                            {/* Top row */}
                            <div className="absolute top-0 left-1/4 w-32 h-16 border-2 border-black rounded-full rounded-b-none border-b-0 -translate-x-1/2"></div>
                            <div className="absolute top-0 left-1/3 w-24 h-12 border-2 border-black rounded-full rounded-b-none border-b-0 -translate-x-1/2"></div>
                            <div className="absolute top-2 right-10 w-24 h-24 bg-indigo-400 rounded-full"></div>
                            
                            {/* Middle Row */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-800 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-300 transform -skew-x-12 -translate-y-1/2"></div>
                            <div className="absolute top-1/4 right-0 w-40 h-80 bg-green-300 rounded-l-full"></div>

                            {/* Bottom Row */}
                            <div className="absolute bottom-1/4 left-1/2 w-40 h-20 bg-yellow-500 transform -translate-x-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                            <div className="absolute bottom-0 left-1/2 w-64 h-32 bg-blue-500 rounded-t-full -translate-x-1/2"></div>
                            <div className="absolute bottom-4 right-10 w-20 h-40 border-2 border-black rounded-full"></div>
                            <div className="absolute bottom-4 right-10 w-20 h-20 bg-gray-800 rounded-b-full"></div>

                            {/* Line patterns SVG */}
                            <svg className="absolute bottom-0 left-10 w-24 h-24 text-black" fill="none" viewBox="0 0 100 100">
                                <path d="M 0 100 A 100 100 0 0 1 100 0" stroke="currentColor" strokeWidth="2"/>
                                <path d="M 0 80 A 80 80 0 0 1 80 0" stroke="currentColor" strokeWidth="2"/>
                                <path d="M 0 60 A 60 60 0 0 1 60 0" stroke="currentColor" strokeWidth="2"/>
                                <path d="M 0 40 A 40 40 0 0 1 40 0" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComponentOne;

