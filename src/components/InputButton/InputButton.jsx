import React, { useRef } from 'react';

const InputButton = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
      
      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter email"
        className="px-4 sm:px-6 w-full sm:w-[28rem] md:w-[20rem] lg:w-[32rem] h-14 rounded bg-black/60 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      {/* Button */}
      <button
        onClick={handleRef}
        className="bg-red-600 px-6 sm:px-8 h-14 rounded text-lg sm:text-xl md:text-xl font-bold hover:bg-red-700 flex items-center gap-2 justify-center w-full sm:w-auto whitespace-nowrap"
      >
        Get Started
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputButton;