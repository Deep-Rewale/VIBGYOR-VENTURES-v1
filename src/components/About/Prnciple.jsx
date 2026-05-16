import React from "react";
import VisonImg from "../../assets/About/Principles/Vision.jpg";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const principlesList = [
  "Visualize & collaborate in ways different from the others",
  "Interest of our customers comes first",
  "Stop at nothing but excellence",
  "Innovation is central to the success of our business",
  "Our work culture encourages strength & personal development",
  "Nothing is impossible when there is trust teamwork & fun",
];

const Prnciple = () => {
  return (
    <section className="bg-page py-24 px-6 lg:px-16 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 max-w-7xl mx-auto relative z-10">
        
        {/* Left image */}
        <motion.div
          className="w-full relative"
          initial={{ opacity: 0, x: -40, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary-dark/10 rounded-[2.5rem] blur-2xl z-0 transform rotate-3"></div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-white/60 to-white/0 rounded-[2rem] z-10"></div>
          
          <div className="relative z-20 rounded-[2rem] overflow-hidden border border-white/60 shadow-2xl bg-white">
            <img
              loading="lazy"
              className="object-cover w-full aspect-square lg:aspect-[4/3] transform hover:scale-105 transition-transform duration-700 ease-out"
              src={VisonImg}
              alt="Vibgyor Vision"
            />
          </div>
        </motion.div>

        {/* Right text */}
        <div className="right-content max-w-xl space-y-10">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm lg:text-md font-heading font-bold uppercase tracking-[0.2em]"
            >
              What values we follow
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-dark text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tighter font-heading font-black leading-tight"
            >
              Principle Statement
            </motion.h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid gap-4"
          >
            {principlesList.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group"
              >
                <div className="mt-0.5 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(232,160,32,0.4)] transition-all">
                  <IoMdCheckmarkCircleOutline className="text-accent group-hover:text-white transition-colors" size={20} />
                </div>
                <p className="text-md lg:text-lg text-gray-600 font-body leading-relaxed group-hover:text-primary-dark transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prnciple;
