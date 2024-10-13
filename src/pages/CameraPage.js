import React, { useRef } from 'react'; // Removed useState
import Webcam from 'react-webcam';
import { FaLeaf, FaCamera } from 'react-icons/fa'; // Eco-friendly icons
import { useNavigate } from 'react-router-dom';

const CameraPage = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    // Convert the image to a Blob for the API call
    const response = await fetch(imageSrc);
    const blob = await response.blob();

    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append('file', blob, 'captured_image.jpg'); // Set the filename as needed

    // Make the API call
    try {
      const apiResponse = await fetch('http://10.19.95.173:8000/predict/', {
        method: 'POST',
        body: formData,
      });

      if (!apiResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await apiResponse.json();
      // Navigate to ResultPage with the image and result data
      navigate('/result', {
        state: {
          imageURL: imageSrc,
          topResult: data[0] // Pass the top result
        },
      });
    } catch (error) {
      console.error('Error calling the API:', error);
    }
  }, [webcamRef, navigate]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-300 via-teal-400 to-slate-600 p-8">
      {/* Header Section */}
      <div className="flex items-center space-x-3 mb-6 justify-center">
        <FaLeaf className="text-3xl text-white drop-shadow-md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
          EcoSort
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        {/* Webcam Section */}
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-80 h-60 sm:w-96 sm:h-72 md:w-[500px] md:h-[350px] border-2 border-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Capture Button */}
        <button
          onClick={capture}
          className="flex items-center space-x-2 px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          <FaCamera className="text-xl" />
          <span>Capture Photo</span>
        </button>
      </div>
    </div>
  );
};

export default CameraPage;
