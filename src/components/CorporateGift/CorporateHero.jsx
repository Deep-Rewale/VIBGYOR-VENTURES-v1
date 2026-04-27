import React from 'react'
import GiftingHero from "../../assets/Corporate/GiftingHero/Gifting.jpg"

const CorporateHero = () => {
  return (
   <div className="relative bg-cover bg-no-repeat flex items-center bg-center justify-center px-6 py-10 lg:py-20" style={{backgroundImage: `url(${GiftingHero})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/35"></div>
        <h1 className="text-4xl lg:text-6xl z-10 uppercase mt-10 text-[#ede7f6] font-semibold font-heading">
      Create Value Through Gifting
        </h1>
      </div>
  )
}

export default CorporateHero