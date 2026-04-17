import React from 'react'
import img1 from "../../assets/Portfolio/Work/work1.jpg"
import img2 from "../../assets/Portfolio/Work/work2.jpg"
import img3 from "../../assets/Portfolio/Work/work3.jpg"
import img4 from "../../assets/Portfolio/Work/work4.jpg"
import { ImTelegram } from 'react-icons/im'
import { div } from 'motion/react-client'

const Images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 }
]

const Work = () => {
    return (
        <section className='bg-page py-10 px-16'>
            {/* left and right text */}

            <div className='grid grid-cols-2 mb-10'>
                {/*left text  */}
                <div>
                    <h1 className='font-body text-4xl font-semibold text-primary-dark'>Our Work Showcase</h1>
                </div>
                {/*  right para  */}
                <div>
                    <p className='text-lg text-main'>We bring ideas to life through seamless event management, strategic branding, and thoughtful corporate gifting solutions. From planning and executing impactful events to crafting unique brand identities, our approach focuses on creating meaningful experiences that leave a lasting impression.</p>
                </div>
            </div>

            {/*  image gallery */}

            <div className='grid grid-cols-3 gap-5 '>
                {Images.map((item, index) => (
                    <div key={index} className={`${index === 0 || index === 3 ? "col-span-2" : ""} `}>
                        <img className={`h-80 w-full rounded-2xl object-cover ${index === 3 ? "object-[center_20%]" : ""}`} src={item.img} alt="event images" /> </div>
                ))}
            </div>
        </section>
    )
}

export default Work