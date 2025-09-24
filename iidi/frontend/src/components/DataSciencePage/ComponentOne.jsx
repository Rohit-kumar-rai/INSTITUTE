import React from 'react';

// Star component to render the rating
const Star = ({ filled, half }) => (
  <svg
    className={`w-5 h-5 ${filled || half ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      clipRule={half ? "evenodd" : "nonzero"}
      fillRule={half ? "evenodd" : "nonzero"}
    />
    {half && (
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        clipPath="url(#clip-half)"
      />
    )}
    <defs>
      <clipPath id="clip-half">
        <rect x="0" y="0" width="10" height="20" />
      </clipPath>
    </defs>
  </svg>
);


// Rating component to display stars based on the score
const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} filled />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<Star key={i} half />);
    } else {
      stars.push(<Star key={i} />);
    }
  }
  return <div className="flex items-center">{stars}</div>;
};


// Main component
export default function ComponentOne() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full m-4">
        
        {/* Image Section */}
        <div className="relative">
          <img 
            src="https://placehold.co/1024x400/f97316/ffffff?text=Abstract+Graphic" 
            alt="Abstract colorful lines representing data and AI" 
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1024x400/cccccc/ffffff?text=Image+Not+Found'; }}
          />
          {/* IIDI Logo Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md w-16 h-16 flex items-center justify-center">
             <img 
                src="https://placehold.co/48x48/eeeeee/333333?text=IIDI" 
                alt="IIDI Logo" 
                className="rounded-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/cccccc/ffffff?text=Logo'; }}
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Introduction to Data Science and Artificial Intelligence
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets.
          </p>
          
          {/* Creator and Rating Section */}
          <div className="flex items-center flex-wrap">
            <img 
              src="https://placehold.co/40x40/7c3aed/ffffff?text=RR" 
              alt="Creator Ronal Richards" 
              className="w-10 h-10 rounded-full mr-4"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/cccccc/ffffff?text=Avatar'; }}
            />
            <div className="flex items-center flex-wrap">
                <span className="text-gray-800 font-semibold mr-2">Created by Ronal Richards</span>
                <div className="flex items-center text-gray-600">
                    <span className="text-yellow-500 font-bold mr-1">4.6</span>
                    <Rating rating={4.6} />
                    <span className="ml-2">(274 reviews)</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
