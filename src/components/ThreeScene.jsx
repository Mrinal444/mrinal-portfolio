import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Developer Character
function DeveloperCharacter() {
  const groupRef = useRef();
  const laptopRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
    }
    // Laptop screen glow
    if (laptopRef.current) {
      laptopRef.current.rotation.x = Math.sin(t * 2) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#f4a261" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 1.85, 0.3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>
      <mesh position={[0.12, 1.85, 0.3]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[0.7, 0.9, 0.4]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.5, 1.1, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
      <mesh position={[0.5, 1.1, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>

      {/* Hands on keyboard */}
      <mesh position={[-0.3, 0.5, 0.3]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#f4a261" />
      </mesh>
      <mesh position={[0.3, 0.5, 0.3]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#f4a261" />
      </mesh>

      {/* Laptop */}
      <group ref={laptopRef} position={[0, 0.6, 0.2]}>
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 0.05, 0.7]} />
          <meshStandardMaterial color="#2a2a3a" />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.9, 0.01, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0.35, -0.3]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.95, 0.6, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Screen Display with Code */}
        <mesh position={[0, 0.35, -0.27]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[0.85, 0.5]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Code lines effect */}
        <mesh position={[-0.2, 0.4, -0.26]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.01]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh position={[0.1, 0.35, -0.26]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.4, 0.02, 0.01]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh position={[-0.1, 0.3, -0.26]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.5, 0.02, 0.01]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.2, 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>
      <mesh position={[0.2, 0.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>

      {/* Floating code brackets */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1.5, 1.5, 0]}>
          <torusGeometry args={[0.2, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[1.5, 1.2, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[1.2, 2.2, -0.5]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial
            color="#4f46e5"
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Main Canvas Component
export default function ThreeScene() {
  return (
    <div className="absolute top-0 right-0 w-full h-full md:w-1/2 pointer-events-none">
      <Canvas className="pointer-events-auto">
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#818cf8"
        />

        {/* Character */}
        <DeveloperCharacter />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
