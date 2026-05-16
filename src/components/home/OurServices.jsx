import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GoArrowUpRight } from "react-icons/go";
import img1 from "../../assets/Home/services/eventMan.jpg"
import img2 from "../../assets/Home/services/branding.jpg"
import img3 from "../../assets/Home/services/corpGits.jpg"

const ourServicesContent = [
  {
    title: "EVENT MANAGEMENT",
    paras: [
      "Corporate Events",
      "Virtual Events",
      "MICE",
      "Celebrity Engagements",
      "Weddings",
      "Retail & Exhibitions"
    ],
    Links: "/events",
    image: img1
  },
  {
    title: "BRANDING & ADVERTISING",
    paras: [
      "Corporate & Other Videos",
      "Commercial Ads",
      "Animation & Motion Graphics",
      "Editing & VFX",
      "Photoshoots",
      "Brand Design"
    ],
    Links: "/branding&Ad",
    image: img2,
  },
  {
    title: "CORPORATE GIFTING",
    paras: [
      "Customized Corporate Gifts",
      "Employee Welcome Kits",
      "Festive & Seasonal Gift Hampers",
      "Promotional Merchandise",
      "Luxury & Premium Gifts",
      "Bulk Gifting Solutions"
    ],
    Links: "/corporategifting",
    image: img3,
  },
]

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className='bg-[#050505] py-16 lg:py-24 px-4 lg:px-16 relative overflow-hidden'>
      {/* Background ambient light */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#5a4be7] opacity-10 blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className='max-w-[1440px] mx-auto relative z-10'>
        {/* Title Area */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-16'>
           <div className="space-y-4 text-center lg:text-left">
             <motion.div 
               initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
             >
               <span className="w-2 h-2 rounded-full bg-accent"></span>
               <span className='text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase'>Capabilities</span>
             </motion.div>
             <motion.h3 
               initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}
               className='text-4xl lg:text-5xl xl:text-6xl font-black font-heading tracking-tighter text-white'
             >
               What We Do
             </motion.h3>
           </div>
           
           <motion.p 
             initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}
             className="text-gray-400 max-w-lg font-body text-center lg:text-right text-sm lg:text-base leading-relaxed"
           >
             We deliver immersive event management, high-end branding, and premium corporate gifting solutions designed to elevate your brand to the next level.
           </motion.p>
        </div>

        {/* Expanding Flex Accordion */}
        <div className='flex flex-col lg:flex-row w-full h-[700px] lg:h-[650px] gap-3 lg:gap-5'>
          {ourServicesContent.map((item, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer flex flex-col justify-end min-h-[100px] lg:min-h-0 ${isActive ? 'lg:flex-[3.5] flex-[4]' : 'lg:flex-[1] flex-[1]'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 transition-colors duration-700 z-10 ${isActive ? 'bg-black/20' : 'bg-black/60 group-hover:bg-black/40'}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent z-10 opacity-90"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-105'}`}
                  />
                </div>

                {/* Inactive Vertical Layout (Desktop Only) */}
                <div className={`absolute inset-0 z-20 hidden lg:flex flex-col items-center justify-end pb-12 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-300'}`}>
                   <span className="text-4xl font-black font-heading tracking-[0.15em] text-white/40 group-hover:text-white transition-colors duration-500 uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {item.title}
                   </span>
                   <div className="mt-10 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md bg-white/5 font-bold font-heading text-lg">
                      0{index + 1}
                   </div>
                </div>

                {/* Inactive Horizontal Layout (Mobile Only) */}
                <div className={`absolute inset-0 z-20 flex lg:hidden flex-row items-center justify-between px-6 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-300'}`}>
                   <span className="text-lg font-black font-heading tracking-widest text-white uppercase whitespace-nowrap">
                      {item.title}
                   </span>
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md bg-white/5 font-bold font-heading text-xs">
                      0{index + 1}
                   </div>
                </div>

                {/* Active Content Layout (Visible when active) */}
                <div className={`relative z-30 p-6 lg:p-12 flex flex-col justify-end h-full w-full transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10 pointer-events-none absolute bottom-0'}`}>
                   
                   <div className="flex items-center gap-4 lg:gap-6 mb-6">
                     <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-accent flex items-center justify-center text-white font-black font-heading text-lg lg:text-xl shadow-[0_0_30px_rgba(232,160,32,0.4)] shrink-0">
                        0{index + 1}
                     </div>
                     <h3 className="text-2xl lg:text-4xl xl:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                       {item.title}
                     </h3>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 w-full lg:w-[85%]">
                      {item.paras.map((p, i) => (
                        <span key={i} className='px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30 transition-colors rounded-xl text-[10px] lg:text-sm font-bold text-white shadow-lg cursor-default'>
                          {p}
                        </span>
                      ))}
                   </div>
                   
                   <Link to={item.Links} className="inline-flex w-max items-center gap-4 px-6 py-3 lg:px-8 lg:py-4 bg-white text-primary-dark rounded-full font-black text-xs lg:text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all duration-300 group/btn shadow-xl">
                      Explore 
                      <span className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                        <GoArrowUpRight size={22} />
                      </span>
                   </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServices