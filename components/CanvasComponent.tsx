// components/CanvasComponent.tsx
"use client"
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3 } from "three";
import { useRef } from 'react';
const Torch = ({vec = new THREE.Vector3(), ...props})=>{
  const Light = useRef<THREE.SpotLight>(null)
return <spotLight ref={Light}
castShadow
penumbra={1}
distance={10}
angle={0.35}
intensity={3}
{...props}
/>

}


const CanvasComponent: React.FC = () => {


  const { scene } = useThree(); // Get the Three.js scene instance

  const addCube = () => {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.set(0, 0, 0); // Set the initial position of the cube
    scene.add(cubeMesh); // Add the cube to the scene
  };

  return (
    <>
     
    
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[10, 15, 10]} angle={0.2} penumbra={1} />

      {/* OrbitControls for camera manipulation */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      {/* 3D objects or shapes will be rendered here */}
      <group>
        {/* Add 3D shapes here */}
      </group>

      {/* Button to add a cube */}
      <button onClick={addCube}>Add Cube</button>
      </>
  );
};

export default CanvasComponent;
