"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const letters = "Loyaltri".split("");

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-screen-xl mx-auto px-5 flex flex-col fixed top-0 left-0 right-0 z-[50] w-full">
        <div className="flex justify-between items-center pt-10 px-2">
          <div className="flex items-center gap-2">
            <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="30"
              viewBox="0 0 195 170"
              fill="none"
            >
              <ellipse
                cx="160.267"
                cy="37.2177"
                rx="16.828"
                ry="16.8831"
                fill="white"
              />
              <g filter="url(#filter0_b_1269_606)">
                <rect
                  x="134.854"
                  y="72.9142"
                  width="50.8367"
                  height="76.3828"
                  rx="25.4183"
                  stroke="url(#paint0_linear_1269_606)"
                  stroke-width="17.8503"
                />
              </g>
              <ellipse
                cx="104.815"
                cy="29.5363"
                rx="18.9315"
                ry="18.9935"
                fill="white"
              />
              <g filter="url(#filter1_b_1269_606)">
                <rect
                  x="76.2104"
                  y="68.1391"
                  width="57.1913"
                  height="85.9305"
                  rx="28.5956"
                  stroke="url(#paint1_linear_1269_606)"
                  stroke-width="20.0816"
                />
              </g>
              <ellipse
                cx="42.955"
                cy="21.1039"
                rx="21.035"
                ry="21.1039"
                fill="white"
              />
              <g filter="url(#filter2_b_1269_606)">
                <rect
                  x="11.1565"
                  y="63.3651"
                  width="63.5459"
                  height="95.4784"
                  rx="31.7729"
                  stroke="url(#paint2_linear_1269_606)"
                  stroke-width="22.3129"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_1269_606"
                  x="116.662"
                  y="54.7224"
                  width="87.2204"
                  height="112.766"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="4.63334"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_1269_606"
                  x="55.7445"
                  y="47.6733"
                  width="98.1229"
                  height="126.862"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5.2125"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_b_1269_606"
                  x="-11.5833"
                  y="40.6253"
                  width="109.025"
                  height="140.958"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5.79167"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1269_606"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1269_606"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1269_606"
                  x1="160.272"
                  y1="63.989"
                  x2="160.272"
                  y2="158.222"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1269_606"
                  x1="104.806"
                  y1="58.0983"
                  x2="104.806"
                  y2="164.11"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1269_606"
                  x1="42.9294"
                  y1="52.2086"
                  x2="42.9294"
                  y2="170"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
            </div>
            <motion.div
              className="text-white text-2xl font-semibold flex"
              initial="visible"
              animate={scrollDirection === "down" ? "hidden" : "visible"}
              variants={containerVariants}
            >
              {letters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="hidden md:flex gap-5">
            <TransitionLink href="/" label="Home" />
            <TransitionLink href="/about" label="About" />
            <TransitionLink href="/" label="Service" />
          </div>
          <div className="hidden md:block text-white text-2xl">Join Beta</div>
          <div className="md:hidden relative z-50" onClick={toggleMenu}>
            <motion.div
              className="w-8 h-8 flex flex-wrap justify-center items-center cursor-pointer"
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: { x: 6, y: 6, width: "8px", height: "2px", rotate: 45 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: -6,
                    y: 6,
                    width: "8px",
                    height: "2px",
                    rotate: -45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: 6,
                    y: -6,
                    width: "8px",
                    height: "2px",
                    rotate: -45,
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full m-1"
                variants={{
                  closed: { x: 0, y: 0, width: "8px", height: "8px" },
                  open: {
                    x: -6,
                    y: -6,
                    width: "8px",
                    height: "2px",
                    rotate: 45,
                  },
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
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileMenu;
