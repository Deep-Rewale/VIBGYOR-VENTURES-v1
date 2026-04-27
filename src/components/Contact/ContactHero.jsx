import React from 'react'
import HeroBanner from "../../assets/Contact/ContactHero/contactBanner1.jpg"

const ContactHero = () => {
    return (
        <div className="portfolio bg-page  relative rounded-b-2xl overflow-hidden">
            <div className="title absolute text-white z-10 text-5xl lg:text-7xl  font-semibold font-heading top-35 lg:top-50 left-10 lg:left-20 uppercase">
                <h1>Contact</h1>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45"></div>
            <img className='h-70 lg:h-100 w-full object-cover ' loading='lazy' src={HeroBanner} alt="hero banner" />
        </div>
    )
}

export default ContactHero