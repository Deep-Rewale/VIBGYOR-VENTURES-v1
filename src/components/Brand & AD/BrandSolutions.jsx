import React from 'react'
import { motion } from 'motion/react';
import Sol1 from "../../assets/BrandAndAD/SolutionsBrand/Corporate-Videos.jpg"
import Sol2 from "../../assets/BrandAndAD/SolutionsBrand/Commercial-Advertisement.avif"
import Sol3 from "../../assets/BrandAndAD/SolutionsBrand/Animation-Motion-Graphics.avif"
import Sol4 from "../../assets/BrandAndAD/SolutionsBrand/Editing-and-VFX.jpg"
import Sol5 from "../../assets/BrandAndAD/SolutionsBrand/Photo-Shoots.avif"
import Sol6 from "../../assets/BrandAndAD/SolutionsBrand/Brand-Design.jpg"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};



const Solutions = [
  {
    title: "Corporate & Other Videos",
    para: "Videos are a new way to be more visible to the customers. We create various videos like corporate, explanatory, teasers and so on. It is a creative tool for engaging with potentials.",
    image: Sol1,
  },
  {
    title: "Commercial Advertisement",
    para: "Commercial ads help capture the actual essence and message of the brand & product. Hence brings more following and awareness to it. From products to narratives – we shoot it all!",
    image: Sol2,
  },
  {
    title: "Animation & Motion Graphics",
    para: "Graphics evolves every year. It attracts and engages clients with use of animation & imagery. It breaks down complex information by making it creative & visually appealing.",
    image: Sol3,
  },
  {
    title: "Editing and VFX",
    para: "Going through raw footage can be a task. With our best professionals, let us filter through & turn your footage into a piece of art. It’s your story, we’ll help you tell it.",
    image: Sol4,
  },
  {
    title: "Photo Shoots",
    para: "In today’s time, seeing is the only option. Let us click and enhance your brand and product with a photoshoot. Name it and we click it. Lights. Camera. Clicks",
    image: Sol5,
  },
  {
    title: "Brand Design",
    para: "For improved recall in customers’ mind brand’s communication is consistent across all touchpoints. Brand Manual lays out guidelines for company’s visual & communication.",
    image: Sol6,
  },
];

const BrandSolutions = () => {
  return (
     <section className="bg-page py-10 px-16">
      {/* title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="text-center space-y-4"
      >
        <motion.p
          variants={fadeUp}
          className="text-xl font-bold font-body text-accent uppercase"
        >
          How do we Support Your Brand
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-5xl font-semibold font-heading tracking-tight uppercase"
        >
          Solutions we offer
        </motion.h3>
      </motion.div>

      {/* solutions offerd */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-7 mt-10"
      >
        {/* main cards */}
        {Solutions.map((item, index) => (
          <motion.div
            variants={cardAnim}
            key={index}
            className=" p-3 shadow-lg bg-white rounded-lg space-y-3 cursor-pointer hover:border-[#e8a020] transition-all duration-300 ease-in-out  origin-center hover:scale-102 hover:shadow-xl hover:shadow-[#e8a020]/30"
          >
            <img
              loading="loading"
              className="h-100 w-full object-cover rounded-lg"
              src={item.image}
              alt={item.title}
            />
            <h2 className="text-xl text-primary-dark font-bold text-center uppercase">
              {item.title}
            </h2>
            <p className="text-md leading-relaxed text-primary font-semibold text-left ">{item.para}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default BrandSolutions