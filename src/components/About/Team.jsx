import React from "react";
import Team1 from "../../assets/About/Team/Bhavesh-Soni.jpg";
import Team2 from "../../assets/About/Team/Aditya-Mehra.jpg";
import Team3 from "../../assets/About/Team/Nisar-Shaikh.jpg";
import Team4 from "../../assets/About/Team/Devyani-Chandarana.jpg";
import Team5 from "../../assets/About/Team/roshan.png";
import Team6 from "../../assets/About/Team/Shalik-Kesharwani.jpg";
import Team7 from "../../assets/About/Team/Agnivesh-Zikar.jpg";
import DummyImg from "../../assets/About/Team/dummyImg.png"
import { motion } from "framer-motion";

const team = [
  { name: "Bhavesh Soni", postion: "Director", image: DummyImg },
  { name: "Aditya Mehra", postion: "Chief Creative Officer (CCO)", image: DummyImg },
  { name: "Nisar Shaikh", postion: "Head – Events", image: DummyImg },
  { name: "Devyani Chandarana", postion: "Business Manager – Events", image: DummyImg },
  { name: "Roshan Gupta", postion: "Head – Digital Marketing", image: DummyImg },
  { name: "Shalik Kesharwani", postion: "Head – Branding & Advertising", image: DummyImg },
  { name: "Agnivesh Zikar", postion: "Asst. Head – Event Operations", image: DummyImg },
  { name: "Shankar Shit", postion: "Project Manager", image: DummyImg },
];

const Team = () => {
  return (
    <section className="bg-page px-6 lg:px-16 py-32 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-dark/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* title */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase">
              Behind the scenes
            </span>
          </div>
          <h3 className="text-5xl lg:text-7xl font-black text-primary-dark font-heading tracking-tighter uppercase">
            Core Team
          </h3>
        </motion.div>

        {/* team grid */}
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl group cursor-pointer border border-white/60 bg-white"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                src={item.image}
                alt={item.name}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              {/* text container */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-8 h-1 bg-accent rounded-full mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 shadow-lg"></div>
                <h3 className="font-black text-2xl text-white tracking-tight drop-shadow-lg mb-1">{item.name}</h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-widest drop-shadow-lg opacity-90">
                  {item.postion}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
