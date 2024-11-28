import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CameraPage = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Convert the image to a Blob for the API call
    const response = await fetch(imageSrc);
    const blob = await response.blob();

    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append('file', blob, 'captured_image.jpg');

    // Make the API call
    try {
      const apiResponse = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        body: formData,
      });

      if (!apiResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await apiResponse.json();
      navigate('/result', {
        state: {
          imageURL: imageSrc,
          topResult: data[0],
        },
      });
    } catch (error) {
      console.error('Error calling the API:', error);
    }
  }, [webcamRef, navigate]);

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center px-8 py-4 border-b shadow-sm">
        <span className="text-green-600 font-bold text-2xl tracking-wide">EcoSort</span>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-8 py-16 space-y-10 md:space-y-0 md:space-x-20">
        {/* Left Section: Webcam */}
        <div className="flex flex-col items-center space-y-6 max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Capture and Sort
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Use the camera below to capture an image of your waste item and let EcoSort do the sorting for you!
          </p>
          <div className="relative">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-80 h-60 sm:w-96 sm:h-72 md:w-[500px] md:h-[350px] border-2 border-gray-300 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section: Capture Button */}
        <div className="flex flex-col items-center space-y-8">
          <button
            onClick={capture}
            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <FaCamera className="text-xl" />
            <span>Capture Photo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
