import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

/**
 * Scene3D — escena 3D con React Three Fiber.
 * Esfera con material distorsionado, emissive cálido (visible aunque la iluminación
 * o el renderer por software fallen) que flota y rota.
 * Demuestra: R3F, drei (Float/MeshDistortMaterial), three.js, WebGL.
 *
 * Props: color {string}; interactive {boolean}
 */
export default function Scene3D({ color = "#c8743c", interactive = true }) {
  return (
    <div className="scene3d">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, preserveDrawingBuffer: true, toneMapping: THREE.NoToneMapping }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 2, 3]} intensity={3} color="#ffd9a0" />
          <directionalLight position={[-3, -1, 2]} intensity={1.4} color="#ffb066" />
          <pointLight position={[-2, 3, -3]} intensity={6} color="#9ad0ff" />
          <pointLight position={[2, -3, -2]} intensity={5} color="#ff8a3c" />
          <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
            <mesh>
              <icosahedronGeometry args={[1, 12]} />
              <MeshDistortMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.35}
                distort={0.4}
                speed={1.8}
                roughness={0.3}
                metalness={0.1}
              />
            </mesh>
          </Float>
          {interactive && (
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.9} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
