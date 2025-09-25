import React from 'react';
import img from '../../assets/coursepics/content.jpg';

// Main Hero Section Component
export default function HeroSection() {
    // You can replace this placeholder URL with your actual image path
    const backgroundImageUrl = img;

    return (
        <div 
            className="relative w-full h-screen bg-cover bg-center text-white" 
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 flex items-center justify-start h-full">
                <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-24">
                    <div className="max-w-xl text-left">
                        <p className="text-red-500 font-bold tracking-widest text-sm mb-4">
                            BEST INDUSTRIAL TRAINING COMPANY
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Your one-stop solution for the first step towards an exciting tech career.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8">
                            Join our industry-ready programs designed to fast-track your first job.
                        </p>
                        <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-8 rounded-md text-lg">
                            Register Now
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6 ml-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
