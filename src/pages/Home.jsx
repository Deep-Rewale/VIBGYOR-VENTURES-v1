import React from 'react'
import HomeHero from '../components/home/HomeHero'
import { div } from 'motion/react-client'
import HomeAbout from '../components/home/HomeAbout'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
    </div>
    
  )
}

export default Home