import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'
import { JSX } from 'react/jsx-runtime'

// ✅ Replace 'any' with proper type for Three.js group props
export default function Model(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF('/models/OutSidePlant.glb')
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} {...props}>
      <primitive object={gltf.scene} />
    </group>
  )
}
