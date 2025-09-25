import img from '../../assets/aboutPics/aboutone.jpg';
import { Link } from 'react-router-dom';

const ComponentOne = () => {
  // TODO: Replace this with your actual background image URL
  const backgroundImageUrl = img;

  return (
    <div
      className="relative w-full bg-cover bg-center object-contain"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      {/* Content Container */}
      <div className="relative z-10 flex h-[90vh] min-h-[600px] items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 text-white md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mt-11 h-1 w-12 bg-red-500"></div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Empowering careers with data intelligence
            </p>

            <h1 className="text-4xl font-senibold leading-tight sm:text-5xl md:text-6xl">
              Industry-ready training in <span className="text-red-500 font-bold">Data Science</span>,{' '}
              <span className="text-red-500 font-bold">AI</span>, <span className="text-red-500 font-bold">Machine Learning</span>,{' '}
              <span className="text-red-500 font-bold">IT</span>, and{' '}
              <span className="text-red-500 font-bold">Business Analytics</span>—designed to match global standards.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-200">
              Learn from expert mentors, gain hands-on experience, and earn certifications that matter.
            </p>

            <div className="mt-10">
             <Link to = '/contact'> <button
                className="rounded-md bg-red-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Contact Us
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;