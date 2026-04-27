import React from 'react'
import { motion } from 'motion/react'
import Sol1 from "../../assets/Corporate/GiftingSolution/Customized.jpg"
import Sol2 from "../../assets/Corporate/GiftingSolution/Welcome.jpg"
import Sol3 from "../../assets/Corporate/GiftingSolution/Festive.jpg"
import Sol4 from "../../assets/Corporate/GiftingSolution/Merchandise.avif"
import Sol5 from "../../assets/Corporate/GiftingSolution/Premium.jpg"
import Sol6 from "../../assets/Corporate/GiftingSolution/BulkGifting.avif"

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
    title: "Customized Corporate Gifts",
    para: "Make every gift meaningful with our customized corporate gifting solutions. From branded merchandise to personalized items, we ensure your gifts reflect your company’s identity and leave a lasting impression on clients and employees.",
    image: Sol1,
  },
  {
    title: "Employee Welcome Kits",
    para: "Create a memorable first impression with thoughtfully curated employee welcome kits. We design kits that include essentials and branded items to make new hires feel valued and connected from day one.",
    image: Sol2,
  },
  {
    title: "Festive & Seasonal Gift Hampers",
    para: "Celebrate every occasion with our festive and seasonal hampers. Whether it’s Diwali, New Year, or special company milestones, our curated hampers spread joy while strengthening relationships with clients and teams.",
    image: Sol3,
  },
  {
    title: "Promotional Merchandise",
    para: "Boost your brand visibility with high-quality promotional merchandise. From everyday essentials to creative giveaways, we help you create impactful products that keep your brand in front of your audience.",
    image: Sol4,
  },
  {
    title: "Luxury & Premium Gifts",
    para: "Impress your top clients and stakeholders with our luxury gifting solutions. We offer premium, high-end gifts that reflect elegance, exclusivity, and the value you place on important relationships.",
    image: Sol5,
  },
  {
    title: "Bulk Gifting Solutions",
    para: "Simplify large-scale gifting with our efficient bulk solutions. We manage everything from sourcing to packaging and delivery, ensuring consistency, quality, and timely execution for corporate events and campaigns.",
    image: Sol6,
  },
];

const CorporateSolution = () => {
  return (
   <section className="bg-page py-10 lg:px-16 px-6">
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
            className=" p-2 lg:p-3 shadow-lg bg-white rounded-lg space-y-3 cursor-pointer hover:border-[#e8a020] transition-all duration-300 ease-in-out  origin-center hover:scale-102 hover:shadow-xl hover:shadow-[#e8a020]/30"
          >
            <img
              loading="loading"
              className="h-60 w-full object-cover rounded-lg"
              src={item.image}
              alt={item.title}
            />
            <h2 className="text-lg lg:text-xl text-primary-dark font-bold text-center uppercase">
              {item.title}
            </h2>
            <p className="max-lg:px-3 text-md leading-relaxed text-primary-dark  text-left ">{item.para}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CorporateSolution