import React from 'react';
import img1 from '../../assets/influencerMarketing/cardone.jpg'
import img2 from '../../assets/influencerMarketing/cardtwo.jpg'
import img3 from '../../assets/influencerMarketing/cardthree.jpg'

// SVG Icon for the three-dot menu
const MoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
);

// Card component for reusability
const InfoCard = ({ imageUrl, title, description, imageAlt }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200/80 hover:shadow-lg transition-shadow duration-300">
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-md mr-3">
                        <span className="font-bold text-red-500 text-sm">IIDI</span>
                    </div>
                    <h3 className="font-semibold text-gray-700 text-sm">International Institute of Data Intelligence</h3>
                </div>
                <MoreIcon />
            </div>
            <img 
                src={imageUrl} 
                alt={imageAlt}
                className="w-full h-48 object-cover rounded-lg" 
            />
        </div>
        <div className="p-5 pt-0">
            <h4 className="text-xl font-bold text-red-500 mb-2">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);


const ComponentThree = () => {
    const cardData = [
        {
            imageUrl: img1,
            title: "Industry Growth",
            description: "The influencer marketing industry is worth over $24 billion globally by 2025, presenting immense career opportunities.",
            imageAlt: "Team looking at business charts on a laptop"
        },
        {
            imageUrl: img2,
            title: "Cost-Effective Leads",
            description: "Content marketing drives 3x more leads than traditional marketing at 62% less cost, making it highly efficient.",
            imageAlt: "Two colleagues reviewing documents together"
        },
        {
            imageUrl: img3,
            title: "Authentic Engagement",
            description: "Brands increasingly rely on certified professionals to build authentic engagement and trust with their target audiences.",
            imageAlt: "Person smiling and holding a smartphone"
        }
    ];

    return (
        <section className="w-full bg-white font-sans py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                    Key Highlights of This Influencer Marketing Course
                </h2>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Why Take This <span className="text-red-500">Influencer Marketing Course?</span>
                </h1>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {cardData.map((card, index) => (
                        <InfoCard 
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                            imageAlt={card.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComponentThree;
