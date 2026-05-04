import React  from 'react'
import { useState,useEffect } from 'react';
import Logo from "../../assets/Logo/logo.png"
import NavlinkAnimation from '../Ui/NavlinkAnimation';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SlArrowDown } from "react-icons/sl";
import { div, span } from 'motion/react-client';

const Links = [
  { Name: "Home", link: "/" },
  { Name: "About", link: "/about" }, 
  {
    Name: "Services",
    link: null,
    children: [
      { Name: "Event Management", link: "/events" }, 
      { Name: "Branding & Advertising", link: "/branding&Ad" }, 
      { Name: "Corporate Gifting", link:  "/corporategifting"}, 
    ],
  },
   {
     Name: "Products", link: "/products"
  },
   {
     Name: "Portfolio", link: "/portfolio"
  }, 
  {
     Name: "Contact", link: "/contact"
  },  

  { Name: "Login", link: "/login" }, 
  // { Name: "Sign up", link: "/signUp" },
];
const Navbar = () => {
     const [openDropdown, setOpenDropdown] = useState(null);
     const [showNav, setShowNav] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0); 


     useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShowNav(false);
    } else {
      // scrolling up
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <nav className={`fixed z-[999] w-full px-13 font-heading flex justify-between items-center bg-primary-dark shadow-2xl transition-all duration-500 ${showNav ? "top-0" : "-top-24"}`}>
      <div className="left-logo lg:w-50 xl:w-60">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="right-links flex items-center gap-10">
        {Links.map((item, index) => (
          <div
            key={index}
            className={`relative  text-[#ede7f6] ${index === 6 && "ml-32"} ${index === 6 ? 'py-2 px-8 border bg-accent font-semibold text-black  border-[#e8a020] rounded-md  cursor-pointer hover:border-[#ede7f6] hover:bg-transparent hover:text-[#ede7f6]   transition-all duration-300 ease-in-out': ""} `}
            
            onMouseEnter={() => item.children && setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* top level link */}
            {item.link ? (
              <Link
                className={`lg:text-lg xl:text-xl capitalize   `}
                to={item.link}
              >
                <NavlinkAnimation backgroundColor="#ede7f6">{item.Name}</NavlinkAnimation>
              </Link>
            ) : (
          
              <span className={`lg:text-lg xl:text-xl capitalize cursor-pointer `}>
                <NavlinkAnimation><span className={`${index === 2 ? "flex items-center gap-2" : ""}`}>{item.Name} {index === 2 ? <span className={`${openDropdown === index ? "rotate-180 " : ""} transition-all duration-500 ease-in-out`}><SlArrowDown size={13} /> </span>  : ""}</span></NavlinkAnimation>
              </span>
            )}

            {/* invisible bridge to close gap between nav and dropdown */}
            {item.children && openDropdown === index && (
              <div className="absolute top-full left-0 w-full h-3" />
            )}

            {/* dropdown */}
            <AnimatePresence>
              {item.children && openDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute top-[calc(100%+12px)] left-0 bg-primary-dark shadow-xl rounded-2xl py-3 flex flex-col min-w-[240px] z-50"
                >
                  {item.children.map((child, childIndex) => (
                    <motion.div
                      key={childIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: childIndex * 0.06,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="px-6 py-3 text-lg capitalize hover:bg-primary"
                    >
                      <Link to={child.link} className="block w-full">
                        <NavlinkAnimation>{child.Name}</NavlinkAnimation>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar