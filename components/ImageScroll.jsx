"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScroll";
import Image from "next/image";
import loyaltriold from "@/public/images/loyaltriold.png"


export function ImageScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
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
    </div>
  );
}

