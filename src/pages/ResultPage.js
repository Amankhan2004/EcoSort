import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Back icon

function ResultPage() {
  const location = useLocation();
  const { imageURL } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-emerald-300 via-teal-400 to-slate-600 p-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Result</h2>

      {/* Image Display */}
      {imageURL ? (
        <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg mb-6">
          <img
            src={imageURL}
            alt="Result"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <p className="text-white text-lg mb-6">No image available</p>
      )}

      {/* Image URL */}
      {imageURL && (
        <p className="text-white text-center text-sm bg-emerald-700 bg-opacity-60 px-4 py-2 rounded-lg mb-6">
          <strong>Image URL:</strong> {imageURL}
        </p>
      )}

      {/* Back Button */}
      <Link to="/">
        <button className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
          <FaArrowLeft className="text-lg" />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
}

export default ResultPage;