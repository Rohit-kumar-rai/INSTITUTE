import React from 'react';

// FeatureCard Component
const FeatureCard = ({ title, description, graphic }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between h-full p-6 sm:p-8 relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px]">
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        {graphic}
      </div>
    </div>
  );
};

// Graphics components
const GraphicOne = () => (
  <div className="absolute bottom-[-4rem] left-[-4rem] w-48 h-48 sm:w-64 sm:h-64">
    <div className="absolute inset-0 bg-red-500 rounded-full"></div>
    <div className="absolute inset-[3rem] bg-black rounded-full"></div>
    <div className="absolute inset-[5rem] bg-white rounded-full"></div>
  </div>
);

const GraphicTwo = () => (
  <div className="absolute bottom-0 left-0 w-full h-full">
    <div className="absolute bottom-[-8rem] left-1 w-36 h-36 sm:w-48 sm:h-48 bg-red-500 rounded-full"></div>
    <div className="absolute bottom-[-3rem] right-[-3rem] w-32 h-32 sm:w-40 sm:h-40 bg-black rounded-full"></div>
    <div className="absolute bottom-[-5rem] right-2 w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 rounded-full"></div>
  </div>
);

const GraphicThree = () => (
  <div className="absolute bottom-0 right-4 w-36 h-36 sm:w-48 sm:h-40 flex items-end justify-end gap-2 sm:gap-3">
    <div className="absolute top-6 right-10 w-7 h-7 sm:w-9 sm:h-9 bg-red-500 rounded-full"></div>
    <div className="w-8 h-20 sm:w-10 sm:h-24 bg-red-500 rounded-t-lg"></div>
    <div className="w-8 h-28 sm:w-10 sm:h-32 bg-black rounded-t-lg"></div>
    <div className="w-8 h-36 sm:w-10 sm:h-40 bg-gray-100 rounded-t-lg"></div>
  </div>
);

const GraphicFour = () => (
  <div className="absolute bottom-0 left-0 w-full h-full">
    <div className="absolute bottom-[-6rem] left-[-2rem] w-44 h-44 sm:w-56 sm:h-56 bg-gray-100 rounded-full"></div>
    <div className="absolute bottom-10 left-4 w-40 h-6 sm:w-48 sm:h-8 bg-black transform -rotate-[10deg]"></div>
    <div className="absolute bottom-16 left-6 w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full"></div>
  </div>
);

const GraphicFive = () => (
  <div className="absolute bottom-[-5rem] left-1/2 -translate-x-1/2 w-[18rem] sm:w-[20rem] h-[8rem] sm:h-[10rem] rounded-t-full overflow-hidden flex">
    <div className="w-1/2 h-full bg-red-500"></div>
    <div className="w-1/2 h-full bg-gray-100"></div>
  </div>
);

const GraphicSix = () => (
  <div className="absolute bottom-0 left-0 w-full h-full">
    <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-red-500"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-black" style={{ borderRadius: '100% 0 0 0' }}></div>
  </div>
);

// Main Component
const ComponentFive = () => {
  const features = [
    { title: 'Expert-Led Training', description: 'Gain in-depth knowledge through structured learning delivered by seasoned industry professionals.', graphic: <GraphicOne /> },
    { title: 'Applied Assignments', description: 'Reinforce your learning with hands-on, graded assignments that build real-world problem-solving skills.', graphic: <GraphicTwo /> },
    { title: 'Industry Projects', description: 'Work on real-life business scenarios and datasets to strengthen your portfolio and practical experience.', graphic: <GraphicThree /> },
    { title: 'Career Support Services', description: 'Receive personalized guidance for resume writing, LinkedIn optimization, and job referrals.', graphic: <GraphicFour /> },
    { title: 'Job-Readiness Skills', description: 'Sharpen your communication, teamwork, and technical presentation skills for the workplace.', graphic: <GraphicFive /> },
    { title: 'Advanced Interview Preparation', description: 'Ace your interviews with mock sessions, algorithm challenges, and technical whiteboarding practice.', graphic: <GraphicSix /> },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Your <span className="text-red-500">Career-Ready</span> Learning Path
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
          Learn, apply, and launch your career with confidence
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
            graphic={feature.graphic}
          />
        ))}
      </div>
    </section>
  );
};

export default ComponentFive;
