import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ThreeScene = () => {
  // Load the GLTF model
  let scene;
  try {
    const gltf = useGLTF('/model/scene.gltf');
    scene = gltf.scene;
  } catch (error) {
    console.error("Error loading GLTF model:", error);
    return <div>Error loading model</div>;
  }

  return (
    <Suspense fallback={<div>Loading 3D Scene...</div>}>
      <Canvas
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        {/* Lighting for the scene */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* Render the GLTF model */}
        <primitive object={scene} position={[0, -1, 0]} scale={[2, 2, 2]} />

        {/* Orbit controls for interaction */}
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
};

export default ThreeScene;
