import React from 'react'
import { motion } from "framer-motion";
import BrandImg1 from "../../assets/Home/Brands/Brand1.png"
import BrandImg2 from "../../assets/Home/Brands/Brand2.png"
import BrandImg3 from "../../assets/Home/Brands/Brand3.png"
import BrandImg4 from "../../assets/Home/Brands/Brand4.png"
import BrandImg5 from "../../assets/Home/Brands/Brand5.png"
import BrandImg6 from "../../assets/Home/Brands/Brand6.png"
import BrandImg7 from "../../assets/Home/Brands/Brand7.png"
import BrandImg8 from "../../assets/Home/Brands/Brand8.png"
import BrandImg9 from "../../assets/Home/Brands/Brand9.png"
import BrandImg10 from "../../assets/Home/Brands/Brand10.png"
import BrandImg11 from "../../assets/Home/Brands/Brand11.png"
import BrandImg12 from "../../assets/Home/Brands/Brand12.png"
import BrandImg13 from "../../assets/Home/Brands/Brand13.png"
import BrandImg14 from "../../assets/Home/Brands/Brand14.png"
import BrandImg15 from "../../assets/Home/Brands/Brand15.png"
import BrandImg16 from "../../assets/Home/Brands/Brand16.png"
import BrandImg17 from "../../assets/Home/Brands/Brand17.png"
import BrandImg18 from "../../assets/Home/Brands/Brand18.png"
import BrandImg19 from "../../assets/Home/Brands/Brand19.png"
import BrandImg20 from "../../assets/Home/Brands/Brand20.png"
import BrandImg21 from "../../assets/Home/Brands/Brand21.png"
import BrandImg22 from "../../assets/Home/Brands/Brand22.png"
import BrandImg23 from "../../assets/Home/Brands/Brand23.png"
import BrandImg24 from "../../assets/Home/Brands/Brand24.png"

const images = [
    { img: BrandImg1 }, { img: BrandImg2 }, { img: BrandImg3 }, { img: BrandImg4 },
    { img: BrandImg5 }, { img: BrandImg6 }, { img: BrandImg7 }, { img: BrandImg8 },
    { img: BrandImg9 }, { img: BrandImg10 }, { img: BrandImg11 }, { img: BrandImg12 },
    { img: BrandImg13 }, { img: BrandImg14 }, { img: BrandImg15 }, { img: BrandImg16 },
    { img: BrandImg17 }, { img: BrandImg18 }, { img: BrandImg19 }, { img: BrandImg20 },
    { img: BrandImg21 }, { img: BrandImg22 }, { img: BrandImg23 }, { img: BrandImg24 }
]

// Split images into 3 rows for the multi-directional effect
const row1 = images.slice(0, 8);
const row2 = images.slice(8, 16);
const row3 = images.slice(16, 24);

const MarqueeRow = ({ items, direction = 1, speed = 40 }) => (
    <div className="relative flex overflow-hidden w-full py-2 lg:py-3">
        <motion.div 
            className="flex whitespace-nowrap items-center" 
            animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            style={{ width: "fit-content" }}
        >
            {/* Render 3 times to ensure no gaps depending on screen width */}
            {[...items, ...items, ...items].map((image, index) => (
                <div className='w-[180px] lg:w-[280px] flex-shrink-0 flex items-center justify-center px-3 lg:px-4 group' key={index}>
                    <div className="w-full h-[100px] lg:h-[130px] rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center p-6 backdrop-blur-sm hover:bg-white/10 hover:border-accent/40 transition-all duration-500 shadow-lg cursor-pointer">
                        <img 
                            className='max-h-full w-auto object-contain group-hover:scale-110 transition-all duration-500' 
                            src={image.img} 
                            alt={`Client Brand`} 
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
);

const Brands = () => {
    return (
        <section className='py-24 lg:py-32 bg-[#050505] relative overflow-hidden'>
             {/* Gradient fade masks to hide the edges of the marquee */}
             <div className="absolute left-0 top-0 z-20 h-full w-[80px] lg:w-[250px] bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
             <div className="absolute right-0 top-0 z-20 h-full w-[80px] lg:w-[250px] bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

             {/* Ambient Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

            {/* Title Area */}
            <div className='flex flex-col items-center text-center space-y-4 mb-16 relative z-30 px-6'>
                <motion.div 
                    initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className='text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-gray-300 uppercase'>
                        Trusted By The Best
                    </span>
                </motion.div>
                <motion.h3 
                    initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}
                    className='text-4xl lg:text-5xl xl:text-6xl font-black text-white font-heading tracking-tighter'
                >
                    Our Clients
                </motion.h3>
            </div>

            {/* Dramatic Tilted Multi-Directional Marquee Wall */}
            <div className="relative z-10 flex flex-col mt-10 lg:mt-20 transform -rotate-3 scale-110">
                <MarqueeRow items={row1} direction={1} speed={55} />
                <MarqueeRow items={row2} direction={-1} speed={45} />
                <MarqueeRow items={row3} direction={1} speed={65} />
            </div>
        </section>
    )
}

export default Brands