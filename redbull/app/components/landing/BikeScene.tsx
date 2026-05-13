"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <torusGeometry args={[0.72, 0.075, 18, 72]} />
        <meshStandardMaterial color="#050507" metalness={0.75} roughness={0.28} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.47, 0.018, 12, 42]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

function BikeRig() {
  const rig = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!rig.current) return;
    rig.current.rotation.y = pointer.x * 0.28 + Math.sin(clock.elapsedTime * 0.45) * 0.08;
    rig.current.rotation.x = -0.08 + pointer.y * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.65}>
      <group ref={rig} position={[0, -0.3, 0]} rotation={[0, -0.25, 0]}>
        <Wheel position={[-1.45, -0.45, 0]} />
        <Wheel position={[1.35, -0.45, 0]} />

        <mesh position={[-0.25, 0.1, 0]} rotation={[0, 0, -0.14]}>
          <boxGeometry args={[1.75, 0.24, 0.32]} />
          <meshStandardMaterial color="#e11d2e" emissive="#7f111b" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[0.2, 0.43, 0]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[1.2, 0.18, 0.26]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.15} roughness={0.22} />
        </mesh>
        <mesh position={[0.8, 0.24, 0]} rotation={[0, 0, -0.28]}>
          <boxGeometry args={[1.15, 0.14, 0.22]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0369a1" emissiveIntensity={1.1} />
        </mesh>
        <mesh position={[-0.75, 0.57, 0]} rotation={[0, 0, 0.18]}>
          <boxGeometry args={[0.75, 0.15, 0.34]} />
          <meshStandardMaterial color="#111827" metalness={0.55} roughness={0.32} />
        </mesh>
        <mesh position={[1.42, 0.32, 0]} rotation={[0, 0, -0.62]}>
          <cylinderGeometry args={[0.045, 0.045, 1.25, 18]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[1.76, 0.9, 0]} rotation={[0, 0, 1.2]}>
          <boxGeometry args={[0.7, 0.06, 0.08]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1.7} />
        </mesh>
        <mesh position={[0.18, 0.86, 0]}>
          <sphereGeometry args={[0.36, 32, 32]} />
          <MeshTransmissionMaterial
            color="#ffffff"
            distortion={0.18}
            thickness={0.35}
            roughness={0.18}
            transmission={0.65}
            metalness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function BikeScene() {
  return (
    <Canvas camera={{ position: [0, 0.6, 5.2], fov: 42 }} dpr={[1, 1.8]}>
      <color attach="background" args={["#030305"]} />
      <ambientLight intensity={0.75} />
      <pointLight position={[-4, 3, 3]} color="#e11d2e" intensity={18} />
      <pointLight position={[3, 2, 2]} color="#38bdf8" intensity={14} />
      <spotLight position={[0, 5, 5]} angle={0.35} penumbra={0.9} intensity={25} />
      <Sparkles count={90} scale={[6, 3, 3]} size={2.4} speed={0.45} color="#7dd3fc" />
      <Sparkles count={45} scale={[5, 2, 2]} size={3.6} speed={0.55} color="#ef4444" />
      <BikeRig />
    </Canvas>
  );
}
