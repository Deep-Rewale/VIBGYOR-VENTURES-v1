import React from 'react'
import img1 from "../../assets/Home/Portfolio/1.jpg"
import img2 from "../../assets/Home/Portfolio/02-4.jpg"
import img3 from "../../assets/Home/Portfolio/3.jpg"
import img4 from "../../assets/Home/Portfolio/4.jpg"
import img5 from "../../assets/Home/Portfolio/10-5.jpg"
import img6 from "../../assets/Home/Portfolio/14-4.jpg"
import img7 from "../../assets/Home/Portfolio/28.jpg"
import img8 from "../../assets/Home/Portfolio/being-human.jpg"
import img9 from "../../assets/Home/Portfolio/IMG_8590-1.jpg"
import { image } from 'motion/react-client'
import Button from '../Button/Button'


const images = [
    { images: img1 },
    { images: img2 },
    { images: img3 },
    { images: img4 },
    { images: img5 },
    { images: img6 },
    { images: img7 },
    { images: img8 },
    { images: img9 },

]

const Portfolio = () => {
    return (
        <section className=' bg-page py-14 px-6 lg:px-16'>
            {/* main content box */}
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 place-items-center'>
                {/* left text */}
                <div className='space-y-6 max-lg:order-2'>
                    <p className='text-lg lg:text-xl font-bold text-accent font-body'>WHY BELIEVE US</p>
                    <h3 className='text-4xl lg:text-5xl uppercase font-heading tracking-tight text-primary-dark font-semibold' >Our Portfolio</h3>

                    <p className='lg:max-w-xl font-body text-lg text-primary-dark'>We take pride in delivering impactful experiences through event management, branding, and corporate gifting solutions. Each project reflects our commitment to creativity, precision, and client satisfaction, ensuring every detail aligns with the brand’s vision.</p>
                    <p className='lg:max-w-xl font-body text-lg text-primary-dark'>From managing large-scale events to crafting compelling brand identities and premium gifting solutions, our portfolio showcases a diverse range of successful collaborations that leave a lasting impression.</p>
                    <div>
                        <Button text={"VIEW PORTFOLIO"} paddingX="px-7" paddingY="py-2" hoverText={"text-primary-dark"} textSize={" text-md lg:text-lg"} Redirect={"/portfolio"} />
                    </div>
                </div>

                {/* right images */}
                <div className='grid grid-cols-4 gap-2 max-lg:order-1 '>
                    {images.map((item, index) => (
                        <div key={index} className={`${index === 0 || index === 4 || index === 8 ? "col-span-2 " : ""}`}>
                            <img className='h-50 w-full object-cover rounded-md' src={item.images} alt="Portfolio images" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio