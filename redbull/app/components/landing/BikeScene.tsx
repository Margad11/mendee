"use client";

import { Environment, Float, MeshReflectorMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProps = {
  mouse: { x: number; y: number };
};

function Terrain() {
  const speedLineGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      Array.from({ length: 9 }, (_, index) => {
        const x = (index - 4) * 1.5;
        return new THREE.Vector3(x, Math.sin(index * 0.9) * 0.14 - 1.05, -1.2);
      }),
    );

    return new THREE.TubeGeometry(curve, 90, 0.012, 8, false);
  }, []);

  return (
    <group position={[0, -0.15, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.12, 0]}>
        <planeGeometry args={[18, 8, 96, 24]} />
        <meshStandardMaterial color="#f4f4f2" roughness={0.72} metalness={0.05} />
      </mesh>
      <mesh geometry={speedLineGeometry}>
        <meshStandardMaterial color="#ff6a00" emissive="#ff6a00" emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.46, 0.055, 18, 72]} />
        <meshStandardMaterial color="#111111" roughness={0.42} metalness={0.18} />
      </mesh>
      <mesh castShadow>
        <torusGeometry args={[0.31, 0.012, 12, 48]} />
        <meshStandardMaterial color="#d9dde2" roughness={0.2} metalness={0.85} />
      </mesh>
      {Array.from({ length: 12 }).map((_, index) => (
        <mesh key={index} rotation={[0, 0, (Math.PI * 2 * index) / 12]} castShadow>
          <boxGeometry args={[0.012, 0.65, 0.012]} />
          <meshStandardMaterial color="#a8b0bb" roughness={0.28} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function BikeModel({ mouse }: SceneProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.18 - 0.25;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.035;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 0.2 + mouse.x * 0.28, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      0.1 + mouse.y * 0.12 + Math.sin(state.clock.elapsedTime * 0.9) * 0.06,
      0.05,
    );
  });

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.55}>
      <group ref={group} scale={1.05} rotation={[0.05, -0.25, -0.08]} position={[0.2, 0.1, 0]}>
        <Wheel position={[-1.0, -0.45, 0]} />
        <Wheel position={[1.0, -0.45, 0]} />

        <mesh castShadow position={[0, -0.12, 0]} rotation={[0, 0, -0.08]}>
          <boxGeometry args={[1.55, 0.16, 0.18]} />
          <meshStandardMaterial color="#111111" roughness={0.32} metalness={0.55} />
        </mesh>
        <mesh castShadow position={[-0.34, 0.06, 0]} rotation={[0, 0, -0.38]}>
          <boxGeometry args={[0.92, 0.12, 0.16]} />
          <meshStandardMaterial color="#aeb7c2" roughness={0.18} metalness={0.82} />
        </mesh>
        <mesh castShadow position={[0.45, 0.06, 0]} rotation={[0, 0, 0.35]}>
          <boxGeometry args={[0.92, 0.12, 0.16]} />
          <meshStandardMaterial color="#d6dbe1" roughness={0.18} metalness={0.78} />
        </mesh>

        <mesh castShadow position={[0.08, 0.28, 0]}>
          <boxGeometry args={[1.05, 0.34, 0.34]} />
          <meshStandardMaterial color="#ff6a00" roughness={0.28} metalness={0.18} />
        </mesh>
        <mesh castShadow position={[0.68, 0.34, 0]} rotation={[0, 0, -0.22]}>
          <boxGeometry args={[0.82, 0.2, 0.24]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.35} />
        </mesh>
        <mesh castShadow position={[-0.34, 0.53, 0]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[0.82, 0.13, 0.32]} />
          <meshStandardMaterial color="#151515" roughness={0.36} metalness={0.25} />
        </mesh>
        <mesh castShadow position={[1.16, 0.26, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.46, 0.08, 0.2]} />
          <meshStandardMaterial color="#0ea5e9" roughness={0.24} metalness={0.5} />
        </mesh>
        <mesh castShadow position={[1.3, 0.42, 0]} rotation={[0, 0, 0.45]}>
          <boxGeometry args={[0.58, 0.055, 0.08]} />
          <meshStandardMaterial color="#151515" roughness={0.34} metalness={0.58} />
        </mesh>
        <mesh castShadow position={[-1.08, 0.34, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.62, 0.08, 0.16]} />
          <meshStandardMaterial color="#ff6a00" roughness={0.26} metalness={0.36} />
        </mesh>
      </group>
    </Float>
  );
}

export function BikeScene({ mouse }: SceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.7]}
      camera={{ position: [0, 1.8, 5.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={1.1} />
      <directionalLight
        castShadow
        position={[4, 5, 5]}
        intensity={2.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-4, 2.5, 3]} intensity={9} angle={0.28} penumbra={0.8} color="#0ea5e9" />
      <pointLight position={[2.5, 1.2, 1.4]} intensity={5} color="#ff6a00" />
      <BikeModel mouse={mouse} />
      <Terrain />
      <Sparkles count={90} speed={0.25} size={2.5} color="#ff6a00" opacity={0.22} scale={[7, 2.2, 2.8]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.16, 0]} receiveShadow>
        <planeGeometry args={[14, 10]} />
        <MeshReflectorMaterial
          blur={[320, 90]}
          resolution={512}
          mixBlur={0.65}
          mixStrength={0.18}
          roughness={0.82}
          depthScale={0.22}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.2}
          color="#f8fafc"
          metalness={0.04}
        />
      </mesh>
      <Environment preset="city" />
    </Canvas>
  );
}
