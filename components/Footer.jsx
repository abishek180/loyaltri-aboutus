import React from "react";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 bg-white h-auto lg:h-[465px] w-[calc(100%_-_10%)] mx-auto relative bottom-[130px] rounded-[16px] z-30 p-[50px]">
        <div className="flex flex-col justify-center items-center gap-8">
         
            <p className="w-full lg:w-[552px] text-black text-3xl md:text-6xl font-semibold text-center">
              Want to learn more about Loyaltri?
            </p>
            <p className="w-full lg:[1000px] text-[#667085] text-2xl font-medium text-center">
              WWe'd love to chat with you more about how Loyaltri can support
              your business's HR needs. It's like having HR experts at your
              fingertips, just a click away!
            </p>
            <button className="rounded-[100px] py-4 px-10 bg-[#6A4BFC] hover:duration-300 font-bold text-white">
              <Link href="/contact">Book your Demo</Link>
            </button>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <p className="text-[#667085] text-sm font-normal flex items-center gap-2"><IoIosCheckmarkCircle className="text-black"/>A no-commitment <span className="text-black font-medium">product walkthrough</span></p>
                <p className="text-[#667085] text-sm font-normal flex items-center gap-2"><IoIosCheckmarkCircle className="text-black"/><span className="text-black font-medium">Free Trial,</span> Cancel any time</p>
                <p className="text-[#667085] text-sm font-normal flex items-center gap-2"><IoIosCheckmarkCircle className="text-black"/>Your questions,<span className="text-black font-medium">answered</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
