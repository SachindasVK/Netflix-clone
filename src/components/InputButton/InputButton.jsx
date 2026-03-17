import React, { useRef } from 'react'

const InputButton = () => {
  const inputRef = useRef(null);
    const handleRef = () => {
        inputRef.current.focus();
    }
  return (
    <div className='flex gap-2'>
      <div className="flex flex-col sm:flex-row justify-center gap-3 text-white">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter email"
        className="px-4 py-3 rounded bg-black/70 border border-gray-500 w-full sm:w-[450px]"
      />
    </div>
      <button
      onClick={handleRef}
      className="bg-red-600 px-6 py-3 rounded text-2xl font-bold hover:bg-red-700 flex items-center gap-2"
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
  )
}

export default InputButton
