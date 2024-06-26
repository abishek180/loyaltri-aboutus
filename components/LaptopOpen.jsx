"use client";
import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, ContactShadows } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';

function Model({ open, hinge, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/assets/mac-draco.glb');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <group ref={group} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

export default function LaptopOpen() {
  const [open, setOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);

  const props = useSpring({ open: Number(open || scrollOpen) });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = 1 - (scrollY / maxScroll); // Reverse the scroll effect

    setScrollOpen(scrollFraction > 0.88);
  };

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='w-full lg:w-[1100px]'>
        <web.main>
          <web.h1 style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`) }}>scroll</web.h1>
          <Canvas className='!h-[100vh]' dpr={[1, 2]} camera={{ position: [0, 0, -15], fov: 45 }}> {/* Adjusted camera position and fov */}
            <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
            <Suspense fallback={null}>
              <group rotation={[-0.1, Math.PI, 0]} position={[0, -0.5, 0]} onClick={(e) => (e.stopPropagation(), handleClick())}> {/* Adjusted rotation and position */}
                <Model open={open || scrollOpen} hinge={props.open.to([0, 1], [0, Math.PI / 2])} /> {/* Adjusted hinge for 180-degree opening */}
              </group>
              <Environment preset="city" />
            </Suspense>
            <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
          </Canvas>
        </web.main>
      </div>
      {/* Additional sections below */}
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-centert'>Backed by leading HR managers and founders</h2>
        <p>This is additional content below the animated laptop.</p>
      </div>
    </>
  );
}
