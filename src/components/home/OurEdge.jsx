import React from 'react'
import { FaUnity } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";


const Edges = [
    {
        icon: <FaUnity />,
        title: "Uniting",
        para: 'We bring together your event with purpose and our extensive experience makes it memorable.'
    },
    {
        icon: <SiStorybook />,
        title: "Storytelling",
        para: 'Each brand has a journey to tell, we believe in creating appealing & striking visuals to back it up.'
    },
    {
        icon: <CgPerformance />,
        title: "Performing",
        para: 'Our focus is to attain utmost return on investment and pin down the potential audience for you.'
    },
]

const OurEdge = () => {
    return (
        <section className='py-10 px-6 lg:px-16 bg-page'>
            {/* title */}
            <div className='text-center space-y-4'>
                <p className='text-lg lg:text-xl font-bold font-body text-accent uppercase'>HOW Are We Different</p>
                <h3 className='text-4xl lg:text-5xl font-semibold font-heading tracking-tight uppercase'>OUR Edge</h3>
            </div>
            {/* 3 main content */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
                {/* 3 text */}
                {Edges.map((item, index) => (
                    <div className='text-center place-items-center p-3 space-y-7' key={index}>
                        <div className='text-5xl lg:text-6xl text-primary'>{item.icon}</div>
                        <div className='space-y-2'><h3 className='text-2xl lg:text-3xl font-heading tracking-tight font-semibold uppercase text-primary-dark'>{item.title}</h3>
                            <p className='font-body text-md lg:text-xl text-primary-dark'>{item.para}</p></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurEdge