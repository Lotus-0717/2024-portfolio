"use client";

import { Canvas } from "@react-three/fiber";
import Cylinder from "./Cylinder";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function Scene() {
  const orbitControlsRef = useRef(null);
  const radius = 1.5; // 圓柱體的半徑
  const height = 0.8; // 圓柱體的高度
  const segments = 10; // 側面數量

  const handleMeshClick = (index: number) => {
    if (orbitControlsRef.current) {
      const deg = (360 / segments) * index;
      (orbitControlsRef.current as any).setAzimuthalAngle(
        THREE.MathUtils.degToRad(-deg),
      );
    }
  };
  return (
    <div className="fixed -z-10 h-screen w-full">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <OrbitControls
          ref={orbitControlsRef}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        ></OrbitControls>
        <Environment preset="city" />
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 6]}
          fov={60}
          zoom={0.9}
        />
        <Cylinder
          onMeshClick={handleMeshClick}
          radius={radius}
          height={height}
          segments={segments}
        />
      </Canvas>
    </div>
  );
}

export default Scene;
