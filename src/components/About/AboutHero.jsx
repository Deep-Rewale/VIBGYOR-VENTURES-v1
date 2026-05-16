import React from "react";
import Building from "../../assets/About/AboutHero/BuildingImg.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutHero = () => {
  return (
    <section className="bg-page relative overflow-hidden">
      {/* Top Banner Area */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary-dark/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase">
              Our Story
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl uppercase text-primary-dark font-black font-heading tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">Vibgyor</span>
          </h1>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm lg:text-md font-heading font-bold uppercase tracking-[0.2em]"
            >
              How we build businesses
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="text-primary-dark text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tighter font-heading font-black leading-tight"
            >
              Get <br /> Acquainted
            </motion.h3>
          </div>

          <div className="space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 font-body leading-relaxed"
            >
              We have been able to carve a niche for ourselves making our presence
              strongly felt amongst the multitudes of companies mushrooming in
              different sectors of business ranging from the Corporates to SMEs.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 font-body leading-relaxed"
            >
              Having the foresight in resolving your problem statement with the
              right solutions is important to us. Our customized tools and
              applications work efficiently in expanding the reach and build
              awareness in the market around your business.
            </motion.p>
            
            <motion.div variants={fadeUp} className="pt-6 border-t border-gray-200">
                <p className="text-xl text-primary-dark font-heading font-bold italic">
                  "We are flexible, experienced, happy to help & love what we do!"
                </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-2 relative"
        >
          {/* Decorative elements around image */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary-dark/10 rounded-[2.5rem] blur-2xl z-0 transform -rotate-3"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-white/60 to-white/0 rounded-[2rem] z-10"></div>
          
          <div className="relative z-20 rounded-[2rem] overflow-hidden border border-white/60 shadow-2xl aspect-[4/5] lg:aspect-square bg-white">
            <img
              loading="lazy"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              src={Building}
              alt="Vibgyor Building"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

