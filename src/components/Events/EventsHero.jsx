import React from 'react'
import EventHero from "../../assets/Events/EventHERO/EventHero.jpg"

const EventsHero = () => {
  return (
      <div className=" relative flex items-center  bg-no-repeat bg-center bg-cover justify-center py-10 px-6 lg:py-20" style={{ backgroundImage: `url(${EventHero})` }}>
       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        <h1 className="text-4xl lg:text-6xl z-10 uppercase mt-10 text-[#ede7f6] font-semibold font-heading">
         Events By the best
        </h1>
      </div>
  )
}

export default EventsHero