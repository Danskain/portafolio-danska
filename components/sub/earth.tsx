"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load textures from remote URLs (using Three.js examples textures)
  const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
  ]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group>
        {/* Earth Sphere */}
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhongMaterial 
                map={colorMap}
                normalMap={normalMap}
                specularMap={specularMap}
                specular={new THREE.Color(0x333333)}
                shininess={15}
            />
        </mesh>
        
        {/* Atmosphere Glow */}
        <mesh scale={[1.02, 1.02, 1.02]}>
             <sphereGeometry args={[1, 64, 64]} />
             <meshBasicMaterial
                color="#4db2ff"
                transparent
                opacity={0.1}
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
             />
        </mesh>
    </group>
  );
};

const LoadingFallback = () => {
    return (
        <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#1E3F66" wireframe />
        </mesh>
    )
}

export const EarthCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4db2ff" />
        <Suspense fallback={<LoadingFallback />}>
            <group position={[0, 0.1, 0]}>
                <Earth />
            </group>
        </Suspense>
      </Canvas>
    </div>
  );
};
