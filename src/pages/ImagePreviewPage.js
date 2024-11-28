import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icon for confirmation

function ImagePreviewPage({ image }) {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center px-8 py-4 border-b shadow-sm">
        <span className="text-green-600 font-bold text-2xl tracking-wide">EcoSort</span>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-8 py-16 space-y-10 md:space-y-0 md:space-x-20">
        {/* Left Section: Image Preview */}
        <div className="flex flex-col items-center space-y-6 max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 text-center">
            Image Preview
          </h1>
          <div className="w-full max-w-3xl">
            <img
              src={image}
              alt="Captured"
              className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section: Proceed Button */}
        <div className="flex items-center justify-center">
          <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <FaCheckCircle className="text-xl" />
            <span>Proceed with this Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePreviewPage;