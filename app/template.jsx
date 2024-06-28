"use client"
import { useEffect } from "react";
import { animatePageIn } from "@/utils/animations"; // Adjust the path based on your project structure

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-[#121111] z-10 fixed top-0 left-0 w-full flex justify-center items-center"
      >
         <h1 className="text-[50px] lg:text-[200px] font-bold text-center text-gradient">
          Loyaltri
        </h1>
      </div>
      {children}
    </div>
  );
}
