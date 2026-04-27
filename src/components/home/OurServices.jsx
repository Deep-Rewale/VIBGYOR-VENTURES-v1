import React from 'react'
import { Links } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import img1 from "../../assets/Home/services/eventMan.jpg"
import img2 from "../../assets/Home/services/branding.jpg"
import img3 from "../../assets/Home/services/corpGits.jpg"
import { image } from 'motion/react-client'
import Button from '../Button/Button';

const ourServicesContent = [
  {
    title: "EVENT MANAGEMENT",
    paras: [

      "Corporate Events",
      "Virtual Events",
      "MICE",
      "Celebrity Engagements",
      "Weddings",
      "Retail & Exhibitions"

    ],
    Links: "/events",
    image: img1
  },
  {
    title: "BRANDING & ADVERTISING",
    paras: [

      "Corporate & Other Videos",
      "Commercial Ads.",
      "Animation & Motion Graphics",
      "Editing & VFX",
      "Photoshoots",
      "Brand Design"

    ],
    Links: "/branding&Ad",
    image: img2,
  },
  {
    title: "CORPORATE GIFTING",
    paras: [

      "Customized Corporate Gifts",
      "Employee Welcome Kits",
      "Festive & Seasonal Gift Hampers",
      "Promotional Merchandise",
      "Luxury & Premium Gifts",
      "Bulk Gifting Solutions"

    ],
    Links: "/corporategifting",
    image: img3,
  },
]

const OurServices = () => {
  return (
    <section className='bg-page py-10 px-6 lg:px-16'>
      {/* title */}
      <div className='text-center space-y-4'>
        <p className='text-lg lg:text-xl font-bold font-body text-accent'>WHAT WE DO</p>
        <h3 className='text-4xl lg:text-5xl font-semibold font-heading tracking-tight'>OUR SERVICES</h3>
      </div>

      {/* main container */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
        {ourServicesContent.map((item, index) => (
          // 3 content
          <div key={index} className='cards mt-5 lg:mt-10 p-5  bg-white  space-y-4 rounded-xl cursor-pointer hover:border-[#e8a020] transition-all duration-300 ease-in-out shadow-lg origin-center hover:scale-102 hover:shadow-xl hover:shadow-[#e8a020]/40'>
            {/* image */}
            <div className=' w-full'>
              <img className='object-cover h-80 w-full rounded-xl' src={item.image} alt={item.title} />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold font-heading tracking-tight text-primary-dark'>{item.title}</h3>
            <div className='text-md lg:text-lg space-y-1 font-semibold font-body text-primary'>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[0]}</p>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[1]}</p>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[2]}</p>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[3]}</p>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[4]}</p>
              <p className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-accent  cursor-pointer'><SlArrowRight size={13} />{item.paras[5]}</p>
            </div>
            <Button text={"READ MORE"} paddingX="px-7" paddingY="py-2" hoverText={"text-primary-dark"} textSize={"text-md lg:text-lg"} Redirect={item.Links}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices