import React from 'react'
import { motion, useAnimation } from "framer-motion";

const NavlinkAnimation = ({ children , backgroundColor="" }) => {
  const textControls = useAnimation();
  const lineControls = useAnimation();

  const handleHoverStart = async () => {
    Promise.all([
      textControls.start({
        y: "-100%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }),
      lineControls.start({
        scaleX: 1,
        transformOrigin: "left center",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }),
    ]);
  };

  const handleHoverEnd = async () => {
    Promise.all([
      textControls.start({
        y: "0%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }),
      lineControls.start({
        scaleX: 0,
        transformOrigin: "right center",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      }),
    ]);
  };

  return (
    <motion.span
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* First text — visible by default, slides up on hover */}
      <motion.span
        animate={textControls}
        initial={{ y: "0%" }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>

      {/* Second text — sits below, slides up into view on hover */}
      <motion.span
        animate={textControls}
        initial={{ y: "0%" }}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          display: "inline-block",
        }}
      >
        {children}
      </motion.span>

      {/* Underline */}
      <motion.span
        animate={lineControls}
        initial={{ scaleX: 0 }}
        style={{
          position: "absolute",
          bottom:0,
          left: 0,
          height: "1px",
          width: "100%",
          background: "currentColor",
          display: "block",
          transformOrigin: "left center",
          backgroundColor:{backgroundColor}
        }}
      />
    </motion.span>
  );
};

export default NavlinkAnimation;