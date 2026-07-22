import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function BackgroundStars() {
  const starsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

function MovingGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 10;
      meshRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 10;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -20]}>
      <sphereGeometry args={[15, 32, 32]} />
      <meshBasicMaterial color="#ff3155" transparent opacity={0.03} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050810]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BackgroundStars />
        <MovingGlow />
        <fog attach="fog" args={['#050810', 0, 100]} />
      </Canvas>
    </div>
  );
}
