import React from "react";
import './LanguageSelect.css'

const LanguageSelect = () => {
  return (
    <div className="language-select">
      {/* Icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
          clipRule="evenodd"
        />
      </svg>

      {/* Select */}
      <select className="lang-dropdown">
        <option>English</option>
        <option>हिन्दी</option>
      </select>

      {/* Arrow */}
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default LanguageSelect;
