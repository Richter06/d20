import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'

function Die() {
  const mesh = useRef(null)

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.22
    mesh.current.rotation.y += delta * 0.34
  })

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.35}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial color="#a94f18" roughness={0.38} metalness={0.5} flatShading />
      </mesh>
      <mesh rotation={[0.1, 0.4, 0]}>
        <icosahedronGeometry args={[1.72, 1]} />
        <meshBasicMaterial color="#d96b28" wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  )
}

export default function D20Scene() {
  return (
    <div className="d20-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 34 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 5]} intensity={3.2} color="#f1a35a" />
        <pointLight position={[-3, -2, 3]} intensity={8} distance={8} color="#7a250c" />
        <Die />
      </Canvas>
    </div>
  )
}