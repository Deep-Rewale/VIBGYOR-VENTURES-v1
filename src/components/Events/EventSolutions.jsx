import React from "react";
import { motion } from "motion/react";
import Sol1 from "../../assets/Events/Solutions/Corporate-Events.jpg";
import Sol2 from "../../assets/Events/Solutions/Virtual-Events.jpg";
import Sol3 from "../../assets/Events/Solutions/MICE.png";
import Sol4 from "../../assets/Events/Solutions/Celebrity-Engagements.avif";
import Sol5 from "../../assets/Events/Solutions/Weddings.avif";
import Sol6 from "../../assets/Events/Solutions/Retail-Exhibitions.jpg";
import { image } from "motion/react-client";



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
      <div className="text-center space-y-2 lg:space-y-4">
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
  );
};

export default EventSolutions;
