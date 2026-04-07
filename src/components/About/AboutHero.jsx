import React from "react";
import Building from "../../assets/About/AboutHero/BuildingImg.jpg";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const AboutHero = () => {
  return (
    <section className="bg-page ">
      {/* title div */}
      <div className="bg-gradient-to-br from-[#2d1b7a] via-[#3b2599] to-[#1a1040] flex items-center justify-center py-20">
        <h1 className="text-6xl uppercase mt-10 text-[#ede7f6] font-semibold font-heading">
          About Vibgyor
        </h1>
      </div>

      {/* content  */}
      <div className=" grid grid-cols-2 max-w-6xl mx-auto gap-10 py-10 ">
        {/* left content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-7"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-xl font-body font-semibold uppercase"
          >
            How we build businesses
          </motion.p>
          <motion.h3
            variants={fadeUp}
            className="text-primary-dark text-5xl uppercase tracking-tight font-heading font-semibold"
          >
            Get Acquainted
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-lg text-primary-dark font-body"
          >
            We have been able to carve a niche for ourselves making our presence
            strongly felt amongst the multitudes of companies mushrooming in
            different sectors of business ranging from the Corporates to SMEs.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-primary-dark font-body"
          >
            Having the foresight in resolving your problem statement with the
            right solutions is important to us. Our customized tools and
            applications work efficiently in expanding the reach and build
            awareness in the market around your business.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-primary-dark font-body"
          >
            We are flexible, experienced, happy to help & love what we do!
          </motion.p>
        </motion.div>
        {/* right image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            loading="lazy"
            className="h-120 w-120 object-cover rounded-lg shadow-md"
            src={Building}
            alt="Company image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
