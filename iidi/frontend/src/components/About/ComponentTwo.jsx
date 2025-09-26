import React from 'react';
import google from '../../assets/homePics/logos/Google.png'
import ibm from '../../assets/homePics/logos/ibm.png';
import duke from '../../assets/homePics/logos/duke.png';
import stanford from '../../assets/homePics/logos/stanford.png';
import penn from '../../assets/homePics/logos/penn.png';
import michigan from '../../assets/homePics/logos/michigan.png';
import imperial from '../../assets/homePics/logos/imperial.png';
import illinois from '../../assets/homePics/logos/Illinois.png';

// Logo placeholder component
const LogoPlaceholder = ({ logo, name }) => (
  <div className="flex items-center justify-center  rounded-lg h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40 mx-2 my-2">
    <img
      src={logo}
      alt={name}
      className='object-contain'
      
    />
  </div>
);

const ComponentTwo = () => {
  const logos = [
    { name: 'Illinois', path: illinois },
    { name: 'Duke', path: duke },
    { name: 'Google', path: google },
    { name: 'Michigan', path: michigan },
    { name: 'IBM', path: ibm },
    { name: 'Imperial College', path: imperial },
    { name: 'Stanford', path: stanford },
    { name: 'Penn', path: penn },
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
          {logos.map((item) => (
            <LogoPlaceholder key={item.name} logo={item.path} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentTwo;
