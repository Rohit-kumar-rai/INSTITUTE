
import React from 'react';

// Data for the course modules
const courseModules = [
  {
    number: 1,
    title: 'AI Concepts and Applications',
    description: 'History and ethics of AI, Narrow vs General AI, Real-world AI use cases. Foundation concepts to understand the AI landscape and ethical considerations.',
  },
  {
    number: 2,
    title: 'Deep Learning with TensorFlow/Keras',
    description: 'Neural network fundamentals, Activation functions, loss functions. Building and training models with Keras for practical deep learning applications.',
  },
  {
    number: 3,
    title: 'Computer Vision',
    description: 'Image processing with OpenCV, CNNs (Convolutional Neural Networks), Object detection basics. Learn to work with visual data and build computer vision systems.',
  },
  {
    number: 4,
    title: 'Natural Language Processing (NLP)',
    description: 'Text cleaning and preprocessing, Bag-of-Words, TF-IDF, Word embeddings, RNNs, LSTM. Master text analysis and language understanding techniques.',
  },
  {
    number: 5,
    title: 'AI Model Deployment',
    description: 'REST APIs with Flask or Fast API. Using pre-trained models (Hugging Face, OpenAI). AI ethics and bias mitigation for production systems.',
  },
  {
    number: 6,
    title: 'Final Project',
    description: 'AI-based product development (e.g., chatbot, image classifier). Comprehensive report and demo presentation to showcase your skills.',
  },
];

// Reusable Module Card Component
const ModuleCard = ({ number, title, description }) => (
  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-gray-100 flex flex-col h-full">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ComponentThree = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
            COURSE MODULES
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 lg:text-lg">
            Comprehensive curriculum designed to take you from beginner to AI professional with hands-on projects and real-world applications.
          </p>
        </div>
        
        {/* Grid of Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {courseModules.map((module) => (
            <ModuleCard
              key={module.number}
              number={module.number}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
