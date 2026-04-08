import React from 'react'
import { GiBrain } from "react-icons/gi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FaAngrycreative } from "react-icons/fa";


const approch = [
  {
    icon: <GiBrain />,
    title: "Conceptualization",
    para: "Taking the essence from the client brief, it’s crucial to ideate the theme of the advertisement.",
  },
  {
    icon: <TbBrandYoutubeKids />,
    title: "Content Creation",
    para: "The actual production of ads & brand identity keeping it strictly close to the client’s image.",
  },
  {
    icon: <FaAngrycreative />,
    title: "Creative Positioning",
    para: "Deriving a strategy to make the brand stand out in a clutter media landscape and get noticed."
  },
];


const BrandApproach = () => {
  return (
    <section className="bg-gradient-to-br from-[#2d1b7a] via-[#3b2599] to-[#1a1040] py-10 px-16">
      {/* title */}
      <div className="text-center space-y-4">
        <p className="text-xl font-bold font-body text-accent uppercase">
          How do we Support Your Brand
        </p>
        <h3 className="text-5xl text-[#ede7f6] font-semibold font-heading tracking-tight uppercase">
          Solutions we offer
        </h3>
      </div>
      {/* full grid */}
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-10 gap-7 ">
        {/* main approch */}
        {approch.map((item, index) => (
          <div className="grid place-items-center text-center space-y-3">
            <p className="bg-accent h-25 w-25 text-6xl flex items-center justify-center rounded-full text-primary">
              {item.icon}
            </p>
            <h3 className="font-semibold text-2xl uppercase text-[#ede7f6]">
              {item.title}
            </h3>
            <p className="text-md text-[#ede7f6] ">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  
  )
}

export default BrandApproach