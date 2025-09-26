import React from 'react';
import girlpic from '../../assets/homePics/compLady.jpg';
import { Link } from "react-router-dom";
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const CompletionRateCard = () => (
    <div className="absolute lg:top-8 lg:-right-8 top-[-60px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4 max-w-xs">
        <div className="relative w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className="text-gray-200"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="text-blue-500"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="87.6, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500 font-semibold text-xs">
                87.6%
            </div>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-700">Completion rate of our courses</p>
        </div>
    </div>
);

const CoursesCountCard = () => (
    <div className="absolute lg:bottom-16 lg:-left-12 bottom-[-60px] left-1/2 transform -translate-x-1/2 lg:translate-x-0 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4">
        <div className="bg-red-100 p-2 rounded-lg">
            <BookIcon />
        </div>
        <div>
            <p className="text-sm text-gray-500">Number of courses</p>
            <p className="text-2xl font-bold text-gray-800">100+</p>
        </div>
    </div>
);

const ComponentOne = () => {
    return (
        <div className="bg-white font-sans w-full">
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left column for text content */}
                    <div className="text-center lg:text-left mb-50">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-">
                            Empowering Tomorrow's Innovators with <span className="text-red-500">IIDI</span>
                        </h1>
                         <p className="text-lg font-semibold text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                             Welcome to our  CERTIFICATION in influencer marketing
this program prepares you to leverage personal branding and ai innovation for growth, impact, and career opportunities in the creator economy.
                         </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group flex items-center justify-center bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 ease-in-out">
                                <Link to="" className="flex items-center">
                                    Get Started
                                    <ArrowRightIcon />
                                </Link>
                            </button>
                            <button className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg border-2 border-red-500 hover:bg-red-50 transition-colors duration-300 ease-in-out">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* Right column for image and stats */}
                    <div className="relative flex justify-center items-center lg:justify-end">
                        {/* Dotted pattern */}
                        <div className="hidden lg:grid absolute top-0 -left-4 w-20 h-40 grid-cols-6 gap-2">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-red-400 rounded-full"></div>
                            ))}
                        </div>

                        <div className="relative p-4 w-full max-w-md lg:max-w-full">
                            {/* Image with red border effect */}
                            <div className="absolute bottom-0 right-0 w-[95%] h-[95%] border-4 border-red-500 rounded-3xl z-0 lg:block hidden"></div>
                            <img
                                src={girlpic}
                                alt="Student learning on a laptop"
                                className="relative rounded-3xl z-[0] w-full h-full object-cover shadow-2xl"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E2E8F0/4A5568?text=Image+Not+Found'; }}
                            />
                        </div>

                        {/* Floating Stat Cards */}
                        <CompletionRateCard />
                        {/* <CoursesCountCard /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentOne;
