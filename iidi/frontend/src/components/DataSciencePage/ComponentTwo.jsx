import React, { useState } from 'react';
import { Link } from "react-router-dom";

// --- SVG Icon Components ---
const IconCheck = () => (
  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);
const IconChevronUp = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
);
const IconChevronDown = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);
const IconPlay = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const IconDownload = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
);
const IconCertificate = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
);
const IconInfinity = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.25 12.25c-4 0-7.25-3.25-7.25-7.25S8.25-2.25 12.25-2.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25z" transform="matrix(.7071 .7071 -.7071 .7071 9.25 -2.75)" /><path d="M12.25 12.25c-4 0-7.25-3.25-7.25-7.25S8.25-2.25 12.25-2.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25z" transform="matrix(.7071 -.7071 .7071 .7071 2.75 18.25)" /></svg>
);
const IconFile = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
);
const IconLanguage = () => (
  <svg className="w-6 h-6 text-gray-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m4 13l4-4-4-4M1 19h12a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const IconCaretRight = () => (
  <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


// --- Reusable Components ---
const Section = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-lg mb-6">
      <button
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
};


const ModuleItem = ({ title }) => (
  <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
    <IconCaretRight />
    <span className="text-gray-700">{title}</span>
  </div>
);


// --- Main Component ---
export default function ComponentTwo() {
  const courseModules = [
    "Module 1: Introduction to Python for Data Science",
    "Module 2: Data Analysis with Pandas and NumPy",
    "Module 3: Data Visualization with Matplotlib and Seaborn",
    "Module 4: Statistical Analysis Fundamentals",
    "Module 5: Machine Learning Fundamentals",
    "Module 6: Supervised Learning Algorithms",
    "Module 7: Unsupervised Learning Techniques",
    "Module 8: Deep Learning with Tensorflow",
    "Module 9: Neural Network Architectures",
    "Module 10: Natural Language Processing (NLP)",
    "Module 11: Time Series Analysis",
    "Module 12: Big Data Tools and Technologies",
    "Module 13: Cloud Computing for Data Science",
    "Module 14: Real-World Projects and Case Studies",
    "Module 15: Deploying Machine Learning Models",
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Navigation Tabs */}
          <div className="mb-6">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full shadow-sm hover:bg-gray-100">Course Overview</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-sm">Course Content</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full shadow-sm hover:bg-gray-100">Reviews</button>
            </nav>
          </div>

          {/* What you'll learn Section */}
          <Section title="What you'll Learn" defaultOpen={true}>
            <ul className="space-y-3">
              <li className="flex items-start"><IconCheck /><span>Learn to tackle real-world challenges</span></li>
              <li className="flex items-start"><IconCheck /><span>Portfolio of projects showcasing your expertise</span></li>
              <li className="flex items-start"><IconCheck /><span>Real-World Projects and Case Studies</span></li>
            </ul>
          </Section>

          {/* Course Content Section */}
          <Section title="Course Content" defaultOpen={true}>
            <div className="space-y-1">
              {courseModules.map((module, index) => (
                <ModuleItem key={index} title={module} />
              ))}
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Details Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex items-center"><IconPlay /> 8h on-demand video</li>
              <li className="flex items-center"><IconDownload /> Downloadable resources</li>
              <li className="flex items-center"><IconCertificate /> Certificate of completion</li>
              <li className="flex items-center"><IconInfinity /> Lifetime access</li>
            </ul>
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2 mr-3">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/32x32/FFC107/FFFFFF?text=A" alt="User A" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/32x32/4CAF50/FFFFFF?text=B" alt="User B" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/32x32/2196F3/FFFFFF?text=C" alt="User C" />
              </div>
              <span className="text-sm text-gray-600">1000+ Students enrolled in Jul 2025</span>
            </div>
            <Link to="/Payment">
              <button className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
                Enroll Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </Link>
          </div>

          {/* Includes Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">This course includes</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center"><IconFile /> 15 Modules</li>
              <li className="flex items-center"><IconLanguage /> English, Hindi captions</li>
            </ul>
          </div>

          {/* Instructor Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Instructor</h3>
            <div className="flex items-center">
              <img
                src="https://placehold.co/48x48/7c3aed/ffffff?text=RR"
                alt="Instructor Ronal Richards"
                className="w-12 h-12 rounded-full mr-4"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/cccccc/ffffff?text=Avatar'; }}
              />
              <div>
                <span className="text-gray-600">Created by <span className="font-bold text-blue-600">Ronal Richards</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
