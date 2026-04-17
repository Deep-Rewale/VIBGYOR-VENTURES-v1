import React from 'react'
import HeroBanner from "../../assets/Portfolio/PortfolioHero/PortfolioHero.jpg"

const PortfolioHero = () => {
    return (
        <div className="portfolio bg-page relative rounded-b-2xl overflow-hidden">
            <div className="title absolute text-white z-10 text-7xl font-semibold font-heading top-40 left-20 uppercase">
                <h1>Events <br /> portfolio</h1>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45"></div>
            <img className='h-100 w-full object-cover ' loading='lazy' src={HeroBanner} alt="hero banner" />
        </div>
    )
}

export default PortfolioHero