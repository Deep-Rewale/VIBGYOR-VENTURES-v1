import React from 'react'
import { motion } from 'motion/react';
import Sol1 from "../../assets/BrandAndAD/SolutionsBrand/Corporate-Videos.jpg"
import Sol2 from "../../assets/BrandAndAD/SolutionsBrand/Commercial-Advertisement.avif"
import Sol3 from "../../assets/BrandAndAD/SolutionsBrand/Animation-Motion-Graphics.avif"
import Sol4 from "../../assets/BrandAndAD/SolutionsBrand/Editing-and-VFX.jpg"
import Sol5 from "../../assets/BrandAndAD/SolutionsBrand/Photo-Shoots.avif"
import Sol6 from "../../assets/BrandAndAD/SolutionsBrand/Brand-Design.jpg"





const Solutions = [
  {
    title: "Corporate & Other Videos",
    para: "Videos are a new way to be more visible to the customers. We create various videos like corporate, explanatory, teasers and so on. It is a creative tool for engaging with potentials.",
    image: Sol1,
  },
  {
    title: "Commercial Advertisement",
    para: "Commercial ads help capture the actual essence and message of the brand & product. Hence brings more following and awareness to it. From products to narratives – we shoot it all!",
    image: Sol2,
  },
  {
    title: "Animation & Motion Graphics",
    para: "Graphics evolves every year. It attracts and engages clients with use of animation & imagery. It breaks down complex information by making it creative & visually appealing.",
    image: Sol3,
  },
  {
    title: "Editing and VFX",
    para: "Going through raw footage can be a task. With our best professionals, let us filter through & turn your footage into a piece of art. It’s your story, we’ll help you tell it.",
    image: Sol4,
  },
  {
    title: "Photo Shoots",
    para: "In today’s time, seeing is the only option. Let us click and enhance your brand and product with a photoshoot. Name it and we click it. Lights. Camera. Clicks",
    image: Sol5,
  },
  {
    title: "Brand Design",
    para: "For improved recall in customers’ mind brand’s communication is consistent across all touchpoints. Brand Manual lays out guidelines for company’s visual & communication.",
    image: Sol6,
  },
];

const BrandSolutions = () => {
  return (
     <section className="bg-page py-10 lg:px-16 px-6">
      {/* title */}
      <div className="text-center space-y-2 lg:space-y-4">
        <p className="text-lg lg:text-xl font-bold font-body text-accent uppercase">
          How do we Support Your Brand
        </p>
        <h3 className="text-4xl lg:text-5xl font-semibold font-heading tracking-tight uppercase">
          Solutions we offer
        </h3>
      </div>

      {/* solutions offerd */}
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-10">
        {/* main cards */}
        {Solutions.map((item, index) => (
          <div
            key={index}
            className="group relative h-[350px] lg:h-[420px] w-full rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 will-change-transform will-change-opacity"
          >
            <img
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              src={item.image}
              alt={item.title}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            {/* Extra darkening layer on hover for text readability */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end md:translate-y-[100px] md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <div className="w-12 h-1.5 bg-accent mb-5 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 hidden md:block"></div>
              <h2 className="text-2xl lg:text-3xl text-white font-black uppercase tracking-tight mb-4 drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base text-gray-200 leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100 drop-shadow-sm">
                {item.para}
              </p>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-[40px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity"></div>
            <div className="absolute inset-0 border-2 border-white/10 group-hover:border-accent/40 rounded-[32px] transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandSolutions