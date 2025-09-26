import React, { useState } from 'react';

// SVG Icon for the button
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

// SVG Icon for the accordion toggle
const ChevronUpIcon = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-red-500 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);


const ComponentThree = () => {
    const [isOpen, setIsOpen] = useState(true);

    const modules = [
        "Digital Marketing Basics",
        "Social Media Marketing",
        "Content Creation + AI Tools",
        "Website Designing and SEO",
        "Paid Ads (Meta & Google)"
    ];

    return (
        <section className="w-full bg-gray-50 font-sans antialiased">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="max-w-3xl mx-auto">
                    <div className="text-left mb-8">
                        <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                            What's in store for you?
                        </h2>
                        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                            Experience a <span className="text-red-500">top-tier curriculum</span>
                        </h1>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 p-6 sm:p-8">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    <span className="text-red-500">Basic:</span> Certification in Digital Marketing
                                </h3>
                                <div className="flex items-center text-gray-500 text-sm mt-2">
                                    <span>Course 1</span>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <span>4 Months</span>
                                </div>
                            </div>
                            <div className="bg-red-100/50 rounded-full p-1">
                                <ChevronUpIcon isOpen={isOpen} />
                            </div>
                        </button>
                        
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen mt-6' : 'max-h-0 mt-0'}`}>
                            <p className="text-gray-600 leading-relaxed">
                                Gain insights into the evolving digital marketing funnel, understand consumer behavior, and build detailed personas—all while mastering AI-powered tools to craft targeted strategies, evaluate digital channels, and establish a strong brand presence.
                            </p>

                            <h4 className="font-bold text-gray-800 mt-6 mb-3">Modules covered</h4>
                            <ul className="space-y-2">
                                {modules.map((module, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        {module}
                                    </li>
                                ))}
                            </ul>

                            <button className="group mt-8 inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                Register Now
                                <ArrowRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComponentThree;

