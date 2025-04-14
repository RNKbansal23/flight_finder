import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">Success!</h2>
        <p className="text-gray-700 text-lg mb-8">
          Your booking has been successfully completed. Thank you for choosing our service!
        </p>
        <button
          onClick={handleGoHome}
          className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Success;