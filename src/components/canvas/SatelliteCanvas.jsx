import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Satellite } from "./Satellite";
import Loader from "../Loader";
import { AiOutlineFilePdf } from 'react-icons/ai'; // Ajouter cette importation

const AnimatedSatellite = ({ scrollProgress, isAnimationComplete }) => {
  const satelliteRef = useRef();

  useFrame(() => {
    if (satelliteRef.current) {
      satelliteRef.current.rotation.z += 0.005;

      // Calculer la position en fonction du scroll
      const targetX = 5 - (scrollProgress * 1); // Déplacement sur X
      const targetY = 2 + (scrollProgress * 0.5); // Léger déplacement sur Y
      const targetZ = -6 + (scrollProgress * 10); // Rapprochement vers la caméra

      satelliteRef.current.position.lerp(
        { x: targetX, y: targetY, z: targetZ },
        0.1
      );
    }
  });

  return (
    <Satellite
      ref={satelliteRef}
      scale={0.5}
      position={[5, 2, -6]}
      rotation={[0, 0, 0]}
      // Ajoutez ces props pour améliorer la détection
      raycast={(raycaster, intersects) => {
        // Augmentez la précision du raycasting
        raycaster.params.Line.threshold = 0.1;
        raycaster.params.Points.threshold = 0.1;
      }}
    />
  );
};

const SatelliteCanvas = () => {
  const [showCV, setShowCV] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [canScroll, setCanScroll] = useState(false); // Nouvel état
  const scrollThreshold = 300;
  const lastScrollY = useRef(0);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isAnimationComplete) {
        e.preventDefault();
        
        const delta = e.deltaY;
        const currentScroll = lastScrollY.current + delta;
        
        const newScroll = Math.max(0, Math.min(currentScroll, scrollThreshold));
        lastScrollY.current = newScroll;

        const progress = newScroll / scrollThreshold;
        setScrollProgress(progress);

        if (progress >= 1 && !showCV) {
          setShowCV(true);
          setIsAnimationComplete(true);
          // Ajouter un délai avant de permettre le scroll
          setTimeout(() => {
            setCanScroll(true);
            document.body.style.overflow = 'auto';
          }, 2000); // Délai de 2 secondes, ajustez selon vos besoins
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowCV(false);
        setIsAnimationComplete(false);
        setCanScroll(false); // Réinitialiser l'état
        document.body.style.overflow = 'hidden';
        lastScrollY.current = 0;
        setScrollProgress(0);
      }

      // Faire disparaître le Canvas quand on sort de la section hero
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const opacity = Math.max(0, Math.min(1, heroRect.bottom / heroRect.height));
        if (heroRef.current.style) {
          heroRef.current.style.opacity = opacity;
        }
      }
    };

    // Bloquer initialement le scroll
    if (!canScroll) {
      document.body.style.overflow = 'hidden';
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimationComplete, showCV, canScroll]); // Ajouter canScroll aux dépendances

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Section Hero avec le Canvas */}
      <div
        ref={heroRef}
        style={{
          height: "100vh",
          position: "relative",
          transition: "opacity 0.3s ease"
        }}
      >
        <Canvas
          camera={{ position: [10, 5, 10], fov: 45 }}
          style={{
            width: "100%",
            height: "100%",
            position: isAnimationComplete ? "absolute" : "fixed",
            top: 0,
            left: 0,
          }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <AnimatedSatellite 
              scrollProgress={scrollProgress} 
              isAnimationComplete={isAnimationComplete}
            />
            <OrbitControls 
              enableZoom={false} 
              autoRotate={false}
              enabled={isAnimationComplete}
            />
          </Suspense>
        </Canvas>

        {/* CV Modal */}
        {showCV && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              zIndex: 1000,
              minWidth: "300px",
              textAlign: "center",
              animation: "fadeIn 0.3s ease-out",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                color: "#1f1f1f",
                fontFamily: "'SF Pro Display', sans-serif",
              }}
            >
              <AiOutlineFilePdf 
                style={{ 
                  fontSize: "2.5rem", 
                  marginBottom: "10px",
                  color: "#6b21a8"
                }} 
              />
              <h3 style={{ 
                margin: "0 0 10px 0",
                fontSize: "1.5rem",
                fontWeight: "600"
              }}>
                Mon CV
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "20px"
              }}>
                Découvrez mon parcours professionnel
              </p>
            </div>
            <a
              href="https://www.canva.com/design/DAE8p9UxHNk/m-WOpEThH5ySSqZI7yygWg/view?utm_content=DAE8p9UxHNk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe9a44b6b8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "12px 25px",
                backgroundColor: "#6b21a8",
                borderRadius: "8px",
                display: "inline-block",
                fontWeight: "500",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                boxShadow: "0 4px 15px rgba(107, 33, 168, 0.2)",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(107, 33, 168, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(107, 33, 168, 0.2)";
              }}
            >
              <AiOutlineFilePdf style={{ marginRight: "8px", verticalAlign: "middle" }} />
              Voir le CV
            </a>
          </div>
        )}
      </div>

      {/* Contenu scrollable après la section hero */}
      <div style={{ 
        position: "relative",
        zIndex: 2,
        background: "var(--primary-color)",
        minHeight: "100vh"
      }}>
        {/* Votre contenu de page ici */}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -48%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
          }
        `}
      </style>
    </div>
  );
};

export default SatelliteCanvas;
