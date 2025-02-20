import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Preload } from '@react-three/drei';
import Loader from '../Loader';

const Cube = ({ imgUrl }) => {
  const [texture] = useTexture([imgUrl]);
  const cubeRef = useRef(); // Référence à l'objet 3D

  // Animation : Rotation sur l'axe Y à chaque frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={cubeRef} castShadow receiveShadow scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const CubeCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Cube imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;
