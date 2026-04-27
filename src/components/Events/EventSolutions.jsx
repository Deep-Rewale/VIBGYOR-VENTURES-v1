import React from "react";
import { motion } from "motion/react";
import Sol1 from "../../assets/Events/Solutions/Corporate-Events.jpg";
import Sol2 from "../../assets/Events/Solutions/Virtual-Events.jpg";
import Sol3 from "../../assets/Events/Solutions/MICE.png";
import Sol4 from "../../assets/Events/Solutions/Celebrity-Engagements.avif";
import Sol5 from "../../assets/Events/Solutions/Weddings.avif";
import Sol6 from "../../assets/Events/Solutions/Retail-Exhibitions.jpg";
import { image } from "motion/react-client";

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
    title: "Corporate Events",
    para: "From conferences to promotional events to parties, we can do it all! We develop the creative, design, reporting, logistic and technology systems for the widest possible range of events.",
    image: Sol1,
  },
  {
    title: "Virtual Events",
    para: "Keeping the current situation in mind, the trend now is virtual events! We offer strategic, data driven and client-centric solution to maximize your brand’s outreach. Stay Virtual, Stay Connect!",
    image: Sol2,
  },
  {
    title: "MICE",
    para: "Meetings, Incentives, Conferences & Exhibitions. We outright perfection and execute events that are larger than life with the help of our creative team to communicate what a brand truly wants.",
    image: Sol3,
  },
  {
    title: "Celebrity Engagements",
    para: "Consumer culture in India is driven by popularity. We work with global faces to convey messages, built relationships to engage, educate & entertain your audience for you.",
    image: Sol4,
  },
  {
    title: "Weddings",
    para: "From upholding tradition to breaking the monotony, our team helps to make the wedding even more special than it is, right from the pre-wedding up to post the wedding!",
    image: Sol5,
  },
  {
    title: "Retail & Exhibitions",
    para: "Foresight has solidified its reputation in stand & interior designing for event & exhibitions by using high quality products, detailed approach & timely delivery.",
    image: Sol6,
  },
];

const EventSolutions = () => {
  return (
    <section className="bg-page py-10 px-6 lg:px-16">
      {/* title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="text-center space-y-2 lg:space-y-4"
      >
        <motion.p
          variants={fadeUp}
          className="text-lg lg:text-xl font-bold font-body text-accent uppercase"
        >
          How do we Support Your Brand
        </motion.p>
        <motion.h3
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-semibold font-heading tracking-tight uppercase"
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
        className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-10"
      >
        {/* main cards */}
        {Solutions.map((item, index) => (
          <motion.div
            variants={cardAnim}
            key={index}
            className="p-2 lg:p-3  shadow-lg bg-white rounded-lg space-y-2 lg:space-y-3 cursor-pointer hover:border-[#e8a020] transition-all duration-300 ease-in-out  origin-center hover:scale-102 hover:shadow-xl hover:shadow-[#e8a020]/30"
          >
            <img
              loading="loading"
              className="h-60 w-full object-cover rounded-lg"
              src={item.image}
              alt={item.title}
            />
            <h2 className=" text-lg lg:text-xl text-center text-primary-dark font-bold uppercase">
              {item.title}
            </h2>
            <p className="max-lg:px-3 text-md text-left leading-relaxed text-primary-dark">{item.para}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EventSolutions;
