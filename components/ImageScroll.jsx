"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScroll";
import Image from "next/image";
import loyaltriold from "@/public/images/loyaltriold.png"
import DrawSvg from "./DrawSvg";


export function ImageScroll() {
  return (
    <div className="flex flex-col overflow-hidden max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0">
      <ContainerScroll
        titleComponent={
          <>
            {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1> */}
          </>
        }
      >
        <Image
          src={loyaltriold}
          alt="hero"
          className="object-cover w-full h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
      <div className="flex flex-col justify-center items-center text-center">
      <p className="w-full lg:w-[817px] text-white text-xl md:text-4xl font-semibold">As we engaged with school administrators and HR professionals, they all echoed the same sentiment...</p>
      <DrawSvg/>
      </div>
    </div>
  );
}

