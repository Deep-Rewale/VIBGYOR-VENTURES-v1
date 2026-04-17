import React from 'react'
import Branding from "../../assets/BrandAndAD/BrandHero/Branding.avif"

const BrandAds = () => {
  return (
     <div className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center py-20" style={{backgroundImage: `url(${Branding})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        <h1 className="text-6xl z-10 uppercase mt-10 text-[#ede7f6] font-semibold font-heading">
      Advertise your Brand
        </h1>
      </div>
  )
}

export default BrandAds