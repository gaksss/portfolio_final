import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload } from "@react-three/drei";
import Loader from "../Loader";
import { AiOutlineFilePdf } from "react-icons/ai";

const Sphere = ({ imgUrl, normalMapUrl, scrollProgress }) => {
  const [colorMap, normalMap] = useTexture([imgUrl, normalMapUrl]);
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;

      // Ajustement des valeurs pour une position finale plus éloignée
      const targetX = 5 - scrollProgress * 6; // Augmenté de 4 à 6
      const targetY = 2 - scrollProgress * 2; // Augmenté de 1.5 à 2
      const targetScale = 1 + scrollProgress * 1.2; // Augmenté de 0.8 à 1.2
      const targetZ = -6 + scrollProgress * 6; // Augmenté de 4 à 6

      sphereRef.current.position.lerp(
        { x: targetX, y: targetY, z: targetZ },
        0.05
      );

      const currentScale = sphereRef.current.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * 0.05;
      sphereRef.current.scale.setScalar(newScale);
    }
  });

  return (
    <mesh
      ref={sphereRef}
      castShadow
      receiveShadow
      scale={1}
      position={[5, 2, -6]}
    >
      <sphereGeometry args={[2, 200, 200]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        normalScale={[0.3, 0.3]}
      />
    </mesh>
  );
};

const SphereCanvas = ({ icon, normalMap }) => {
  const [showCV, setShowCV] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 300;
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isAnimationComplete) {
        e.preventDefault();
        const delta = e.deltaY;
        // Réduit la sensibilité du scroll
        const scrollSensitivity = 0.5;
        const currentScroll = lastScrollY.current + delta * scrollSensitivity;
        const newScroll = Math.max(0, Math.min(currentScroll, scrollThreshold));
        lastScrollY.current = newScroll;

        const progress = newScroll / scrollThreshold;
        setScrollProgress(progress);

        // Arrête l'animation à 0.6 au lieu de 1
        if (progress >= 0.6 && !showCV) {
          setShowCV(true);
          setIsAnimationComplete(true);
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000);
        }
      }
    };

    // Bloquer le scroll initialement
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      document.body.style.overflow = "auto";
    };
  }, [isAnimationComplete, showCV]);

  return (
    <div ref={containerRef} className="h-screen sticky top-0">
      <Canvas
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [10, 5, 10], fov: 45 }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Sphere
            imgUrl={icon}
            normalMapUrl={normalMap}
            scrollProgress={scrollProgress}
          />
        </Suspense>
        <Preload all />
      </Canvas>

      {showCV && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(10, 10, 10, 0.95)", // Fond sombre
            padding: "30px 40px",
            borderRadius: "20px",
            zIndex: 1000,
            boxShadow: "0 0 20px rgba(107, 33, 168, 0.3)", // Ombre violette
            border: "1px solid rgba(107, 33, 168, 0.2)", // Bordure subtile
          }}
        >
          <h3 className="text-[#d9d9d9] font-poppins text-[24px] mb-4 uppercase tracking-wider">
            Mon CV
          </h3>
          <a
            href="https://www.canva.com/design/DAE8p9UxHNk/m-WOpEThH5ySSqZI7yygWg/view?utm_content=DAE8p9UxHNk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe9a44b6b8"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#6b21a8] hover:bg-[#7c3acd] 
              transition-all duration-300 px-6 py-3 rounded-xl
              text-[#d9d9d9] font-poppins text-[16px] tracking-wide"
          >
            <AiOutlineFilePdf className="text-[20px] group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              Voir le CV
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default SphereCanvas;
