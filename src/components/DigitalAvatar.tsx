import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 200 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.z += 0.001;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff3155"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#ff3155"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          emissive="#ff0022"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Internal Glow */}
      <Sphere args={[0.8, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </Sphere>

      {/* Orbiting Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ff3155" emissive="#ff3155" emissiveIntensity={2} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export default function DigitalAvatar() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff3155" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f2ff" />
        <Core />
        <FloatingParticles count={500} />
      </Canvas>
    </div>
  );
}
