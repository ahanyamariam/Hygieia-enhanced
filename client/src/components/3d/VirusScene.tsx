// src/components/3d/VirusScene.tsx
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

const Virus = ({ position, scale = 1, speed = 1, color = "#ff4444" }: {
  position: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  // Create spikes
  const spikes = useMemo(() => {
    const items = []
    for (let i = 0; i < 20; i++) {
      const phi = Math.acos(-1 + (2 * i) / 20)
      const theta = Math.sqrt(20 * Math.PI) * phi
      const x = Math.cos(theta) * Math.sin(phi)
      const y = Math.sin(theta) * Math.sin(phi)
      const z = Math.cos(phi)
      items.push({ position: [x, y, z] as [number, number, number], rotation: [phi, theta, 0] as [number, number, number] })
    }
    return items
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed
    }
  })

  return (
    <Float speed={2 * speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />

          {spikes.map((spike, i) => (
            <mesh key={i} position={spike.position} rotation={spike.rotation}>
              <coneGeometry args={[0.1, 0.5, 8]} />
              <meshStandardMaterial color={color} />
            </mesh>
          ))}
        </mesh>
      </group>
    </Float>
  )
}

const ParticleField = ({ count = 50 }) => {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.4} />
    </points>
  )
}

export const VirusScene: React.FC<{ showParticles?: boolean, showOrbitingViruses?: boolean }> = ({
  showParticles = true,
  showOrbitingViruses = true
}) => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0000" />

        <Virus position={[0, 0, 0]} scale={1.5} color="#00A6A6" speed={1} />

        {showOrbitingViruses && (
          <>
            <Virus position={[-3, 2, -2]} scale={0.5} color="#6366F1" speed={0.8} />
            <Virus position={[3, -2, -1]} scale={0.4} color="#F59E0B" speed={1.2} />
          </>
        )}

        {showParticles && <ParticleField count={100} />}

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}