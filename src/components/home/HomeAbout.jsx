import React from 'react'
import AboutImg from "../../assets/Home/About/Bhavesh-soni-01.jpg"
import Button from '../Button/Button'
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section className='bg-page py-10 px-16'>
    {/* full container */}
    <div className='grid grid-cols-2 items-center gap-3 max-w-6xl mx-auto'>
        {/* Left image */}
    <motion.div className='w-full' initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}>
        <img className='object-cover  rounded-xl shadow-2xl' src={AboutImg} alt="" />
    </motion.div>
    {/* right image */}
    <motion.div initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }} className="right-content max-w-xl space-y-6">
       <p className='text-accent text-xl font-body font-semibold uppercase'>who we are</p> 
       <h2 className='text-primary-dark text-5xl uppercase tracking-tight font-heading font-semibold'>About us</h2>
       <p className='text-lg text-primary-dark font-body'>Rooted in 2014, Foresight Events and Media Group (formerly known as Foresight Events and Entertainment) aims to create distinctive solutions for Events, Branding and Digital strategies that empowers companies to be more visible and visually appealing to their audience.</p>
       <p className='text-lg text-primary-dark font-body'>Be it Corporate Events, Designing, Video Advertisements, Brand Promotions, Social Media Marketing and Up-scaling Digital Presence, we have been successful in establishing well-built relationships amongst Corporates and Startups.</p>
       <div>
        <Button text={"READ MORE"} paddingX="px-9" paddingY="py-2"  hoverText={"text-primary-dark"} textSize={"text-lg"} />
       </div>
    </motion.div>
    </div>
    </section>
  )
}

export default HomeAbout