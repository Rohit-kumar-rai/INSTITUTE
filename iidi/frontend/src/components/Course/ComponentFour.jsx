import React from 'react';

// Icon Components
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);


// Data for the prospect cards
const prospects = [
  {
    icon: <ClockIcon />,
    title: 'Duration',
    value: '7-8 Months',
    subtitle: '',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Average Package',
    value: '3-10 LPA',
    subtitle: 'Post Certification',
  },
  {
    icon: <BadgeIcon />,
    title: 'Certification',
    value: 'Industry Recognized Certificate',
    subtitle: '',
  },
];

// Reusable Prospect Card Component
const ProspectCard = ({ icon, title, value, subtitle }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col items-center text-center w-full sm:w-80 h-64 justify-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-xl font-bold text-red-500 mb-2">{value}</p>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </div>
);


const ComponentFour = () => {
  return (
    <div className="bg-gray-50 font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Investment & Career Prospects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 lg:text-lg">
            Transform your career with industry-relevant skills
          </p>
        </div>
        
        {/* Grid of Prospect Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {prospects.map((prospect, index) => (
            <ProspectCard
              key={index}
              icon={prospect.icon}
              title={prospect.title}
              value={prospect.value}
              subtitle={prospect.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentFour;
