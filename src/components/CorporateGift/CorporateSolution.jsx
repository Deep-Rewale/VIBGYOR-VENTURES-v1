import React from 'react'
import { motion } from 'motion/react'
import Sol1 from "../../assets/Corporate/GiftingSolution/Customized.jpg"
import Sol2 from "../../assets/Corporate/GiftingSolution/Welcome.jpg"
import Sol3 from "../../assets/Corporate/GiftingSolution/Festive.jpg"
import Sol4 from "../../assets/Corporate/GiftingSolution/Merchandise.avif"
import Sol5 from "../../assets/Corporate/GiftingSolution/Premium.jpg"
import Sol6 from "../../assets/Corporate/GiftingSolution/BulkGifting.avif"





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
      <div className="text-center space-y-4">
        <p className="text-lg lg:text-xl font-bold font-body text-accent uppercase">
          How do we Support Your Brand
        </p>
        <h3 className="text-4xl lg:text-5xl font-semibold font-heading tracking-tight uppercase">
          Solutions we offer
        </h3>
      </div>

      {/* solutions offerd */}
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-10">
        {/* main cards */}
        {Solutions.map((item, index) => (
          <div
            key={index}
            className="group relative h-[350px] lg:h-[420px] w-full rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 will-change-transform will-change-opacity"
          >
            <img
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              src={item.image}
              alt={item.title}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            {/* Extra darkening layer on hover for text readability */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end md:translate-y-[100px] md:group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <div className="w-12 h-1.5 bg-accent mb-5 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 hidden md:block"></div>
              <h2 className="text-2xl lg:text-3xl text-white font-black uppercase tracking-tight mb-4 drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base text-gray-200 leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100 drop-shadow-sm">
                {item.para}
              </p>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-[40px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity"></div>
            <div className="absolute inset-0 border-2 border-white/10 group-hover:border-accent/40 rounded-[32px] transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CorporateSolution