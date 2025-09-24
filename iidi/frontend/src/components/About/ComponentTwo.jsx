import React from 'react';

// A simple placeholder component for the logos.
// You can replace this with your actual <img> tags.
const LogoPlaceholder = ({ name, width = 'w-32', height = 'h-12' }) => (
  <div className={`flex items-center justify-center bg-gray-200 rounded-lg ${height} ${width} mx-4 my-2`}>
    <span className="text-gray-500 text-sm font-semibold">{name}</span>
  </div>
);


const ComponentTwo = () => {
  // Array of logo names to map over
  const logos = [
    'Illinois',
    'Duke',
    'Google',
    'Michigan',
    'IBM',
    'Imperial College',
    'Stanford',
    'Penn'
  ];

  return (
    // Main container with a light background and padding
    <section className="bg-gray-50 w-full py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* Main heading */}
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
          We collaborate with{' '}
          <span className="font-semibold text-blue-600">
            350+ leading universities and companies
          </span>
        </h2>
        
        {/* Logos container */}
        <div className="flex flex-wrap items-center justify-center">
          {/* Map through the logos array to create placeholders */}
          {logos.map((logoName) => (
            <LogoPlaceholder key={logoName} name={logoName} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Default export for the main App component
export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ComponentTwo />
    </div>
  );
}
