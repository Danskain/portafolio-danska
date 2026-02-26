"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const ApolloShip = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materials = useLoader(MTLLoader as any, "/Apollo/apollo.mtl");
  const obj = useLoader(
    OBJLoader as any,
    "/Apollo/apollo.obj",
    (loader: any) => {
      if (materials.preload) {
        materials.preload();
      }
      if (loader.setMaterials) {
        loader.setMaterials(materials);
      }
    }
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
      groupRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef} scale={0.6} position={[0, -0.05, 0]}>
      <primitive object={obj} />
    </group>
  );
};

const SatelliteModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materials = useLoader(MTLLoader as any, "/Satellite/Satellite.mtl");
  const baseTexture = useLoader(
    THREE.TextureLoader,
    "/Satellite/Textures/satellite_Satélite_BaseColor.jpg"
  );
  const obj = useLoader(
    OBJLoader as any,
    "/Satellite/Satellite.obj",
    (loader: any) => {
      if (materials.preload) {
        materials.preload();
      }
      if (loader.setMaterials) {
        loader.setMaterials(materials);
      }
    }
  );

  useEffect(() => {
    if (!obj) return;
    obj.traverse((child: any) => {
      if (child.isMesh) {
        child.material.map = baseTexture;
        child.material.needsUpdate = true;
      }
    });
  }, [obj, baseTexture]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
      groupRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef} scale={0.19} position={[0, -0.09, 0]}>
      <primitive object={obj} />
    </group>
  );
};

export const SpaceshipCanvas = () => {
  return (
    <div className="w-full h-56 md:h-64">
      <Canvas camera={{ position: [0, 0.2, 3], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <ApolloShip />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const AstronautCanvas = () => {
  return (
    <div className="w-full h-56 md:h-64">
      <Canvas camera={{ position: [0, 0.2, 3], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <SatelliteModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
