"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Laptop = ({ position, rotation }) => {
  const group = useRef();
  const { scene } = useGLTF('/assets/laptop.glb');

  return (
    <group ref={group} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

const CustomCamera = ({ position }) => {
  const ref = useRef();
  useFrame(({ camera }) => {
    camera.position.copy(ref.current.position);
    camera.lookAt(0, 0, 0);
  });
  return <perspectiveCamera ref={ref} {...position} />;
};

const LaptopModel = () => {
  const [rotation, setRotation] = useState([0, Math.PI, 0]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScroll;

    const maxRotation = Math.PI / 2; // Maximum closing angle (90 degrees)
    const newRotationX = maxRotation * (1 - scrollFraction); // Invert the scroll effect
    setRotation([newRotationX, Math.PI, 0]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen w-[1000px]">
      <div style={{ height: '200vh' }}> {/* Make the page scrollable */}
        <Canvas className="h-full w-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0.5, 50, 5]} intensity={1.5} />
          <CustomCamera position={{ position: [0, 0, 0.9], fov: 75 }} />
          <Laptop position={[0, 0, 0]} rotation={rotation} /> {/* Adjust rotation based on scroll */}
        </Canvas>
      </div>
    </div>
  );
};

export default LaptopModel;
