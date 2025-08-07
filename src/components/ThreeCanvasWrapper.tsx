'use client'  // ✅ This makes it a Client Component

import dynamic from 'next/dynamic'

// Load the 3D component without SSR
const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), { ssr: false })

export default function ThreeCanvasWrapper() {
  return <ThreeCanvas />
}
