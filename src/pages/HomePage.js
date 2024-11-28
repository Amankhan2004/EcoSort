import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center px-8 py-4 border-b shadow-sm">
        <span className="text-green-600 font-bold text-2xl tracking-wide">EcoSort</span>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-8 py-16 space-y-10 md:space-y-0 md:space-x-20">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-start space-y-6 max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">
            EcoSort for smarter recycling
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            EcoSort’s AI-powered technology categorizes waste 300% more accurately than human beings, making recycling simple and efficient.
          </p>
          <Link to="/camera">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              Open Camera
            </button>
          </Link>
        </div>

        {/* Right Section: Recycling GIF */}
        <div className="flex items-center justify-center max-w-md">
          <img
            src="https://i.pinimg.com/originals/92/4c/af/924cafad941065f4d5c03ca5423bfcd3.gif"
            alt="Recycling Animation"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
