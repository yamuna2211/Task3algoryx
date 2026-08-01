import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  Sparkles,
  Center,
  useGLTF,
} from "@react-three/drei";
import { useRef } from "react";

function RobotModel() {
  const { scene } = useGLTF("/models/Robot.glb");
  const robotRef = useRef();

  useFrame((state, delta) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <Center>
        <primitive
          ref={robotRef}
          object={scene}
          scale={1.5}
          position={[-0.3, -1.0, 0]}
          rotation={[0, Math.PI, 0]}
        />
      </Center>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="canvas-shell">
      <Canvas
        shadows
        camera={{
          position: [0, 1, 8],
          fov: 40,
        }}
      >
        {/* Background */}
        <color attach="background" args={["#0b1220"]} />

        {/* Lights */}
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={3}
          castShadow
        />

        <pointLight
          position={[5, 2, 5]}
          intensity={3}
          color="#60a5fa"
        />

        <pointLight
          position={[-5, 2, 5]}
          intensity={3}
          color="#a855f7"
        />

        <spotLight
          position={[0, 8, 5]}
          angle={0.4}
          intensity={2}
          penumbra={1}
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Robot */}
        <RobotModel />

        {/* Sparkles */}
        <Sparkles
          count={150}
          scale={8}
          size={2}
          speed={0.4}
          opacity={1}
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/Robot.glb");