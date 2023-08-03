"use client"
// import Image from 'next/image'
import { OrbitControls } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import React from 'react';
// import CanvasComponent from '../../components/CanvasComponent';




export default function Home() {
  return (
      <main>
      <Canvas 
       style={{ height: '100vh' }}
       camera={{ position: [0, 5, 10], fov: 60 }}
       gl={{ antialias: true }}
      >
      <mesh>
    
          <OrbitControls 
          enableZoom={false}
          enableDamping
          maxPolarAngle={2}
          minAzimuthAngle={-Math.PI * 0.5}
          maxAzimuthAngle={Math.PI * 0.5}x/>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <boxGeometry/>


          
      </mesh>
        </Canvas>
        {/* <CanvasComponent/> */}
      </main>
  )
}
