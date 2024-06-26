"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Laptop = ({ position, rotation }) => { // Accept rotation as a prop
    const group = useRef();
    const { scene } = useGLTF('/assets/laptop.glb');
  
    return (
      <group ref={group} position={position} rotation={rotation}> {/* Use the position and rotation props */}
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
          <directionalLight position={[0.5, 30, 10]} intensity={1.5} />
          <CustomCamera position={{ position: [0, 0, 0.7], fov: 75 }} />
          {/* Adjust the position and rotation of the Laptop component */}
          <Laptop position={[0, 0, 0]} rotation={[0.4, Math.PI, 0]} /> {/* Rotate 180 degrees around Y-axis */}
        </Canvas>
      </div>
    );
  };
  
  export default LaptopModel;
