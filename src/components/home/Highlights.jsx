import React from 'react'
import { motion } from 'framer-motion'

const numbers = [
    { num: "1000+", text: "Projects Completed", delay: 0.1 },
    { num: "15+", text: "Years' Experience", delay: 0.2 },
    { num: "60+", text: "Clients Served", delay: 0.3 },
    { num: "30+", text: "Team Members", delay: 0.4 }
]

const Highlights = () => {
    return (
        <section className='bg-[#050505] py-20 px-6 lg:px-16 border-t border-white/5 relative overflow-hidden'>
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-50%] left-[20%] w-[40%] h-[100%] rounded-full bg-accent opacity-5 blur-[120px] mix-blend-screen"></div>
            </div>

            <div className='max-w-[1440px] mx-auto relative z-10'>
                {/* Title */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-white/10 pb-8'>
                    <div className="space-y-3 text-center md:text-left">
                        <motion.div 
                            initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
                            className="inline-flex items-center gap-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <span className='text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase'>
                                Why Believe Us
                            </span>
                        </motion.div>
                        <motion.h3 
                            initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.1}}
                            className='text-3xl lg:text-5xl font-black text-white font-heading tracking-tight'
                        >
                            Our Highlights
                        </motion.h3>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x-0 lg:divide-x divide-white/10'>
                    {numbers.map((item, index) => (
                        <motion.div 
                            initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: item.delay, duration: 0.6}}
                            key={index} 
                            className='flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12 first:pl-0 group'
                        >
                            <h3 className='text-5xl lg:text-7xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 mb-2 group-hover:to-white transition-all duration-500 drop-shadow-xl'>
                                {item.num}
                            </h3>
                            <p className='text-xs lg:text-sm font-bold font-body tracking-wider text-accent uppercase'>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Highlights