"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// components
import { GetChars } from "./GetChars";
// images
import bentoimage from "/public/Images/bento.jpeg";

const Bento = () => {
    // slideup-text
  const title = useRef(null);
  const isInView = useInView(title, { margin: "1%" });


  return (
    <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
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
          <div className="col-span-1 lg:col-span-2 w-full h-full lg:w-[900px] lg:h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={bentoimage}
              alt="linear demo image"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex justify-center items-center col-span-1 bg-[#101010] p-5 border border-[#121111] w-full h-full lg:w-[450px] lg:h-[370px] rounded-3xl">
            <div className="flex justify-center items-center">
              <p className="text-white text-center text-xl md:text-4xl font-semibold leading-[122%]">
                Schools reported that <span className="text-gradient">WFM</span>{" "}
                was intuitive and easy to use
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-1 bg-[#101010] p-5 border border-[#121111] w-full h-full lg:w-[450px] lg:h-[370px] rounded-3xl">
            <div className="flex justify-center items-center">
              <p className="text-white text-center text-xl md:text-4xl font-semibold leading-[122%]">
                Building on this success, we expanded our software into the{" "}
                <span className="text-gradient">Health</span> and{" "}
                <span className="text-gradient">Retail</span> sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bento


