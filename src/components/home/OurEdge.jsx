import React from 'react'
import { motion } from 'framer-motion'
import { FaUnity } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";

const Edges = [
    {
        icon: <FaUnity />,
        title: "Uniting",
        para: 'We bring together your event with purpose and our extensive experience makes it memorable.',
        delay: 0.1
    },
    {
        icon: <SiStorybook />,
        title: "Storytelling",
        para: 'Each brand has a journey to tell, we believe in creating appealing & striking visuals to back it up.',
        delay: 0.2
    },
    {
        icon: <CgPerformance />,
        title: "Performing",
        para: 'Our focus is to attain utmost return on investment and pin down the potential audience for you.',
        delay: 0.3
    },
]

const OurEdge = () => {
    return (
        <section className='py-24 px-6 lg:px-16 bg-[#fafafa] relative overflow-hidden'>
            {/* Ambient Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200/50 to-transparent pointer-events-none"></div>
            
            <div className='max-w-[1440px] mx-auto relative z-10'>
                {/* Title Area */}
                <div className='flex flex-col items-center text-center space-y-4 mb-20'>
                    <motion.div 
                        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <span className='text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase'>How Are We Different</span>
                    </motion.div>
                    <motion.h3 
                        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}
                        className='text-4xl lg:text-5xl xl:text-6xl font-black font-heading tracking-tighter text-gray-900'
                    >
                        Our Edge
                    </motion.h3>
                </div>

                {/* 3 Main Content Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
                    {Edges.map((item, index) => (
                        <motion.div 
                            initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: item.delay, duration: 0.6, ease: "easeOut"}}
                            key={index}
                            className='group bg-white rounded-[2rem] p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden'
                        >
                            {/* Accent Glow on Hover */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700"></div>

                            {/* Icon Container */}
                            <div className='w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-4xl lg:text-5xl text-primary-dark mb-8 group-hover:scale-110 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500 shadow-sm'>
                                {item.icon}
                            </div>
                            
                            {/* Text Content */}
                            <h3 className='text-2xl lg:text-3xl font-black font-heading tracking-tight text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300'>
                                {item.title}
                            </h3>
                            <p className='font-body text-gray-500 leading-relaxed text-sm lg:text-base'>
                                {item.para}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurEdge