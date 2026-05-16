import React from 'react'
import { useState, useEffect } from 'react';
import Logo from "../../assets/Logo/logo.png"
import NavlinkAnimation from '../Ui/NavlinkAnimation';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { SlArrowDown } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { MdLogout, MdPerson, MdDashboard } from "react-icons/md";
import { useCart } from '../../context/CartContext';

const Links = [
  { Name: "Home", link: "/" },
  { Name: "About", link: "/about" },
  {
    Name: "Services",
    link: null,
    children: [
      { Name: "Event Management", link: "/events" },
      { Name: "Branding & Advertising", link: "/branding&Ad" },
      { Name: "Corporate Gifting", link: "/corporategifting" },
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
];

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();
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
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className="right-links flex items-center gap-10">
        {Links.map((item, index) => {
          // Profile Section (Previously just Login)
          if (index === 6) {
            return (
              <div key={index} className="flex items-center gap-6 ml-32">
                {/* Modern Cart Icon shifted beside Profile */}
                <Link to="/cart" className="relative group p-2 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10">
                  <IoCartOutline size={28} className="text-[#ede7f6] group-hover:text-accent transition-colors" />
                  <AnimatePresence>
                    {cartItems.length > 0 && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 bg-accent text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-primary-dark"
                      >
                        {cartItems.length}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>

                {currentUser ? (
                  <div className="relative group">
                    <Link to="/profile" className="flex items-center gap-3 p-1 rounded-[18px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                      <div className="relative">
                        <img
                          src={currentUser.profilePic}
                          alt="Profile"
                          className="w-10 h-10 rounded-[14px] object-cover border border-white/20 shadow-xl"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-primary-dark rounded-full shadow-lg"></div>
                      </div>
                      <span className="text-[#ede7f6] hidden xl:block font-bold text-sm pr-2">{currentUser.name}</span>
                    </Link>
                    {/* Premium Dropdown */}
                    <div className="absolute top-full right-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[1000]">
                      <div className="bg-primary-dark/95 backdrop-blur-2xl border border-white/10 rounded-[28px] shadow-2xl py-4 min-w-[220px] overflow-hidden">
                        <Link to="/profile" className="flex items-center gap-4 px-8 py-3 text-[13px] font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all">
                          <MdDashboard size={20} className="text-accent" /> Dashboard
                        </Link>
                        <Link to="/profile" className="flex items-center gap-4 px-8 py-3 text-[13px] font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all">
                          <MdPerson size={20} /> Settings
                        </Link>
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <button
                            onClick={logout}
                            className="w-full flex items-center gap-4 px-8 py-4 text-[13px] font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                          >
                            <MdLogout size={20} /> Terminate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    className="py-2 px-8 border bg-accent font-black text-black border-[#e8a020] rounded-md cursor-pointer hover:border-[#ede7f6] hover:bg-transparent hover:text-[#ede7f6] transition-all duration-300 ease-in-out text-sm uppercase tracking-widest"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            );
          }

          // Regular Links
          return (
            <div
              key={index}
              className="relative text-[#ede7f6]"
              onMouseEnter={() => item.children && setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.link ? (
                <Link className="lg:text-lg xl:text-xl capitalize" to={item.link}>
                  <NavlinkAnimation backgroundColor="#ede7f6">{item.Name}</NavlinkAnimation>
                </Link>
              ) : (
                <span className="lg:text-lg xl:text-xl capitalize cursor-pointer flex items-center gap-2">
                  <NavlinkAnimation>{item.Name}</NavlinkAnimation>
                  {index === 2 && (
                    <span className={`${openDropdown === index ? "rotate-180 " : ""} transition-all duration-500 ease-in-out`}>
                      <SlArrowDown size={13} />
                    </span>
                  )}
                </span>
              )}

              {/* Dropdown for Services */}
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
          );
        })}
      </div>
    </nav>
  )
}

export default Navbar;
