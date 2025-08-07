import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'

export default function Model(props: any) {
  const gltf = useGLTF('/models/House plant.glb')
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // rotate around Y axis
    }
  })

  return (
    <group ref={ref} {...props}>
      <primitive object={gltf.scene} />
    </group>
  )
}
