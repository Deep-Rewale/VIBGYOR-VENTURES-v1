import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Home/Hero/events.jpg";
import Img2 from "../../assets/Home/Hero/ads-branding.avif";
import Img3 from "../../assets/Home/Hero/corporate-gifts.webp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const blurReveal = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 30,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatUp = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    rotate: -2,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatUpRight = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    rotate: 2,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sectionScale = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HomeHero = () => {
  return (
    <section className="relative bg-[#050505] min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden">
      {/* Ambient Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#5a4be7] opacity-20 blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#facc15] opacity-[0.08] blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#7b6df2] opacity-10 blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <motion.div
        variants={sectionScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10"
      >
        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Content Section */}
          <motion.div className="text-white space-y-8 lg:pr-10 z-20">
            <motion.div variants={blurReveal} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-heading text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-gray-300">
                Creative Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={blurReveal}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-black font-heading leading-[1.05] tracking-tight drop-shadow-2xl"
            >
              Elevate Your <br className="hidden md:block" />Brand With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e84f5] via-[#a69ff8] to-accent italic pr-4">
                Powerful Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={blurReveal}
              className="font-body text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              From seamless event management to impactful branding & advertising
              and premium corporate gifting. We help businesses create lasting
              impressions and meaningful connections.
            </motion.p>

            <motion.div variants={blurReveal} className="pt-4 flex items-center gap-6">
              <Button
                text={"Explore Services"}
                paddingX="py-4"
                paddingY="px-10"
                textSize={"text-lg"}
                hoverText={"text-white"}
                Redirect={"/events"}
              />
            </motion.div>
          </motion.div>

          {/* Right Image Section - Premium Overlapping Collage (Desktop) */}
          <motion.div variants={container} className="relative h-[600px] lg:h-[700px] w-full hidden lg:block">
            {/* Image 1: Main Event (Left/Bottom) */}
            <motion.div variants={floatUp} className="absolute bottom-4 left-0 w-[65%] h-[60%] z-20 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-[#5a4be7]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img src={Img1} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt="Events" />
            </motion.div>

            {/* Image 2: Corporate Gifting (Right/Top) */}
            <motion.div variants={floatUpRight} className="absolute top-4 right-0 w-[55%] h-[55%] z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 group">
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img src={Img3} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt="Corporate Gifts" />
            </motion.div>

            {/* Image 3: Branding Accent (Center/Right floating) */}
            <motion.div variants={blurReveal} className="absolute top-[45%] right-[5%] w-[35%] h-[35%] z-30 rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/20 group">
              <img src={Img2} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt="Branding" />
            </motion.div>
          </motion.div>

          {/* Right Image Section - Mobile Grid */}
          <motion.div variants={container} className="grid grid-cols-2 gap-4 lg:hidden h-[400px]">
            <motion.img variants={floatUp} className="w-full h-full object-cover rounded-2xl shadow-xl" src={Img1} alt="Events" />
            <motion.img variants={floatUpRight} className="w-full h-full object-cover rounded-2xl shadow-xl" src={Img2} alt="Branding" />
            <motion.img variants={blurReveal} className="col-span-2 w-full h-full object-cover rounded-2xl shadow-xl" src={Img3} alt="Corporate Gifts" />
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
