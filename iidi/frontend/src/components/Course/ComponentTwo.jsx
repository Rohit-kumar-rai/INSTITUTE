import React from 'react';

// Data for the logos. Replace the `src` with your actual image paths.
const logos = [
  { name: 'Illinois', src: 'https://placehold.co/120x40/f1f5f9/64748b?text=Illinois' },
  { name: 'Duke', src: 'https://placehold.co/90x40/f1f5f9/64748b?text=Duke' },
  { name: 'Google', src: 'https://placehold.co/110x40/f1f5f9/64748b?text=Google' },
  { name: 'University of Michigan', src: 'https://placehold.co/50x50/f1f5f9/64748b?text=UM' },
  { name: 'IBM', src: 'https://placehold.co/90x40/f1f5f9/64748b?text=IBM' },
  { name: 'Imperial College London', src: 'https://placehold.co/160x40/f1f5f9/64748b?text=Imperial' },
  { name: 'Stanford', src: 'https://placehold.co/130x35/f1f5f9/64748b?text=Stanford' },
  { name: 'University of Pennsylvania', src: 'https://placehold.co/110x45/f1f5f9/64748b?text=Penn' },
];

const ComponentTwo = () => {
  return (
    <div className="bg-gray-50 font-sans py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 mb-10">
          We collaborate with <span className="text-blue-700">350+ leading universities and companies</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16">
          {/* Map through the logos array to display each logo */}
          {logos.map((logo) => (
            <img
              key={logo.name}
              className="h-8 sm:h-9 object-contain"
              src={logo.src}
              alt={`${logo.name} logo`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;