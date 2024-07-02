"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-screen-xl mx-auto px-5 flex flex-col fixed top-0 left-0 z-[50] w-full">
        <div className="flex justify-between items-center pt-10 px-2">
          <div className="text-white text-2xl">Loyaltri</div>
          <div className="hidden md:flex gap-5">
            <TransitionLink href="/" label="Home" />
            <TransitionLink href="/about" label="About" />
            <TransitionLink href="/" label="Service" />
            <TransitionLink href="/about" label="Contact" />
          </div>
          <div className="md:hidden relative z-50" onClick={toggleMenu}>
          <motion.div
        className="w-8 h-8 flex flex-wrap justify-center items-center cursor-pointer"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full m-1"
          variants={{
            closed: { x: 0, y: 0, width: '8px', height: '8px' },
            open: { x: 6, y: 6, width: '8px', height: '2px', rotate: 45 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-2 h-2 bg-white rounded-full m-1"
          variants={{
            closed: { x: 0, y: 0, width: '8px', height: '8px' },
            open: { x: -6, y: 6, width: '8px', height: '2px', rotate: -45 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-2 h-2 bg-white rounded-full m-1"
          variants={{
            closed: { x: 0, y: 0, width: '8px', height: '8px' },
            open: { x: 6, y: -6, width: '8px', height: '2px', rotate: -45 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-2 h-2 bg-white rounded-full m-1"
          variants={{
            closed: { x: 0, y: 0, width: '8px', height: '8px' },
            open: { x: -6, y: -6, width: '8px', height: '2px', rotate: 45 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
          </div>
        </div>
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center gap-10 items-start px-5 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full bg-slate-400 h-[1px]"></div>
          <p className="text-2xl">Experience the future of storytelling</p>
          <ul className="list-none p-0 text-start">
            <li className="my-4" onClick={toggleMenu}>
              <TransitionLink href="/" label="Home" />
            </li>
            <li className="my-4" onClick={toggleMenu}>
              <TransitionLink href="/about" label="About" />{" "}
            </li>
            <li className="my-4" onClick={toggleMenu}>
              <TransitionLink href="/" label="Service" />{" "}
            </li>
            {/* <li className="my-4" onClick={toggleMenu}>
            <TransitionLink href="/about" label="Contact"/>{" "}
          </li> */}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileMenu;
