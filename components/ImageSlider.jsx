"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useState } from "react";
import { GetChars } from "./GetChars";

// images
import oldloyaltri from "@/public/images/loyaltriold.png";
import newloyaltri from "@/public/images/loyaltrinew.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export const ImageSlider = () => {
    // slideuptext
    const title = useRef(null);
    const products = useRef(null);
    const isInView = useInView(title, { margin: "1%" });

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
    background: 'radial-gradient(75.97% 95.37% at 90% 10.37%, #16123E 0%, #000 100%), #000'
  };

  return (
    <section style={gradientStyle}>
        <div className="max-w-screen-xl mx-auto flex justify-center items-center relative py-20 lg:py-40">
    
    <div className="flex flex-col justify-center items-center gap-10">

    <motion.div className="flex items-center justify-center">
         <div
            ref={title}
            className="text-2xl md:text-6xl font-semibold text-center"
          >
            <GetChars
              word=" LOYALTRI"
              isInView={isInView}
            />
          </div>
      </motion.div>
      <div
        className="relative w-[300px] md:w-[550px] lg:w-[800px] bg-[#141414] border border-[#828282] p-2 lg:p-4 rounded-[32px]"
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
              className="absolute top-0 bottom-0 w-2 bg-[#957EFF] cursor-ew-resize"
              style={{
                left: `calc(${sliderPosition}% - 1px)`,
              }}
            >
              <div className="bg-[#957EFF] absolute rounded-full h-11 w-11 -left-5 top-[calc(50%-5px)] flex justify-center items-center gap-1">
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
