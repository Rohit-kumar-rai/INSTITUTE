import React from 'react';
import img1 from '../../assets/influencerMarketing/marketing.jpg'
import img2 from '../../assets/influencerMarketing/imgtwo.png'
import img3 from '../../assets/influencerMarketing/imgthree.png'

// SVG Icon components for clarity and reusability
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const SaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const ComponentOne = () => {
    return (
        <section className="w-full bg-[#FDFCFB] font-sans antialiased">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            INTRODUCTION TO INFLUENCER MARKETING & CONTENT CREATION
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-gray-600">
                            Collaborating with influencers allows your brand to harness their creativity and authenticity. Influencers are talented individuals who create content that resonates with their audience, making their perspectives valuable to your brand.
                        </p>
                        <button className="group mt-8 inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Register Now
                            <ArrowRightIcon />
                        </button>
                    </div>

                    {/* Right Column: Visual Elements */}
                    <div className="relative w-full h-[550px] sm:h-[600px] lg:h-[500px] flex items-center justify-center">
                        {/* Decorative background shapes */}
                        <div className="absolute top-4 right-[25%] w-40 h-24 bg-green-200/50 rounded-2xl z-0 transform -translate-x-1/4"></div>
                        <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-purple-200/60 rounded-2xl z-0"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-48 h-24 bg-orange-200/60 rounded-2xl z-0"></div>

                        {/* Main Image */}
                        <div className="absolute inset-0 m-auto w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] shadow-2xl rounded-2xl z-10">
                             <img 
                                src={img1}
                                alt="Fashion model" 
                                className="w-full h-full object-fit-cover rounded-2xl grayscale"
                            />
                        </div>

                        {/* Social Media Card */}
                        <div className="absolute top-1/2 right-0 sm:right-4 md:right-8 lg:right-0 w-[250px] sm:w-[280px] bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl z-20 transform -translate-y-1/2 translate-x-0 sm:translate-x-4 lg:translate-x-1/4">
                            <div className="flex items-center mb-3">
                                <img 
                                    src={img3}
                                    alt="Sofia Reed" 
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <p className="ml-3 font-semibold text-gray-800 text-sm">Sofia Reed</p>
                            </div>
                            <img 
                                src={img2} 
                                alt="Beauty product post" 
                                className="w-full h-auto rounded-lg"
                            />
                            <div className="flex justify-between items-center mt-3 text-gray-700">
                                <div className="flex space-x-3">
                                    <HeartIcon />
                                    <CommentIcon />
                                    <SendIcon />
                                </div>
                                <SaveIcon />
                            </div>
                            <p className="text-xs text-gray-600 mt-3 leading-snug">
                                Unboxing my new obsession! ✨ Huge thanks to @LumeraBeauty for this dreamy set—chic, clean, and smells divine. Can't wait to dive in!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComponentOne;
