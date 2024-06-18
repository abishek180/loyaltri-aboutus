import React from "react";
import Image from "next/image";
import globe from "@/public/images/Globe.png";

export const Map = () => {
  return (
    <section className="bg-[url('/images/background.png')]">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="w-full lg:w-[920px] text-white text-2xl md:text-6xl font-semibold text-center">
            Now established in many cities across the GCC and India, our
            software proudly serves over 1,000 clients
          </p>
          <div className="overflow-hidden ">
            <Image
              src={globe}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
