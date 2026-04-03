import React from 'react';
import LandHeader from '../LandHeader/LandHeader';
import InputButton from '../InputButton/InputButton';

const LandHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <LandHeader />
      </div>

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative text-white text-center px-4 sm:px-6 md:px-10 lg:px-20 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
          Unlimited movies, shows, and more
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-9 opacity-90 font-bold">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="text-sm sm:text-base md:text-sm mb-6 opacity-90">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Input button */}
        <InputButton />
      </div>
    </section>
  );
};

export default LandHero;