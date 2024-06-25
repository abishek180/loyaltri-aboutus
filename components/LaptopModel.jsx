"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Laptop = ({ position }) => { // Accept position as a prop
    const group = useRef();
    const { scene } = useGLTF('/assets/laptop.glb');
  
    return (
      <group ref={group} position={position}> {/* Use the position prop */}
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
    return (
      <div className="h-screen w-[1000px]">
        <Canvas className="h-full w-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <CustomCamera position={{ position: [0, 0, 0.9], fov: 75 }} />
          {/* Change the position of the Laptop component */}
          <Laptop position={[0, 0, 0]} /> {/* Adjust position as needed */}
        </Canvas>
      </div>
    );
  };
  
  export default LaptopModel;


