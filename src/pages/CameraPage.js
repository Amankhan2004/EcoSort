import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraPage = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Take a Picture</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="border-2 border-gray-300 rounded"
      />
      <button
        onClick={capture}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Capture Photo
      </button>
      {imgSrc && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Captured Image:</h2>
          <img src={imgSrc} alt="Captured" className="mt-2 border-2 border-gray-300 rounded" />
        </div>
      )}
    </div>
  );
};

export default CameraPage;
