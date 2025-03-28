import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shaq, earth, earthNight, worldmap, iss } from "../assets";
import { useState, useEffect } from "react";
import { CubeCanvas } from "./canvas";
import { moonMap, moonNormalMap } from "../assets";
import SphereCanvas from "./canvas/Sphere";


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <>
    
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={earth}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Modifiez ce conteneur */}
      
        {/* Masquer complètement l'effet sur mobile */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 60%, transparent 100%)`,
            }}
          >
            
            <img
              src={earthNight}
              alt="hover background"
              className="w-full h-full object-cover"
            />
          </div>
          
        )}
          <div className="absolute top-0 right-0 w-[100vw] h-[100vh]">
          <SphereCanvas icon={moonMap} normalMap={moonNormalMap} />
          
         
          
        </div>
      </div>
      <section
        className="flex sm:flex-row flex-col w-full h-screen mx-auto 
         overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-[#d9d9d9] font-poppins uppercase`}
            >
              <span
                className="sm:text-[#FFFFFF] sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Clément
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#d9d9d9]`}>
              Developpeur web <br className="sm:block hidden" />
              et web mobile
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
      </section>
    </>
  );
};

export default Hero;
