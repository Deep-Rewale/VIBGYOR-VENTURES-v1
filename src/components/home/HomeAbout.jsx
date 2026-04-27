import React from "react";
import AboutImg from "../../assets/Home/About/Bhavesh-soni-01.jpg";
import AboutImg1 from  "../../assets/Home/About/FounderImg.png"
import Button from "../Button/Button";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section className="bg-page py-10 px-16 max-lg:px-6">
      {/* full container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-15  max-w-6xl mx-auto">
        {/* Left image */}
    <motion.div className='w-full' initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}>
        <img className='object-cover  max-lg:h-150 w-full rounded-xl shadow-2xl' src={AboutImg1} alt="" />
    </motion.div>
    {/* right text */}
    <motion.div initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }} className="right-content lg:max-w-xl space-y-4 lg:space-y-4 xl:space-y-6">
       <p className='text-accent lg:text-lg xl:text-xl font-body font-semibold uppercase'>who we are</p> 
       <h2 className='text-primary-dark text-4xl lg:text-4xl xl:text-5xl uppercase tracking-tight font-heading font-semibold'>About us</h2>
       <p className='lg:text-md xl:text-lg text-primary-dark font-body'>Rooted in 2014, Foresight Events and Media Group (formerly known as Foresight Events and Entertainment) aims to create distinctive solutions for Events, Branding and Digital strategies that empowers companies to be more visible and visually appealing to their audience.</p>
       <p className='lg:text-md xl:text-lg text-primary-dark font-body'>Be it Corporate Events, Designing, Video Advertisements, Brand Promotions, Social Media Marketing and Up-scaling Digital Presence, we have been successful in establishing well-built relationships amongst Corporates and Startups.</p>
       <div>
        <Button text={"READ MORE"} paddingX="px-9" paddingY="py-2"  hoverText={"text-primary-dark"} textSize={"lg:text-md xl:text-lg"} Redirect={"/about"} />
       </div>
    </motion.div>
    </div>
    </section>
  );
};

export default HomeAbout;
