'use client'  // ✅ This makes it a Client Component

import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


// Dynamic import to prevent SSR issues with Three.js
const Model3 = dynamic(() => import('../components/Model'), { ssr: false })


export default function ThreeCanvasWrapper() {
  return (
    <div style={{ width: '35vw', height: '60vh', zIndex: '10' }}>
      <Canvas camera={{ position: [0, 10, 20], fov: 48 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[20, 20, 5]} intensity={1} />
        <Model3 position={[-1, 0, 1]} scale={0.8} />
        <Model3 />
        <OrbitControls enableZoom={false}      // Disable panning (dragging up/down/left/right)
                            maxPolarAngle={Math.PI / 3} // Optional: Limit vertical rotation
                            minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  )
}
