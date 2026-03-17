import React from 'react'
import LandHeader from '../LandHeader/LandHeader'
import InputButton from '../InputButton/InputButton'

const LandHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-linear-to-br from-black via-gray-900 to-black">
      {/* Header */}
  <div className="absolute top-0 left-0 w-full z-20">
    <LandHeader />
  </div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        alt=""
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/100 via-black/40 to-black/100 pointer-events-none" />

      <div className="relative text-white text-center px-4">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl font-bold leading-tight mb-6 drop-shadow-2xl">
          Unlimited movies, shows, and more
        </h1>

        <p className="text-lg md:text-2xl mb-9 opacity-90 font-bold">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="text-lg md:text-xl sm:text-sm mb-6 opacity-90">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Input button */}
        <InputButton />
      </div>
    </section>
  )
}

export default LandHero
