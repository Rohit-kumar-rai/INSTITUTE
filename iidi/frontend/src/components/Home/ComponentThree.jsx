import React from 'react';
import { Link } from 'react-router-dom';

// Star Icon Component
const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

// Course Card Component
const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
    <img
      src={course.imageUrl}
      alt={course.title}
      className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
    />
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3">
       {/*<span className="font-semibold">Topics:</span> {course.topics}*/} 
      </p>

      <div className="text-sm sm:text-base text-gray-600 space-y-1 mb-3">
       { /*<p>Duration: {course.duration}</p>*/}
        <div className="flex items-center">
          <span className="text-yellow-500 font-bold mr-1">{course.rating}</span>
          <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          <span className="ml-2 text-gray-500 text-xs sm:text-sm">({course.reviews} reviews)</span>
        </div>
        <p>{course.level}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {course.tags.map((tag, idx) => (
          <span key={idx} className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

     {/*  <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-auto mb-3">
        <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
          {course.avatars.map((avatar, idx) => (
            <img
              key={idx}
              className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white"
              src={avatar}
              alt={`Student ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-xs sm:text-sm">{course.enrollment}</span>
      </div> */}

      <div className="grid grid-cols-2 gap-2 sm:gap-4 border-t pt-3 sm:pt-4">
        <button className="w-full py-2 sm:py-2.5 text-gray-700 font-semibold bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-xs sm:text-sm">
          BROCHURE
        </button>
       <Link to = {course.path}> <button className="w-full py-2 sm:py-2.5 text-white font-semibold bg-gray-800 rounded-md hover:bg-gray-900 transition-colors text-xs sm:text-sm">
          VIEW COURSE
        </button></Link>
      </div>
    </div>
  </div>
);

const ComponentThree = () => {
  const courses = [
    {
      title: 'Data science & AI',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Data+Science',
      topics: 'Python Programming, Machine Learning, Data Visualization, AI Applications',
      duration: '4-6 Months',
      rating: 4.7,
      reviews: 274,
      level: 'Beginner - Professional Certificate',
      tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
      avatars: [
        'https://placehold.co/40x40/i/4F46E5/FFFFFF?text=A',
        'https://placehold.co/40x40/i/3B82F6/FFFFFF?text=B',
        'https://placehold.co/40x40/i/10B981/FFFFFF?text=C',
      ],
      enrollment: '1000+ Students enrolled in Jul 2025',
      path: '/datascience',
    },
    {
      title: 'Digital Marketing With AI',
      imageUrl: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Marketing',
      topics: 'Consumer Behaviour Analytics, Digital Marketing Metrics, Google Analytics',
      duration: '4-6 Months',
      rating: 4.7,
      reviews: 274,
      level: 'Beginner - Professional Certificate',
      tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
      avatars: [
        'https://placehold.co/40x40/i/4F46E5/FFFFFF?text=D',
        'https://placehold.co/40x40/i/3B82F6/FFFFFF?text=E',
        'https://placehold.co/40x40/i/10B981/FFFFFF?text=F',
      ],
      enrollment: '1000+ Students enrolled in Jul 2025',
      path: '/marketing',
    },
    {
      title: 'Influencer Marketing With Content Creation',
      imageUrl: 'https://placehold.co/600x400/1F2937/FFFFFF?text=Influencer Marketing',
      topics: 'Python Programming, Machine Learning, Data Visualization, AI Applications',
      duration: '4-6 Months',
      rating: 4.7,
      reviews: 274,
      level: 'Beginner - Professional Certificate',
      tags: ['DEDICATED CAREER SUPPORT', 'MENTORSHIP'],
      avatars: [
        'https://placehold.co/40x40/i/4F46E5/FFFFFF?text=G',
        'https://placehold.co/40x40/i/3B82F6/FFFFFF?text=H',
        'https://placehold.co/40x40/i/10B981/FFFFFF?text=I',
      ],
      enrollment: '1000+ Students enrolled in Jul 2025',
      path: '/infleuncer-marketing',
    },
  ];

  const categories = ['Top Courses', 'Data Science & AI', 'Marketing Analytics'];

  return (
    <div className="bg-blue-50/50 font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            IIDI Courses Tailored to your Learning Goals
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
            Get job-ready with Professional Certificates—now including AI skills.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`py-2 px-4 sm:px-5 rounded-md font-semibold text-xs sm:text-sm transition-colors ${
                index === 0
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
