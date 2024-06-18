"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useState } from "react";
import { GetChars } from "./GetChars";
import DrawSvg from "./DrawSvg";
import year2024 from "@/public/images/2024.png"

// images
import oldloyaltri from "@/public/images/loyaltriold.png";
import newloyaltri from "@/public/images/loyaltrinew.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleMouseEnter = () => setIsDragging(true);
  const handleMouseLeave = () => setIsDragging(false);

  const gradientStyle = {
    background:
      "radial-gradient(75.97% 95.37% at 90% 10.37%, #16123E 0%, #000 100%), #000",
  };

  return (
    <section style={gradientStyle}>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 flex justify-center items-center relative py-10 lg:py-40">
        <div className="flex flex-col justify-center items-center gap-20">
          <DrawSvg />
          <div className="flex flex-col items-center justify-center gap-20">
            <p className="text-white font-semibold text-xl md:text-6xl text-center w-full lg:w-[892px]">
              We developed a new software, and we named it
            </p>
            <p className="uppercase gradient-text text-6xl md:text-[150px] lg:text-[180px] font-bold text-center leading-[122%]">
              loyaltri
            </p>
            {/* <div className="flex items-center gap-2 py-2 px-8 bg-[#141414] border border-[#828282] shadow-xl rounded-3xl md:rounded-[48px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
              >
                <path
                  d="M16.5 0.5C16.5 9.6127 9.1127 17 0 17C9.1127 17 16.5 24.3873 16.5 33.5C16.5 24.3873 23.8873 17 33 17C23.8873 17 16.5 9.6127 16.5 0.5Z"
                  fill="url(#paint0_linear_1284_4025)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1284_4025"
                    x1="2.90827"
                    y1="19.4161"
                    x2="19.0841"
                    y2="23.667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5C48" />
                    <stop offset="1" stop-color="#6E4AF1" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-[32px] font-bold">2010</p>
            </div> */}
            <div className="w-[110px]">
              <Image src={year2024} className="w-full h-full object-cover object-center"/>
            </div>
          </div>
          <div
            className="relative w-[300px] md:w-[550px] lg:w-[800px] bg-[#141414] border border-[#828282] p-2 lg:p-4 rounded-3xl md:rounded-[32px]"
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="relative w-[300px] md:w-[550px] lg:w-[800px] aspect-[70/45] overflow-hidden select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleMouseEnter}
              >
                <Image
                  alt=""
                  fill
                  priority
                  src={newloyaltri}
                  className="w-full h-full object-center object-cover"
                />

                <div
                  className="absolute top-0 left-0 right-0 w-[300px] md:w-[550px] lg:w-[800px] aspect-[70/45] overflow-hidden select-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    fill
                    priority
                    alt=""
                    src={oldloyaltri}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-2 cursor-ew-resize"
                  style={{
                    left: `calc(${sliderPosition}% - 1px)`,
                    background:
                      "linear-gradient(180deg, rgba(106, 75, 252, 0.50) 0%, rgba(63, 45, 150, 0.50) 100%)",
                  }}
                >
                  <div
                    className="backdrop-filter backdrop-blur-md border border-[#433792] absolute rounded-full h-11 w-11 -left-5 top-[calc(50%-5px)] flex justify-center items-center gap-1"
                    style={{
                      boxShadow: "0px 4px 16px 0px rgba(13, 13, 13, 0.18)",
                      background:
                        "linear-gradient(180deg, rgba(106, 75, 252, 0.50) 0%, rgba(63, 45, 150, 0.50) 100%)",
                    }}
                  >
                    <FaChevronLeft />
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
