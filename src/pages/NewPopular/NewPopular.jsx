import Hero from '@/components/Hero/Hero'
import LandFooter from '@/components/LandFooter/LandFooter'
import MovieCards from '@/components/MovieCards/MovieCards'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const NewPopular = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <MovieCards type={"movie"} category={"upcoming"} title={"Watch New"} />
        <MovieCards type={"movie"} category={"popular"} title={"Watch Popular"} />
        <MovieCards type={"movie"} category={"top_rated"} title={"Watch top rated"} />
        <LandFooter />
        
    </div>
  )
}

export default NewPopular
