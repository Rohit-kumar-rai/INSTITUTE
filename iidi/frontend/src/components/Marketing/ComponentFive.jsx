import React, { useState } from 'react';

// SVG Icon for the accordion toggle
const ChevronDownIcon = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-red-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Reusable Accordion Item Component
const AccordionItem = ({ title, level, course, duration, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-6 sm:p-8"
            >
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        <span className="text-red-500">{level}:</span> {title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                        <span>Course {course}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span>{duration}</span>
                    </div>
                </div>
                <div className="bg-red-100/50 rounded-full p-1">
                    <ChevronDownIcon isOpen={isOpen} />
                </div>
            </button>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-6 sm:px-8 pb-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ComponentFive = () => {
    const intermediateModules = [
        "Advanced SEO & SEM Strategies",
        "Marketing Automation & CRM",
        "Data Analytics & Reporting",
        "Advanced Social Media Advertising",
        "Email Marketing & Funnel Optimization"
    ];

    const advanceModules = [
        "AI in Marketing Strategy",
        "Growth Hacking & Viral Campaigns",
        "Predictive Analytics & Machine Learning",
        "Advanced Content Strategy & Thought Leadership",
        "CMO-level Leadership & Budget Management"
    ];

    return (
        <section className="w-full bg-gray-50 font-sans antialiased">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Intermediate Accordion */}
                    <AccordionItem
                        level="Intermediate"
                        title="Certification in Digital Marketing"
                        course="2"
                        duration="6 Months"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            Dive deeper into advanced analytics, SEO/SEM strategies, and multi-channel campaign management. This course focuses on automation, data-driven decision-making, and optimizing marketing funnels for maximum ROI.
                        </p>
                        <h4 className="font-bold text-gray-800 mt-6 mb-3">Modules covered</h4>
                        <ul className="space-y-2">
                            {intermediateModules.map((module, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    {module}
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                    
                    {/* Advance Accordion */}
                    <AccordionItem
                        level="Advance"
                        title="Certification in Digital Marketing"
                        course="3"
                        duration="8 Months"
                    >
                         <p className="text-gray-600 leading-relaxed">
                            Master strategic leadership with a focus on AI-driven marketing innovation, predictive analytics, and comprehensive growth hacking techniques. This module is designed for future CMOs and marketing leaders.
                        </p>
                        <h4 className="font-bold text-gray-800 mt-6 mb-3">Modules covered</h4>
                        <ul className="space-y-2">
                            {advanceModules.map((module, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    {module}
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                </div>
            </div>
        </section>
    );
};

export default ComponentFive;
