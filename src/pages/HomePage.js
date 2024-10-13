import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa'; // Eco-friendly icon

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-300 via-teal-400 to-slate-600 p-8 space-y-10">
      {/* Header with subtle icon */}
      <div className="flex items-center space-x-3">
        <FaLeaf className="text-4xl text-emerald-700" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          Welcome to EcoSort
        </h1>
      </div>

      {/* Introductory Text */}
      <p className="text-lg text-white text-center max-w-xl leading-relaxed">
        Make sorting and recycling effortless. Use EcoSort to categorize your waste and reduce your environmental impact.
      </p>

      {/* Call to Action Button */}
      <Link to="/camera">
        <button className="flex items-center space-x-2 px-8 py-3 bg-emerald-600 text-white rounded-full font-medium text-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
          <FaLeaf className="text-lg" />
          <span>Open Camera</span>
        </button>
      </Link>

      {/* Footer with Motivational Message */}
      <footer className="mt-auto text-center text-sm text-white opacity-80">
        🌿 Small steps lead to big changes. Let's sort for a greener future.
      </footer>
    </div>
  );
}

export default HomePage;