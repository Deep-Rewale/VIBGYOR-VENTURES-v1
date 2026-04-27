import React from 'react'
import { motion } from "motion/react";
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
    { img: BrandImg1 },
    { img: BrandImg2 },
    { img: BrandImg3 },
    { img: BrandImg4 },
    { img: BrandImg5 },
    { img: BrandImg6 },
    { img: BrandImg7 },
    { img: BrandImg8 },
    { img: BrandImg9 },
    { img: BrandImg10 },
    { img: BrandImg11 },
    { img: BrandImg12 },
    { img: BrandImg13 },
    { img: BrandImg14 },
    { img: BrandImg15 },
    { img: BrandImg16 },
    { img: BrandImg17 },
    { img: BrandImg18 },
    { img: BrandImg19 },
    { img: BrandImg20 },
    { img: BrandImg21 },
    { img: BrandImg22 },
    { img: BrandImg23 },
    { img: BrandImg24 }
]
const Brands = () => {
    return (
        <section className='py-10 px-6 lg:px-16 bg-accent'>
            {/* title  */}
            <div className='text-center space-y-4'>
                <p className='text-lg lg:text-xl font-bold font-body text-primary uppercase'>Who we work with</p>
                <h3 className='text-4xl lg:text-5xl font-semibold text-primary-dark font-heading tracking-tight uppercase'>OUR CLIENTS</h3>
            </div>
            {/* infinity loop brands images */}

            <div
                className=" py-15  w-full overflow-hidden flex BrandGradint">

                <motion.div className=" flex whitespace-nowrap  " animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}>
                    {images.map((image, index) => (
                        <div className='h-[140px] w-[200px]   flex-shrink-0 flex items-center justify-center rounded-xl ' key={index}>
                            <img className='h-[60%]  lg:h-[80%] w-auto object-contain  pr-16 ' src={image.img} alt="" />
                        </div>
                    ))}
                </motion.div>

                <motion.div className=" flex whitespace-nowrap " animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}>
                    {images.map((image, index) => (
                        <div className='h-[140px] w-[200px]   flex-shrink-0 flex items-center justify-center  rounded-xl' key={index}>
                            <img className='h-[80%] w-auto object-contain  pr-16 ' src={image.img} alt="" />
                        </div>
                    ))}
                </motion.div>
            </div>


        </section>
    )
}

export default Brands