"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DrawSvg = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const path = svgRef.current.querySelector('path');
    const length = path.getTotalLength();

    // Set up initial styles for path
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Create ScrollTrigger animation
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%', // Adjust these values as needed
        end: 'top 20%',
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="2" height="108" viewBox="0 0 2 108" fill="none">
        <path d="M1 1.5L1 107.5" stroke="url(#paint0_linear_1269_605)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="paint0_linear_1269_605" x1="0" y1="1.5" x2="4.63341e-06" y2="107.5" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopColor="#999999"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DrawSvg;
