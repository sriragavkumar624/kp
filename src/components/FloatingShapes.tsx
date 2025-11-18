import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedShape = ({ geometry, position, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B721FF" />
      
      <AnimatedShape 
        geometry={<octahedronGeometry args={[1, 0]} />} 
        position={[-2, 0, 0]} 
        color="#00F0FF" 
      />
      <AnimatedShape 
        geometry={<torusGeometry args={[0.7, 0.3, 16, 100]} />} 
        position={[2, 0, 0]} 
        color="#B721FF" 
      />
      <AnimatedShape 
        geometry={<sphereGeometry args={[0.8, 32, 32]} />} 
        position={[0, 2, 0]} 
        color="#00FFD1" 
      />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
