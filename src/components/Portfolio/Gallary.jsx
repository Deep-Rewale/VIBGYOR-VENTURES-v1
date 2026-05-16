import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";


const generateImages = (folder, baseName, count, category) => {
  return Array.from({ length: count }, (_, i) => ({
    img: new URL(
      `../../assets/Portfolio/${folder}/${baseName}${i === 0 ? "" : i}.jpg`,
      import.meta.url
    ).href,
    category,
  }));
};

const Images = [
  ...generateImages("celebateEngagment", "celebateEngagment", 26, "Celebrity Engagements"),
  ...generateImages("CorporateEvents", "CorporateEvents", 29, "Corporate Events"),
  ...generateImages("InfluencerMeet", "InfluencerMeet", 12, "Influencer Meet"),
  ...generateImages("LifestyleAndFashion", "LifestyleAndFashion", 14, "Lifestyle & Fashion"),
  ...generateImages("TalentEngagement", "TalentEngagement", 14, "Talent Engagement"),
  ...generateImages("Weddings", "Weddings", 5, "Wedding"),
];


const Gallary = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  // filtring images according to categorys
  const filterdImages = activeCategory === "All" ? Images : Images.filter(item => item.category === activeCategory)

  // pagination
  const imagePerPage = 6;
  const indexOfLast = currentPage * imagePerPage;
  const indexOfFirst = indexOfLast - imagePerPage
  const currentImage = filterdImages.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filterdImages.length / imagePerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <section className='py-6 lg:py-10 px-4 lg:px-12 bg-page relative overflow-hidden flex flex-col justify-center min-h-[calc(100vh-120px)]'>
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-dark/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className='max-w-7xl mx-auto w-full flex flex-col gap-6 lg:gap-8 relative z-10'>
        {/* Category buttons - Tighter Interactive Squircle Tabs */}
        <div className='flex flex-wrap gap-2 lg:gap-3 justify-center w-full px-2'>
          {["All", "Celebrity Engagements", "Corporate Events", "Influencer Meet", "Lifestyle & Fashion", "Talent Engagement", "Wedding"].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`group relative px-5 py-2.5 rounded-[1rem] text-[10px] lg:text-xs font-bold tracking-widest uppercase transition-all duration-500 ${activeCategory === cat
                ? "text-white shadow-lg shadow-primary-dark/20 border-transparent scale-105 z-10"
                : "text-gray-500 bg-white hover:text-primary-dark border border-gray-100 hover:border-accent/30 shadow-sm"
                }`}
            >
              {/* Sliding Background for Active State */}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-primary-dark rounded-[1rem]"
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2">
                {/* Active Inner Dot Micro-animation */}
                {activeCategory === cat && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent inline-block shadow-[0_0_10px_rgba(232,160,32,0.8)]"
                  />
                )}
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid - Single Screen Bento Layout */}
        <div className="w-full h-[60vh] lg:h-[65vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className='grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-3 gap-2 lg:gap-4 w-full h-full'
            >
              {currentImage.map((item, index) => {
                const isEvenPage = currentPage % 2 === 0;
                let bentoClass = "col-span-1 row-span-1 rounded-[1rem] lg:rounded-[1.5rem]";

                // Alternate hero layout depending on the page number
                if (!isEvenPage && index === 0) bentoClass = "col-span-2 row-span-2 rounded-[1.5rem] lg:rounded-[2rem]";
                if (isEvenPage && index === 1) bentoClass = "col-span-2 row-span-2 rounded-[1.5rem] lg:rounded-[2rem]";

                return (
                  <motion.div
                    variants={itemVariants}
                    key={item.img}
                    className={`group relative overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-accent/20 transition-shadow duration-500 bg-gray-100 ${bentoClass}`}
                  >
                    <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                    <img
                      className='w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 will-change-transform'
                      src={item.img}
                      loading='lazy'
                      alt={item.category}
                    />

                    {/* Hover Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <div className="w-8 h-1 bg-accent rounded-full mb-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                      <span className="text-white font-heading text-lg lg:text-2xl font-bold tracking-tight drop-shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Buttons - Compact */}
        <div className='flex flex-wrap gap-2 justify-center'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full text-xs lg:text-sm font-black transition-all duration-300 ${currentPage === index + 1
                ? "text-white"
                : "bg-white text-gray-400 hover:text-primary-dark shadow-sm border border-gray-100 hover:scale-110"
                }`}
            >
              {currentPage === index + 1 && (
                <motion.div
                  layoutId="activePage"
                  className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/40"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallary