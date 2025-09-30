import React from 'react';
import img1 from '../../assets/homePics/coursepics/ai.png';
import img2 from '../../assets/homePics/coursepics/marketing.png';
import img3 from '../../assets/homePics/coursepics/influencer.png';
import {Link} from 'react-router-dom';

// Data for the certification cards
const programs = [
    {
        title: 'Data Science and Artificial Intelligence',
        path: '/datascience',
        image: img1,
        duration: '7-8 Months',
        certificate: 'Professional Certificate',
        tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
        topics: 'Python Programming, Machine Learning, Data Visualization, Artificial Intelligence Applications'
    },
    {
        title: 'Digital Marketing with AI',
        path: '/marketing',
        image: img2,
        duration: '4-8 Months',
        certificate: 'Professional Certificate',
        tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
        topics: 'Consumer Behaviour Analytics, Digital Marketing Metrics, Google Analytics, Campaign Performance'
    },
    {
        title: 'Influencer Marketing & Content Creation with AI',
        path: '/influencer-marketing',
        image: img3,
        duration: '1-2 Months',
        certificate: 'Professional Certificate',
        tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
        topics: 'Python Programming, Machine Learning, Data Visualization, AI Applications'
    }
];

// Reusable Icon component
const InfoIcon = ({ children, text }) => (
    <div className="flex items-center text-gray-600">
        {children}
        <span className="ml-2 text-sm">{text}</span>
    </div>
);

// Reusable Tag component
const Tag = ({ text }) => (
    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
        {text}
    </span>
);

// Single Program Card Component
const ProgramCard = ({ program }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <img src={program.image} alt={program.title} className="w-full h-48 object-cover"/>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{program.title}</h3>
            <div className="space-y-3 mb-4">
                <InfoIcon text={program.duration}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </InfoIcon>
                <InfoIcon text={program.certificate}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V5.5A2.5 2.5 0 0114.5 3h0A2.5 2.5 0 0117 5.5V11m-10 8h16a1 1 0 001-1V8a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1zm-1-4a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1z" /></svg>
                </InfoIcon>
            </div>
            <div className="flex space-x-2 mb-4">
                {program.tags.map(tag => <Tag key={tag} text={tag} />)}
            </div>
            <div className="mb-6 flex-grow">
                <p className="text-sm text-gray-800 font-semibold">Topics Covered:</p>
                <p className="text-sm text-gray-600">{program.topics}</p>
            </div>
            <div className="flex space-x-4">
              <Link to ={program.path}>  <button className="flex-1 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">View Course</button></Link>
                <button className="flex-1 bg-white text-red-500 border border-red-500 font-bold py-2 px-4 rounded-md hover:bg-red-50 transition-colors">Brochure</button>
            </div>
        </div>
    </div>
);

// Main Component
export default function CertificationPrograms() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Explore Our <span className="text-red-500">Certification Programs</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                        Industry-relevant courses designed to give you the competitive edge in today's data-driven world.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} program={program} />
                    ))}
                </div>
            </div>
        </section>
    );
}
