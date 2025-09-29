import React from 'react';
import { Link } from 'react-router-dom';
// Importing icons from React Icons library (Feather set)
import { FiFileText, FiBookOpen, FiGlobe, FiHeart, FiAward } from 'react-icons/fi';

// Data for the feature cards to keep the JSX clean
const features = [
  {
    icon: <FiFileText size={28} />,
    title: 'Industry-Aligned Curriculum',
    description: 'Our courses are crafted by experts and updated regularly to align with current industry trends, ensuring you gain skills that are in high demand by employers worldwide.',
  },
  {
    icon: <FiBookOpen size={28} />,
    title: 'Hands-On, Project-Based Learning',
    description: 'We believe in learning by doing. Our students work on real-world projects, which means you can immediately apply what you’ve learned to solve actual industry challenges.',
  },
  {
    icon: <FiGlobe size={28} />,
    title: 'Globally Recognized Certification',
    description: 'Our certificates are more than just pieces of paper—they are recognized by top companies worldwide, ensuring that you stand out in the competitive job market.',
    isHighlighted: true, // Special flag for the blue card
  },
  {
    icon: ( // Custom icon for "PRO"
      <div className="text-lg font-bold tracking-wider">PRO</div>
    ),
    title: 'Expert-Led Instruction',
    description: 'Gain insights from seasoned professionals with years of experience in the field. Our mentors guide you through every step, providing personalized support and real-world knowledge.',
  },
  {
    icon: <FiHeart size={28} />,
    title: 'Career Support & Placement Assistance',
    description: 'We understand that your career success is our success. From one-on-one resume consultations to job interview preparation and placement assistance, we help you transition smoothly into your new role.',
  },
  {
    icon: <FiAward size={28} />,
    title: 'Flexible Learning Options',
    description: 'Life is busy. Our flexible, online, and hybrid learning models ensure that you can continue your education without putting other commitments on hold. Learn at your own pace, from anywhere.',
  },
];

const ComponentThree = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Standout features of IIDI's <span className="text-red-500">Flagship Program</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1
                ${
                  feature.isHighlighted
                    ? 'bg-blue-900 text-white lg:row-span-2' // Special styles for the highlighted card
                    : 'bg-white text-gray-900'
                }
              `}
            >
              <div
                className={`
                  flex h-14 w-14 items-center justify-center rounded-xl border
                  ${
                    feature.isHighlighted
                      ? 'border-white/20 bg-white/10 text-white'
                      : 'border-gray-200 bg-white text-gray-800'
                  }
                  ${feature.title === 'Expert-Led Instruction' ? '' : 'rounded-full'} // Custom shape for PRO icon
                `}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p
                className={`mt-2 text-base 
                  ${feature.isHighlighted ? 'text-gray-300' : 'text-gray-600'}
                `}
              >
                {feature.description}
              </p>

              {/* Conditionally render the button for the highlighted card */}
              {feature.isHighlighted && (
                <div className="mt-auto pt-8">
                 <Link to ="/contact"> <button className="w-full rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-600">
                    Contact Us
                  </button></Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentThree;