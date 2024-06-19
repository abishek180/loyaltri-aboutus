"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
// images
import hr from "@/public/images/meeting.png";
import question from "@/public/images/question.png";
import pop from "@/public/images/pop-up.png";
// components
import DrawSvg from "./DrawSvg";
import { GetChars } from "./GetChars";

export const Hr = () => {
  // slideup-text
  const title = useRef(null);
  const popImageRef = useRef(null);
  const isInView = useInView(title, { margin: "1%" });
  const isPopInView = useInView(popImageRef, { once: true });

  return (
    <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
      <div className="flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-20">
          <DrawSvg />
          <p className="text-white text-2xl md:text-[38px] text-center font-semibold leading-[122%] flex flex-col lg:flex-row items-center gap-3">
            The constant question{" "}
            <span className="overflow-hidden w-[37px]">
              <Image
                src={question}
                className="w-full h-full object-cover object-center"
              />
            </span>{" "}
            we faced then was...
          </p>
          <motion.div
            ref={popImageRef}
            initial={{ scale: 1 }}
            animate={{ scale: isPopInView ? 1.2 : 1 }}
            transition={{ duration: 0.5 }}
            className="w-[280px] md:w-[500px] lg:w-[750px]"
          >
            <Image src={pop} className="w-full h-full object-cover object-center" />
          </motion.div>
          <motion.div className="flex items-center justify-center gap-2">
            <p className="text-2xl md:text-7xl text-gradient font-semibold ">
              Convenience <span className="text-white">is</span>
            </p>
            <div
              ref={title}
              className="text-2xl md:text-7xl text-white font-semibold text-center"
            >
              <GetChars word="key" isInView={isInView} />
            </div>
          </motion.div>
          <DrawSvg />
          <p className="text-white text-2xl md:text-[38px] text-center font-semibold leading-[122%] w-full lg:w-[922px]">
            Based on insights from interviews with 100 HR professionals, we refined our approach with input from our team to innovate further.
          </p>
          <div className="overflow-hidden w-full lg:w-[750px]">
            <Image src={hr} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};
