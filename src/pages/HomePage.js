import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to EcoSort</h1>
      <Link to="/camera">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Open Camera
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
