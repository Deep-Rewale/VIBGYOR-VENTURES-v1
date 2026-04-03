import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import Img1 from "../../assets/Home/Hero/events.jpg";
import Img2 from "../../assets/Home/Hero/ads-branding.avif";
import Img3 from "../../assets/Home/Hero/corporate-gifts.webp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const blurReveal = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatUp = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

const sectionScale = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const HomeHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#2d1b7a] via-[#3b2599] to-[#1a1040] px-16 min-h-screen py-30   ">
      <motion.div
        variants={sectionScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={container}
          className="grid grid-cols-1  lg:grid-cols-2 gap-5 items-center"
        >
          {/* left section */}
          <motion.div className="text-[#ede7f6] space-y-6">
            <motion.p
              variants={blurReveal}
              className="font-body text-xl text-accent"
            >
              Creative Solutions
            </motion.p>
            <motion.h1
              variants={blurReveal}
              className="text-5xl font-semibold font-heading max-w-xl"
            >
              Elevate Your Brand With Powerful Experiences
            </motion.h1>
            <motion.p
              variants={blurReveal}
              className="font-body text-lg max-w-xl"
            >
              From seamless event management to impactful branding & advertising
              and premium corporate gifting - we help businesses create lasting
              impressions and meaningful connections.
            </motion.p>
            <motion.div variants={blurReveal} className="origin-center">
              <Button
                text={"Explore Services"}
                paddingX="py-2"
                paddingY="px-8"
                textSize={"text-xl"}
                hoverText={"text-[#ede7f6]"}
              />
            </motion.div>
          </motion.div>
          {/* right section */}
          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            <motion.img
              variants={floatUp}
              className="w-full object-cover rounded-lg  "
              src={Img1}
              alt=""
            />
            <motion.img
              variants={floatUp}
              className="w-full object-cover rounded-lg"
              src={Img2}
              alt=""
            />
            <motion.img
              variants={floatUp}
              className="col-span-2 w-full object-cover rounded-lg"
              src={Img3}
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
