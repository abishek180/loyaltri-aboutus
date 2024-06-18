"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
// components
import { GetChars } from "./GetChars";
import { WobbleCard } from "./ui/WobbleCard";
// images
import bentoimage from "/public/Images/bento.jpeg";

export const Bentogrid = () => {
  // slideup-text
  const title = useRef(null);
  const isInView = useInView(title, { margin: "1%" });

  
  return (
    <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20" id="products">
      <div className="flex flex-col justify-center items-center gap-20">
        <motion.div className="flex items-center justify-center">
          <div
            ref={title}
            className="text-2xl md:text-6xl text-white font-semibold w-full lg:w-[860px] text-center"
          >
            Transforming Challenges into
            <GetChars
              word=" Opportunities"
              isInView={isInView}
            />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 w-full h-full lg:w-[900px] lg:h-[500px] overflow-hidden">
            <Image
              src={bentoimage}
              alt="linear demo image"
              className="w-full h-full object-center object-cover"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-[#101010] p-5 border border-[#121111] w-full h-full lg:w-[450px] lg:h-[370px]">
            <div className="flex justify-center items-center">
              <p className="text-white text-center text-xl md:text-4xl font-semibold leading-[122%]">
                Schools reported that <span className="text-gradient">WFM</span>{" "}
                was intuitive and easy to use
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-[#101010] p-5 border border-[#121111] w-full h-full lg:w-[450px] lg:h-[370px]">
            <div className="flex justify-center items-center">
              <p className="text-white text-center text-xl md:text-4xl font-semibold leading-[122%]">
                Building on this success, we expanded our software into the{" "}
                <span className="text-gradient">Health</span> and{" "}
                <span className="text-gradient">Retail</span> sectors.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};
