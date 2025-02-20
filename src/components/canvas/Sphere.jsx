import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload } from "@react-three/drei";
import Loader from "../Loader";

const Sphere = ({ imgUrl, normalMapUrl }) => {
  const [colorMap, normalMap] = useTexture([imgUrl, normalMapUrl]);
  const sphereRef = useRef(); // Référence à l'objet 3D

  // Animation : Rotation sur l'axe Y à chaque frame
  // useFrame(() => {
  //   if (sphereRef.current) {
  //     sphereRef.current.rotation.y += 0.01;
  //     sphereRef.current.rotation.x += 0.01;
  //     sphereRef.current.rotation.z += 0.005;
  //   }
  // });

  return (
    <mesh ref={sphereRef} castShadow receiveShadow scale={1}>
      <sphereGeometry args={[2, 200, 200]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={[0.5, 0.5]}
      />
    </mesh>
  );
};

const SphereCanvas = ({ icon, normalMap }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      style={{
        position: "absolute",
        top: "50px", // Ajustez cette valeur pour déplacer vers le haut
        right: "50px", // Ajustez cette valeur pour déplacer vers la droite
        width: "400px", // Ajustez la taille
        height: "400px",
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={false} // Désactive le déplacement
          enableRotate={true}
          minPolarAngle={Math.PI / 2.5} // Limite la rotation verticale
          maxPolarAngle={Math.PI / 1.5}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Sphere imgUrl={icon} normalMapUrl={normalMap} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SphereCanvas;
