
import React from 'react';
import * as THREE from 'three';

interface AquariumProps {
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  glassThickness: number;
}

const AquariumModel: React.FC<AquariumProps> = ({ dimensions, glassThickness }) => {
  const { width, height, depth } = dimensions;
  
  return (
    <group>
      {/* Water */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width - 0.1, height - 0.1, depth - 0.1]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          transparent
          opacity={0.3}
          transmission={0.9}
          roughness={0}
          metalness={0}
          ior={1.33}
        />
      </mesh>

      {/* Glass Panels */}
      {/* Front */}
      <mesh position={[0, 0, depth/2]}>
        <boxGeometry args={[width, height, glassThickness]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -depth/2]}>
        <boxGeometry args={[width, height, glassThickness]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Left */}
      <mesh position={[-width/2, 0, 0]}>
        <boxGeometry args={[glassThickness, height, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Right */}
      <mesh position={[width/2, 0, 0]}>
        <boxGeometry args={[glassThickness, height, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, -height/2, 0]}>
        <boxGeometry args={[width, glassThickness, depth]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          transmission={0.98}
          roughness={0}
          metalness={0}
          ior={1.52}
        />
      </mesh>

      {/* Substrate */}
      <mesh position={[0, -height/2 + 0.1, 0]}>
        <boxGeometry args={[width - 0.2, 0.2, depth - 0.2]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default AquariumModel;
