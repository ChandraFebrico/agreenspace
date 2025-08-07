'use client'  // ✅ This makes it a Client Component

import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


// Dynamic import to prevent SSR issues with Three.js
const Model3 = dynamic(() => import('../components/Model3'), { ssr: false })

export default function ThreeCanvasWrapper2() {
    return (
        <div style={{ width: '41vw', height: '41vh' }}>
            <Canvas camera={{ position: [10, 4, 10], fov: 45 }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Model3 position={[-1.5, 0, 0]} scale={0.5} />
                <Model3 />
                <OrbitControls enableZoom={false} enablePan={false}      // Disable panning (dragging up/down/left/right)
                    maxPolarAngle={Math.PI / 2} // Optional: Limit vertical rotation
                    minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    )
}
