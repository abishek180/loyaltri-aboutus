"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedDiv = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const elementsRef = useRef([]);

  const details = [
    {
      title: "Payroll",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M29.9999 1.76465C14.4705 1.76465 1.76465 14.4705 1.76465 29.9999C1.76465 45.5294 14.4705 58.2352 29.9999 58.2352C45.5294 58.2352 58.2352 45.5294 58.2352 29.9999C58.2352 14.4705 45.5294 1.76465 29.9999 1.76465ZM29.8235 28.2352C33.7058 28.2352 37.0588 31.4117 37.0588 35.2941C37.0588 38.647 35.2941 41.2941 31.7646 42.1764V44.1176C31.7646 45.1764 31.0588 45.8823 29.9999 45.8823C28.9411 45.8823 28.2352 45.1764 28.2352 44.1176V42.1764C26.4705 41.4705 22.9411 38.647 22.9411 35.2941C22.9411 34.2352 23.8235 33.5294 24.8823 33.5294C25.9411 33.5294 26.647 34.2352 26.647 35.2941C26.647 37.2352 28.2352 38.8235 30.1764 38.8235C32.1176 38.8235 33.7058 37.2352 33.7058 35.2941C33.7058 33.3529 32.1176 31.7646 30.1764 31.7646C26.2941 31.7646 23.2941 28.5882 23.2941 24.7058C23.2941 21.3529 26.8235 18.7058 28.5882 17.8235V15.8823C28.5882 14.8235 29.2941 14.1176 30.3529 14.1176C31.4117 14.1176 32.1176 14.8235 32.1176 15.8823V17.8235C35.647 18.5294 37.4117 21.3529 37.4117 24.7058C37.4117 25.7646 36.7058 26.4705 35.8235 26.4705C34.9411 26.4705 34.0588 25.7646 34.0588 24.7058C34.0588 22.7646 32.4705 21.1764 30.5294 21.1764C28.5882 21.1764 26.9999 22.7646 26.9999 24.7058C26.9999 26.647 27.8823 28.2352 29.8235 28.2352Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "HR",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M30 36.6667C32.637 36.6667 35.2149 35.8847 37.4076 34.4196C39.6002 32.9545 41.3092 30.8721 42.3184 28.4358C43.3275 25.9994 43.5916 23.3185 43.0771 20.7321C42.5626 18.1457 41.2928 15.7699 39.4281 13.9052C37.5634 12.0405 35.1876 10.7707 32.6012 10.2562C30.0147 9.74173 27.3339 10.0058 24.8975 11.0149C22.4612 12.0241 20.3788 13.7331 18.9137 15.9257C17.4486 18.1184 16.6666 20.6963 16.6666 23.3333C16.6666 26.8696 18.0714 30.2609 20.5719 32.7614C23.0724 35.2619 26.4637 36.6667 30 36.6667ZM56.6666 43.3333C58.6444 43.3333 60.5778 42.7468 62.2223 41.648C63.8668 40.5492 65.1485 38.9874 65.9054 37.1602C66.6623 35.3329 66.8603 33.3222 66.4745 31.3824C66.0886 29.4426 65.1362 27.6608 63.7377 26.2623C62.3392 24.8637 60.5573 23.9113 58.6175 23.5255C56.6777 23.1396 54.6671 23.3377 52.8398 24.0945C51.0125 24.8514 49.4507 26.1331 48.3519 27.7776C47.2531 29.4221 46.6666 31.3555 46.6666 33.3333C46.6666 35.9855 47.7202 38.529 49.5956 40.4044C51.4709 42.2798 54.0145 43.3333 56.6666 43.3333ZM70 66.6667C70.884 66.6667 71.7319 66.3155 72.357 65.6904C72.9821 65.0652 73.3333 64.2174 73.3333 63.3333C73.3306 60.218 72.4548 57.1658 70.8053 54.5229C69.1558 51.8801 66.7986 49.7525 64.0011 48.3816C61.2036 47.0106 58.0779 46.4511 54.9786 46.7667C51.8793 47.0822 48.9304 48.2601 46.4666 50.1667C43.2017 46.9145 39.0468 44.702 34.526 43.8081C30.0053 42.9142 25.321 43.379 21.064 45.1438C16.8071 46.9086 13.168 49.8945 10.6058 53.7248C8.04352 57.5551 6.67286 62.0584 6.66663 66.6667C6.66663 67.5507 7.01782 68.3986 7.64294 69.0237C8.26806 69.6488 9.1159 70 9.99996 70H50C50.884 70 51.7319 69.6488 52.357 69.0237C52.9821 68.3986 53.3333 67.5507 53.3333 66.6667"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Recruitment",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M54 12H51V57H54C57.3 57 60 54.3 60 51V18C60 14.7 57.3 12 54 12ZM0 18V51C0 54.3 2.697 57 6 57H9V12H6C2.697 12 0 14.7 0 18ZM40.5 5.718C38.457 4.77 34.833 3 29.943 3C25.044 3 21.543 4.77 19.5 5.718V12H12V57H48V12H40.5V5.718ZM36 12H24V7.992C25.602 7.302 27.234 6.597 29.943 6.597C32.649 6.597 34.401 7.299 36 7.992V12Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        // markers: true,
        onEnter: () => setActiveIndex(index),
        onLeaveBack: () => setActiveIndex(-1),
        onLeave: () => setActiveIndex(-1),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 bg-black py-20 text-white flex flex-col gap-28 justify-between items-center">
        {details.map((detail, index) => (
          <div
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className={`observer-element flex flex-col justify-center items-center gap-10 transition-transform duration-300 ease-in-out transform ${
              index === activeIndex
                ? "scale-110 text-white"
                : "scale-90 text-white/10"
            }`}
          >
            <div
              className={`rounded-[30px] py-5 px-6 flex justify-center items-center transition-colors duration-300 ease-in-out ${
                index === activeIndex ? "bg-custom-gradiant2" : "bg-gray-500/40"
              }`}
            >
              {detail.svg}
            </div>
            <p className="text-3xl md:text-6xl font-semibold">{detail.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
