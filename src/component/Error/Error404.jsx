import React from 'react';
import 'tailwindcss/tailwind.css';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <div className="max-w-md px-8 py-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600">404!</h1>
          <p className="mt-2 text-lg font-bold text-red-600">
            ERROR!
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">The page you are looking for doesn't exist.</p>
          <p className="text-gray-600">Let's get you back to safety.</p>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            className="px-4 py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
