import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { imageURL } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h2 className="text-2xl mb-4">Result</h2>
      {imageURL && <img src={imageURL} alt="Result" className="w-64 h-64 object-cover mb-4" />}
      <p className="text-lg">Image URL: {imageURL}</p>
    </div>
  );
}

export default ResultPage;
