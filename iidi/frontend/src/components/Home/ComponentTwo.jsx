import React from 'react';

// Logo placeholder component
const LogoPlaceholder = ({ name }) => (
  <div className="flex items-center justify-center bg-gray-200 rounded-lg h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40 mx-2 my-2">
    <span className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold">{name}</span>
  </div>
);

const ComponentTwo = () => {
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
    <section className="bg-gray-50 w-full py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-snug">
          We collaborate with{' '}
          <span className="font-semibold text-blue-600">
            350+ leading universities and companies
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center">
          {logos.map((logoName) => (
            <LogoPlaceholder key={logoName} name={logoName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ComponentTwo />
    </div>
  );
}
