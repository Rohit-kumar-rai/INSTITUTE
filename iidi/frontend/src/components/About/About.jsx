import React from 'react';
import { useNavigate } from "react-router-dom";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import ComponentFour from "./ComponentFour";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full p-0 min-h-screen bg-gray-50">
            {/* Main content components */}
            <ComponentOne />
            <ComponentTwo />
            <ComponentThree />
            <ComponentFour />
            

            {/* Styled Navigation Section */}
            <div className="mt-12 flex justify-center gap-6 bg-white p-6 shadow-lg rounded-lg">
                <button
                    onClick={() => navigate("/")}
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                    Home
                </button>
                <button
                    onClick={() => navigate("/course")}
                    className="px-5 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
                >
                    Course
                </button>
                <button
                    onClick={() => navigate("/datascience")}
                    className="px-5 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
                >
                    Data Science
                </button>
                <button
                    onClick={() => navigate("/contact")}
                    className="px-5 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
                >
                    Contact
                </button>
            </div>
        </div>
    );
};

export default About;
