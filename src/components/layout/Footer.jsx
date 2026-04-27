import React from "react";
import Logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-primary-dark overflow-x-hidden ">
      {/* main content div */}
      <div className="text-[#ede7f6] flex justify-around font-body  py-10 px-16">
        {/* 1 col */}
        <div>
          <img className="h-30" src={Logo} alt="Logo" />
          <p className="max-w-xl text-md">
            We would love to be your “all from one source” ally for Events,
            Branding, Advertising, and Corporate Gifting. Our goal is to keep
            the solutions Simple yet Significant alongside create a partnership
            that builds success stories.
          </p>
        </div>
        {/* col 2 */}
        <div className="text-md space-y-2">
          <Link className="block">
            <p className=" uppercase font-semibold hover:text-accent transition-all ease-in-out duration-300">
              Home
            </p>
          </Link>
          <Link className="block">
            <p className="uppercase font-semibold hover:text-accent transition-all ease-in-out duration-300">
              About
            </p>
          </Link>
          <Link className="block">
            <p className="uppercase font-semibold">services</p>
          </Link>
          <Link>
            <p className="flex gap-1 items-center hover:text-accent transition-all ease-in-out duration-300">
              <SlArrowRight />
              Event Management
            </p>
          </Link>
          <Link>
            <p className="flex  gap-1 items-center hover:text-accent transition-all ease-in-out duration-300">
              <SlArrowRight />
              Branding & Advertising
            </p>
          </Link>
          <Link>
            <p className="flex  gap-1 items-center hover:text-accent transition-all ease-in-out duration-300">
              <SlArrowRight />
              Corporate Gifting
            </p>
          </Link>
        </div>

        {/* col 3 */}

        <div className="uppercase font-semibold space-y-2">
          <Link className="block">
            <p className="hover:text-accent transition-all ease-in-out duration-300">
              Portfolio
            </p>
          </Link>
          <Link className="block">
            <p className="hover:text-accent transition-all ease-in-out duration-300">
              Contact
            </p>
          </Link>
          <p>Socials</p>
          <div className="flex gap-2">
            <a
              className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
              href=""
            >
              <FaFacebook />
            </a>
            <a
              className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
              href=""
            >
              <FaInstagram />
            </a>
            <a
              className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
              href=""
            >
              <FaYoutube />
            </a>
            <a
              className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
              href=""
            >
              <FaLinkedin />
            </a>
            <a
              className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
              href=""
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* bottom line  */}
      <div className="flex bg-gray-700 text-sm justify-around  font-body text-[#ede7f6] py-2 px-16">
        <p>
          Developed by{" "}
          <span className="font-semibold">
            <a target="_blank" href="https://tekunik.in/">
              TekUnik
            </a>
          </span>
        </p>
        <p>
          {" "}
          Vibgyor Ventures &copy; All rights reserved {new Date().getFullYear()}
        </p>
        <p>Legal Terms</p>
      </div>
    </section>
  );
};

export default Footer;
