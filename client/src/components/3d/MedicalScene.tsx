// src/components/3d/MedicalScene.tsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating Sphere (can represent a pill or molecule)
const FloatingSphere = ({ position, color, speed = 1 }: { 
  position: [number, number, number]
  color: string
  speed?: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
        />
      </mesh>
    </Float>
  )
}

// Heart Shape (for healthcare theme)
const Heart = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05)
    }
  })

  // Create heart shape
  const heartShape = new THREE.Shape()
  const x = 0, y = 0
  heartShape.moveTo(x + 0.5, y + 0.5)
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y)
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7)
  heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9)
  heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7)
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y)
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5)

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  }

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} rotation={[Math.PI, 0, 0]} position={[0, 0, 0]} scale={0.8}>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshStandardMaterial color="#00A6A6" metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  )
}

// DNA Helix
const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  const spheres = []
  const numSpheres = 20
  
  for (let i = 0; i < numSpheres; i++) {
    const t = (i / numSpheres) * Math.PI * 4
    const y = (i / numSpheres) * 4 - 2
    
    // First strand
    spheres.push(
      <mesh key={`a-${i}`} position={[Math.cos(t) * 0.5, y, Math.sin(t) * 0.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#00A6A6" />
      </mesh>
    )
    
    // Second strand
    spheres.push(
      <mesh key={`b-${i}`} position={[Math.cos(t + Math.PI) * 0.5, y, Math.sin(t + Math.PI) * 0.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#6366F1" />
      </mesh>
    )
    
    // Connecting bars (every 4th sphere)
    if (i % 4 === 0) {
      const midX = 0
      const midZ = 0
      spheres.push(
        <mesh key={`bar-${i}`} position={[midX, y, midZ]} rotation={[0, t, 0]}>
          <boxGeometry args={[1, 0.05, 0.05]} />
          <meshStandardMaterial color="#E5E7EB" />
        </mesh>
      )
    }
  }

  return (
    <group ref={groupRef}>
      {spheres}
    </group>
  )
}

// Main Scene Component
export const MedicalScene: React.FC<{ type?: 'heart' | 'dna' | 'molecules' }> = ({ 
  type = 'heart' 
}) => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00A6A6" />
        
        {type === 'heart' && <Heart />}
        {type === 'dna' && <DNAHelix />}
        {type === 'molecules' && (
          <>
            <FloatingSphere position={[-1.5, 0.5, 0]} color="#00A6A6" speed={1} />
            <FloatingSphere position={[1.5, -0.5, 0]} color="#6366F1" speed={0.8} />
            <FloatingSphere position={[0, 1, -1]} color="#10B981" speed={1.2} />
            <FloatingSphere position={[0, -1, 1]} color="#F59E0B" speed={0.6} />
          </>
        )}
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}