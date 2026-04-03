import Hero from '@/components/Hero/Hero'
import LandFooter from '@/components/LandFooter/LandFooter'
import MovieCards from '@/components/MovieCards/MovieCards'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Tvshows = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <MovieCards type={"tv"} category={"on_the_air"} title={"Watch Tv shows"} />
        <MovieCards type={"tv"} category={"top_rated"} title={"Watch Top rated"} />
        <MovieCards type={"tv"} category={"popular"} title={"Watch popular"} />
        <LandFooter />
    </div>
  )
}

export default Tvshows
