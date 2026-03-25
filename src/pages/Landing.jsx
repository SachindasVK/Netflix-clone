import React from 'react'
import LandHero from '../components/LandHero/LandHero'
import MoviCards from '../components/MovieCards/MovieCards'
import Reason from '@/components/MoreReasonJoin/Reason'
import Questions from '@/components/AskedQuestions/Questions'
import LandFooter from '@/components/LandFooter/LandFooter'

const Landing = () => {
  return (
    <div>
      <LandHero />
      <MoviCards />
      <Reason />
      <Questions />
      <LandFooter />
    </div>
  )
}

export default Landing
