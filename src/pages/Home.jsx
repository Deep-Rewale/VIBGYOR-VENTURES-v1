import React from 'react'
import HomeHero from '../components/home/HomeHero'
import { div } from 'motion/react-client'
import HomeAbout from '../components/home/HomeAbout'
import OurServices from '../components/home/OurServices'
import OurEdge from '../components/home/OurEdge'
import Highlights from '../components/home/Highlights'
import Portfolio from '../components/home/Portfolio'
import Brands from '../components/home/Brands'
import Testmonial from '../components/home/Testmonial'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <OurServices />
      <OurEdge />
      <Highlights />
      <Portfolio />
      <Brands />
      <Testmonial />
      
    </div>
    
  )
}

export default Home