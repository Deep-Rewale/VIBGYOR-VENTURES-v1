import React from "react";
import VisonImg from "../../assets/About/Principles/Vision.jpg";
import { motion } from "motion/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Prnciple = () => {
  return (
    <section className="bg-page py-10 px-16">
      {/* full container */}
      <div className="grid grid-cols-2 items-center gap-3 max-w-6xl mx-auto">
        {/* Left image */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            loading="lazy"
            className="object-cover h-120 w-120  rounded-xl shadow-2xl"
            src={VisonImg}
            alt=""
          />
        </motion.div>
        {/* right text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="right-content max-w-xl space-y-6"
        >
          <p className="text-accent text-xl font-body font-semibold uppercase">
            What values we follow
          </p>
          <h2 className="text-primary-dark text-5xl uppercase tracking-tight font-heading font-semibold">
            Principle Statement
          </h2>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Visualize & collaborate in ways different from the others
          </p>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Interest of our customers comes first
          </p>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Stop at nothing but excellence
          </p>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Innovation is central to the success of our business
          </p>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Our work culture encourages strength & personal development
          </p>
          <p className="text-lg text-primary-dark font-body flex items-center gap-3">
            <IoMdCheckmarkCircleOutline />
            Nothing is impossible when there is trust teamwork & fun
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prnciple;
