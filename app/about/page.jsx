import React from "react";
import Image from "next/image";
// images
import year2010 from "@/public/images/2010.png";
// components
import TextReveal from "@/components/TextReveal";
import { Hero } from "@/components/Hero";
import  Bento  from "@/components/Bento";
import { ImageScroll } from "@/components/ImageScroll";
import TextEffect from "@/components/TextEffect";
import { FramerDiv } from "@/components/FramerDiv";
import DrawSvg from "@/components/DrawSvg";
import { ImageSlider } from "@/components/ImageSlider";
import { Hr } from "@/components/Hr";
import { Map } from "@/components/Map";
import Footer from "@/components/Footer";
import { AnimatedDiv } from "@/components/AnimatedDiv";


const page = () => {
  return (
    <div>
      <Hero description="The web has come a long way in the last ten years, but why is HR software stuck in the past? It doesn't have to be that way, We want to change that, We want to reimagine HRMS Software." />
      <DrawSvg />
      <div className="flex justify-center items-center pt-5">
        <div className="w-[110px]">
          <Image
            src={year2010}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <TextReveal />
      <ImageScroll />
      <TextEffect />
      <Bento />
      <Hr />
      {/* <AnimatedDiv/> */}
      <FramerDiv />
      <ImageSlider />
      <Map />
      <Footer />
    </div>
  );
};

export default page;
