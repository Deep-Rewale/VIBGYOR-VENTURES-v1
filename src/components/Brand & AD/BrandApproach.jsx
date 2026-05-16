import React, { useState } from 'react'
import { GiBrain } from "react-icons/gi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FaAngrycreative } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const approch = [
    {
        icon: <GiBrain />,
        title: "Conceptualization",
        para: "Taking the essence from the client brief, it’s crucial to ideate the theme of the advertisement.",
    },
    {
        icon: <TbBrandYoutubeKids />,
        title: "Content Creation",
        para: "The actual production of ads & brand identity keeping it strictly close to the client’s image.",
    },
    {
        icon: <FaAngrycreative />,
        title: "Creative Positioning",
        para: "Deriving a strategy to make the brand stand out in a clutter media landscape and get noticed."
    },
];

const BrandApproach = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#050505] py-24 px-6 lg:px-16 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">

                {/* Left Side: Interactive Navigation Menu */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-12">
                    <div className="space-y-4 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <span className="text-[10px] lg:text-xs font-bold font-heading tracking-[0.2em] text-accent uppercase">
                                How do we Support Your Brand
                            </span>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl xl:text-6xl text-white font-black font-heading tracking-tighter uppercase"
                        >
                            Solutions we offer
                        </motion.h3>
                    </div>

                    <div className="flex flex-col space-y-8 relative">
                        {/* Vertical Progress Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 rounded-full"></div>

                        {/* Active Progress Indicator */}
                        <motion.div
                            className="absolute left-0 w-[2px] bg-accent rounded-full shadow-[0_0_15px_#4F46E5]"
                            initial={false}
                            animate={{
                                top: `${(activeTab / approch.length) * 100}%`,
                                height: `${100 / approch.length}%`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        {approch.map((item, index) => {
                            const isActive = activeTab === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`pl-8 cursor-pointer transition-all duration-500 flex flex-col justify-center py-2 ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-70'}`}
                                >
                                    <span className="text-accent font-bold tracking-widest text-sm mb-2 font-heading">0{index + 1}</span>
                                    <h4 className={`font-heading uppercase transition-all duration-500 ${isActive ? 'text-3xl lg:text-5xl text-white font-black translate-x-2' : 'text-xl lg:text-3xl text-gray-500 font-bold'}`}>
                                        {item.title}
                                    </h4>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right Side: Dynamic Content Viewer */}
                <div className="w-full lg:w-1/2 h-full">
                    <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden flex items-center justify-center p-10 lg:p-16 shadow-2xl">
                        {/* Decorative Background inside card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 flex flex-col items-center text-center h-full justify-center w-full"
                            >
                                {/* Giant Floating Icon */}
                                <div className="text-8xl lg:text-[9rem] text-accent mb-12 drop-shadow-2xl">
                                    {approch[activeTab].icon}
                                </div>

                                <p className="text-lg lg:text-xl text-gray-300 font-body leading-relaxed max-w-md italic">
                                    "{approch[activeTab].para}"
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BrandApproach;