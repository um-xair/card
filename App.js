import React from 'react';
import './index.css'; // Ensure Tailwind CSS is being imported

function App() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>

      {/* Centered text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-semibold">Gradient Background in One File</h1>
      </div>
    </div>
  );
}

export default App;
