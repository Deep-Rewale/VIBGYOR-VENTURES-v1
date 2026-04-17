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

  return (
    <section className='py-10 px-16 bg-page'>
      <div className='space-y-8'>
        {/* catagory buttons */}
        <div className='flex gap-5 justify-end'>
          {["All",
            "Celebrity Engagements",
            "Corporate Events",
            "Influencer Meet",
            "Lifestyle & Fashion",
            "Talent Engagement",
            "Wedding"].map((cat) => (
              <motion.button className={`cursor-pointer  rounded-lg text-md shadow-md font-heading  font-semibold py-3 px-5 transistion-all  ${activeCategory === cat ? "bg-primary-dark text-white" : "text-primary-dark bg-gray-100"} `} key={cat} onClick={() => { setActiveCategory(cat); setCurrentPage(1) }} whileHover={{ y: -3 }}
                whileTap={{ y: 1 }}

                animate={{
                  y: activeCategory === cat ? -2 : 0,
                  opacity: activeCategory === cat ? 1 : 0.9,
                }}

                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}>
                {cat}
              </motion.button>
            ))}
        </div>

        {/*  showing image accoding to catogory */}
        <AnimatePresence mode="wait">
          key={activeCategory + currentPage}
          <div className='grid grid-cols-3 gap-5'>
            {currentImage.map((item, index) => (
              <motion.img

                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}

                whileHover={{ scale: 1.05 }}
                className='w-full h-60 object-cover object-center rounded-md' key={item.img} src={item.img} loading='lazy' />
            ))}

          </div>
        </AnimatePresence>


        {/* pagination button */}
        <div className='flex gap-3 justify-center'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index} onClick={() => setCurrentPage(index + 1)} className={`shadow-md font-semibold text-lg py-1 px-3 rounded-md cursor-pointer ${currentPage === index + 1 ? "bg-primary-dark text-white" : "text-primary-dark bg-gray-100"}`}>

              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallary