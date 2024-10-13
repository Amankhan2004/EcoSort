import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icon for confirmation

function ImagePreviewPage({ image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-300 via-teal-400 to-slate-600 p-8 space-y-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white tracking-wide">Image Preview</h1>

      {/* Image Preview with Size Constraints */}
      <div className="w-full max-w-3xl">
        <img
          src={image}
          alt="Captured"
          className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Proceed Button */}
      <button className="flex items-center space-x-2 px-8 py-3 bg-emerald-600 text-white rounded-full font-medium text-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
        <FaCheckCircle className="text-xl" />
        <span>Proceed with this Image</span>
      </button>
    </div>
  );
}

export default ImagePreviewPage;
