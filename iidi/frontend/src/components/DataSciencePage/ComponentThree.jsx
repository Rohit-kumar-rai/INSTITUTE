
import React from 'react';

// Data for the course modules
const courseModules = [
  {
    number: 1,
    title: 'AI Concepts and Applications',
    description: "Introduction to Data Analytics Role of a Data Analyst Analytics vs DataScience vs Business ,Intelligence, Data types, formats and lifecycle Excel for Data Analysis Data cleaning and formatting Formulas, pivot tables, VLOOKUP/XLOOKUP Charts and dashboards",
  },
  {
    number: 2,
    title: 'Deep Learning with TensorFlow/Keras',
    description: 'SQL for Data Analysts Relational databases and normalization SELEСТ,JOIN, GROUP BY, HAVING Subqueries and window functions Data Visualization Data storytelling principles Using Power BI or Tableau Creating interactive dashboards',
  },
  {
    number: 3,
    title: 'Computer Vision',
    description: 'Python for Analytics (Basics)Python syntax, variables, and data structures Pandas and NumPy for data handling Matplotlib and Seaborn for visualization Capstone Project Real-world data analysis project Presentation to simulate business communication',
  },
  {
    number: 4,
    title: 'Natural Language Processing (NLP)',
    description: 'Foundations of Data Science Data science lifecycle Tools: Jupyter Notebook, Python, GitMath: statistics, probability, linear algebra basics Data Handling with PythonData wrangling using Pandas and NumPyExploratory Data Analysis (EDA) Feature engineering and selection',
  },
  {
    number: 5,
    title: 'AI Model Deployment',
    description: 'Machine Learning Basics Supervised vs unsupervised learning Linear Regression, Logistic Regression Decision Trees and Random Forest Model Evaluation and Optimization Train-test split, cross-validationMetrics: accuracy, precision, recall, F1Hyperparameter tuning (Grid Search,RandomSearch)',
  },
  {
    number: 6,
    title: 'Final Project',
    description: 'Advanced ML Models Support Vector Machinesk-Means Clustering,PCAE nsemble methods (Boosting, Bagging) Capstone Project End-to-end ML projectModel deployment(basic Flask/Streamlit)',
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
        {/* <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3> */}
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
