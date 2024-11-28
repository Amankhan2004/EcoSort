import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Back icon

function ResultPage() {
  const location = useLocation();
  const { imageURL, topResult } = location.state || {};

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center px-8 py-4 border-b shadow-sm">
        <span className="text-green-600 font-bold text-2xl tracking-wide">EcoSort</span>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-8 py-16 space-y-10 md:space-y-0 md:space-x-20">
        {/* Image Result */}
        <div className="flex flex-col items-center space-y-6 max-w-lg">
          <h2 className="text-5xl font-extrabold text-gray-800 text-center">
            Result
          </h2>
          {imageURL ? (
            <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageURL}
                alt="Result"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <p className="text-lg text-gray-600">No image available</p>
          )}
          {topResult && (
            <p className="text-lg text-gray-600 text-center">
              <strong>Item Material:</strong> {topResult.label}
              <br />
              <strong>Recyclable: </strong> {topResult.label !== 'trash' ? 'Yes' : 'No'}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-6">
          <Link to="/">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              Home Page
            </button>
          </Link>
          <Link to="/camera">
            <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              <FaArrowLeft className="text-lg" />
              <span>Capture Again</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
