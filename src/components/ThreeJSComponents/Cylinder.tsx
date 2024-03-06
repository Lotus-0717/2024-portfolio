"use client";

import { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import data from "../../data.json";
interface CylinderProps {
  radius: number;
  height: number;
  segments: number;
  onMeshClick: (index: number) => void;
}

function Cylinder({ onMeshClick, radius, height, segments }: CylinderProps) {
  const angleStep = (Math.PI * 2) / segments; // 每個側面的角度步長
  const [hovered, setHovered] = useState(false);
  const cylinderRef = useRef<THREE.Group>(null);
  const router = useRouter();
  const textures = useLoader(
    THREE.TextureLoader,
    data ? data.map((item) => `/case-img/${item.name}/cover.jpg`) : [],
  );

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  return (
    <group ref={cylinderRef} rotation={[0, THREE.MathUtils.degToRad(-90), 0]}>
      {Array.from({ length: segments }).map((_, index) => {
        const angle = angleStep * index;
        const x = Math.cos(angle) * radius * 2;
        const z = Math.sin(angle) * radius * 2;
        return (
          <mesh
            key={index}
            position={[x, 0, z]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            onClick={(event) => {
              event.stopPropagation();
              onMeshClick(index);
              setTimeout(() => {
                router.push(`/works/${index}`);
              }, 1000);
            }}
            onPointerOver={() => {
              setHovered(true);
            }}
            onPointerOut={() => setHovered(false)}
          >
            <planeGeometry args={[radius, height]} />
            <meshStandardMaterial
              map={textures[index]}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default Cylinder;
