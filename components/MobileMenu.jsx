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
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl"></div>
        <div className="hidden md:flex space-x-6">
          <TransitionLink href="/" label="Home" />
          <TransitionLink href="/about" label="About" />
          <TransitionLink href="/" label="Service" />
          <TransitionLink href="/about" label="Contact" />
        </div>
        <div className="md:hidden relative z-50" onClick={toggleMenu}>
          <motion.div
            className="w-8 h-6 flex flex-col justify-between cursor-pointer"
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="w-full h-0.5 bg-white"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 14 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-full h-0.5 bg-white"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-full h-0.5 bg-white"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="list-none p-0 text-center">
          <li className="my-4" onClick={toggleMenu}>
            <TransitionLink href="/" label="Home"/>
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <TransitionLink href="/about" label="About"/>{" "}
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <TransitionLink href="/" label="Service"/>{" "}
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <TransitionLink href="/about" label="Contact"/>{" "}
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileMenu;
