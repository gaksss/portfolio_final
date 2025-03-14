import React, { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Satellite = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/Satellite.glb");

  const customMaterials = useMemo(
    () => ({
      _SO_CHROME_Gold: new THREE.MeshStandardMaterial({
        color: "#FFD700", // Or
        metalness: 1,
        roughness: 0.2,
      }),
      _SO_FOIL: new THREE.MeshStandardMaterial({
        color: "#787878", // Argent
        metalness: 0.8,
        roughness: 0.3,
      }),
      _SO_White_Metal: new THREE.MeshStandardMaterial({
        color: "#FFFFFF",
        metalness: 0.5,
        roughness: 0.5,
      }),
      _SO_BROWN: new THREE.MeshStandardMaterial({
        color: "#8B4513", // Marron
        metalness: 0.3,
        roughness: 0.7,
      }),
      _SO_Solar_pannel: new THREE.MeshStandardMaterial({
        color: "#000080", // Bleu foncé
        metalness: 0.9,
        roughness: 0.1,
      }),
      _SO_DARK_GREY: new THREE.MeshStandardMaterial({
        color: "#363636", // Gris foncé
        metalness: 0.9,
        roughness: 0.1,
      }),
      _SO_CHROME: new THREE.MeshStandardMaterial({
        color: "#C0C0C0",
        metalness: 0.9,
        roughness: 0.1,
      }),
      _SO_Shield: new THREE.MeshStandardMaterial({
        color: "#404040",
        metalness: 0.5,
        roughness: 0.5,
      }),
      _SO_Metal_Shield: new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.7,
        roughness: 0.3,
      }),
      _SO_Shield_Fabric: new THREE.MeshStandardMaterial({
        color: "#404040",
        metalness: 0.3,
        roughness: 0.7,
      }),
      _SO_WING_CABLES: new THREE.MeshStandardMaterial({
        color: "#303030",
        metalness: 0.5,
        roughness: 0.5,
      }),
      _SO_WING_SOLAR_PANNEL_WHITE: new THREE.MeshStandardMaterial({
        color: "#FFFFFF",
        metalness: 0.5,
        roughness: 0.5,
      }),
      // Ajoutez les matériaux manquants pour LENS
      "13 - Default": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "14 - Default": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "14 - Default2": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "16 - Default2": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "16 - Default3": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "16 - Default4": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "17 - Default": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
      "19 - Default": new THREE.MeshStandardMaterial({
        color: "#808080",
        metalness: 0.5,
        roughness: 0.5,
      }),
    }),
    []
  );

  // Optimisez les événements de pointeur
  const pointerEvents = useMemo(
    () => ({
      onPointerOver: (e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
        props.onPointerOver?.(e);
      },
      onPointerOut: (e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
        props.onPointerOut?.(e);
      },
      onClick: (e) => {
        e.stopPropagation();
        props.onClick?.(e);
      },
    }),
    [props.onPointerOver, props.onPointerOut, props.onClick]
  );

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onClick={props.onClick}
      onPointerOver={props.onPointerOver}
      onPointerOut={props.onPointerOut}
    >
      
      <mesh
        name="_SO_FOIL"
        castShadow
        receiveShadow
        geometry={nodes._SO_FOIL.geometry}
        material={customMaterials._SO_FOIL}
        position={[0.752, 2.292, 0.11]}
        scale={0.006}
      />
  
      <mesh
        name="_SO_WHITE_Matte"
        castShadow
        receiveShadow
        geometry={nodes._SO_WHITE_Matte.geometry}
        material={customMaterials._SO_WHITE_Matte}
        position={[0.794, 2.952, -0.277]}
        scale={0.006}
      />
      
      
      <mesh
        name="_SO_Shield_MAIN"
        castShadow
        receiveShadow
        geometry={nodes._SO_Shield_MAIN.geometry}
        material={customMaterials._SO_FOIL}
        position={[-0.181, -0.168, -1.148]}
        scale={0.006}
      />
      <mesh
        name="_SO_MAIN_BODY"
        castShadow
        receiveShadow
        geometry={nodes._SO_MAIN_BODY.geometry}
        material={customMaterials._SO_FOIL}
        position={[-0.181, -0.168, -1.148]}
        scale={0.006}
      />  
      <mesh
        name="_SO_Solar_pannel001"
        castShadow
        receiveShadow
        geometry={nodes._SO_Solar_pannel001.geometry}
        material={customMaterials._SO_Solar_pannel}
        position={[0.848, 1.478, -1.131]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.006}
      />
      
      <group name="_SO_WING_A" position={[5.734, 1.544, -0.02]} scale={0.01}>
      
        <mesh
          name="_SO_WING_BROWN"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_BROWN.geometry}
          material={customMaterials._SO_BROWN}
          position={[-140.503, 0, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_CABLES"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CABLES.geometry}
          material={customMaterials._SO_WING_CABLES}
          position={[342.641, -45.787, 1.873]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        
        <mesh
          name="_SO_WING_CHROME_Gold"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME_Gold.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[0.1, 57.261, 1.873]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          name="_SO_WING_CHROME_GOLD"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME_GOLD.geometry}
          material={customMaterials._SO_CHROME}
          position={[-478.101, -0.073, 0]}
        />
        <mesh
          name="_SO_WING_DARK"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_DARK.geometry}
          material={customMaterials._SO_BROWN}
          position={[-392.32, 2.154, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
       
        
        <mesh
          name="_SO_WING_White_Metal"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_White_Metal.geometry}
          material={customMaterials._SO_White_Metal}
          position={[-392.32, 2.154, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="_SO_WING_B"
        position={[-6.106, 1.544, -0.02]}
        rotation={[Math.PI, 0, 0]}
        scale={-0.01}
      >
        
        <mesh
          name="_SO_WING_BROWN001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_BROWN001.geometry}
          material={customMaterials._SO_BROWN}
          position={[-140.503, 0, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        {/* <mesh
          name="_SO_WING_CABLES001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CABLES001.geometry}
          material={customMaterials._SO_WING_CABLES}
          position={[342.641, -45.787, 1.873]}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
        
        <mesh
          name="_SO_WING_CHROME_GOLD001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME_GOLD001.geometry}
          material={customMaterials._SO_CHROME}
          position={[-478.101, -0.073, 0]}
        />
        <mesh
          name="_SO_WING_CHROME_Gold001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME_Gold001.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[0.1, 57.261, 1.873]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1}
        />
        <mesh
          name="_SO_WING_DARK001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_DARK001.geometry}
          material={customMaterials._SO_BROWN}
          position={[-392.32, 2.154, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
       
       
        <mesh
          name="_SO_WING_White_Metal001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_White_Metal001.geometry}
          material={customMaterials._SO_White_Metal}
          position={[-392.32, 2.154, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
});
export default Satellite;

useGLTF.preload("/Satellite.glb");
