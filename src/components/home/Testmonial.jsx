import React from "react";
import img from "../../assets/Home/Reviews/review.avif";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const testmonials = [
  {
    name: "Rahul Mehta",
    review:
      "Working with the team was an exceptional experience from start to finish. The event was managed with great precision and creativity, and every detail was handled professionally. They truly exceeded our expectations and delivered beyond what we had imagined.",
    image: img,
  },
  {
    name: "Priya Sharma",
    review:
      "Their branding and creative approach helped our business stand out in a competitive market. The team is highly professional, responsive, and easy to collaborate with. We are extremely satisfied with the results and would definitely work with them again.",
    image: img,
  },
  {
    name: "Amit Patel",
    review:
      "The corporate gifting solutions were thoughtfully curated and perfectly aligned with our brand identity. Everything was delivered on time, and the quality was outstanding. Our clients loved the gifts, and it created a lasting impression.",
    image: img,
  },
  {
    name: "Sneha Verma",
    review:
      "From planning to execution, everything was handled smoothly and efficiently. The team paid close attention to every detail and ensured that our event was a huge success. Their dedication and professionalism truly set them apart.",
    image: img,
  },
  {
    name: "Karan Shah",
    review:
      "We were impressed by their creativity and ability to bring our ideas to life. The entire process was seamless, and the results were beyond our expectations. They are reliable, innovative, and highly professional in their work.",
    image: img,
  },
  {
    name: "Neha Kapoor",
    review:
      "Their team delivered outstanding results with a strong focus on quality and innovation. The experience was smooth, and communication was always clear and prompt. We highly recommend them for anyone looking for impactful solutions.",
    image: img,
  },
];

const ReviewCard = ({ item }) => (
  <div className="w-[350px] lg:w-[550px] flex-shrink-0 p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full mx-4 lg:mx-6 group">
    {/* Stars */}
    <div className="flex gap-1 text-accent mb-6">
      {[...Array(5)].map((_, i) => <FaStar key={i} size={16} className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />)}
    </div>

    {/* Review Text */}
    <p className="text-gray-600 font-body text-sm lg:text-base leading-relaxed mb-8 flex-grow italic">
      "{item.review}"
    </p>

    {/* User Info */}
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
      <div className="relative">
        <img className="h-12 w-12 lg:h-14 lg:w-14 object-cover rounded-full border-2 border-white shadow-md" src={item.image} alt={item.name} />
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
      </div>
      <div>
        <h3 className="text-sm lg:text-base font-black text-gray-900 font-heading tracking-wide uppercase">{item.name}</h3>
        <p className="text-[10px] lg:text-xs text-gray-400 font-bold tracking-widest uppercase">Verified Client</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = 1, speed = 40 }) => (
  <div className="relative flex overflow-hidden w-full py-4">
    <motion.div
      className="flex items-stretch"
      animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      style={{ width: "fit-content" }}
    >
      {/* Render 4 times to ensure seamless loop even on ultra-wide 4K monitors */}
      {[...items, ...items, ...items, ...items].map((item, index) => (
        <ReviewCard key={index} item={item} />
      ))}
    </motion.div>
  </div>
);

const Testmonial = () => {
  return (
    <section className="bg-[#fafafa] py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Gradient Edge Masks */}
      <div className="absolute left-0 top-0 z-20 h-full w-[60px] lg:w-[300px] bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-20 h-full w-[60px] lg:w-[300px] bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>

      {/* Title Area */}
      <div className='flex flex-col items-center text-center space-y-4 mb-20 relative z-30 px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
        >
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span className='text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase'>
            What They Say
          </span>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className='text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 font-heading tracking-tighter uppercase'
        >
          Our Testimonials
        </motion.h3>
      </div>

      {/* Interactive Single Marquee Layout */}
      <div className="relative z-10 flex flex-col mt-10">
        <MarqueeRow items={testmonials} direction={1} speed={70} />
      </div>
    </section>
  );
};

export default Testmonial;
