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
        name="_SO_bolts"
        castShadow
        receiveShadow
        geometry={nodes._SO_bolts.geometry}
        material={customMaterials._SO_CHROME_Gold}
        position={[1.008, 2.219, -2.353]}
        scale={0.006}
      />
      <mesh
        name="_SO_TAIL"
        castShadow
        receiveShadow
        geometry={nodes._SO_TAIL.geometry}
        material={customMaterials._SO_FOIL}
        position={[0.056, 2.939, 0.389]}
        scale={0.005}
      />
      <mesh
        name="_SO_White_Metal"
        castShadow
        receiveShadow
        geometry={nodes._SO_White_Metal.geometry}
        material={customMaterials._SO_White_Metal}
        position={[2.312, -0.19, -1.55]}
        rotation={[0, 0, 0.133]}
        scale={0.004}
      />
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
        name="_SO_BROWN"
        castShadow
        receiveShadow
        geometry={nodes._SO_BROWN.geometry}
        material={customMaterials._SO_BROWN}
        position={[0.614, 2.39, -0.027]}
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
        name="_SO_CHROME"
        castShadow
        receiveShadow
        geometry={nodes._SO_CHROME.geometry}
        material={customMaterials._SO_CHROME}
        position={[1.033, 2.768, -0.287]}
        scale={0.006}
      />
      <mesh
        name="_SO_Structure_Shield"
        castShadow
        receiveShadow
        geometry={nodes._SO_Structure_Shield.geometry}
        material={customMaterials._SO_Metal_Shield}
        position={[1.007, 2.219, -2.552]}
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
        name="_SO_BOLTS_C"
        castShadow
        receiveShadow
        geometry={nodes._SO_BOLTS_C.geometry}
        material={customMaterials._SO_CHROME_Gold}
        position={[0.935, 0.649, 0.004]}
        rotation={[Math.PI / 2, 0, 0.611]}
        scale={0.008}
      />
      <mesh
        name="SO_METAL_IDLE"
        castShadow
        receiveShadow
        geometry={nodes.SO_METAL_IDLE.geometry}
        material={customMaterials._SO_Metal_Shield}
        position={[0.322, 2.654, -2.585]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.006}
      />
      <group
        name="Loc_Cap_01"
        position={[0.298, 0.425, -2.594]}
        rotation={[Math.PI / 2, -0.163, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_06"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_06.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[0.82, 0.676, -1.927]}
          rotation={[0, 0.175, 0]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_01"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_01.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[-5.566, 0.676, -6.201]}
          rotation={[Math.PI, -0.436, Math.PI]}
        />
      </group>
      <group
        name="Loc_Cap_002"
        position={[0.385, 0.861, -2.594]}
        rotation={[Math.PI / 2, 0.121, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_01"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_01.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[-1.142, 0.676, 1.755]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_06"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_06.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[4.405, 0.676, 7.073]}
          rotation={[0, 0.262, 0]}
        />
      </group>
      <group
        name="Loc_Cap_003"
        position={[0.596, 1.291, -2.594]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_02"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_02.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[1.108, 0.676, 1.777]}
          rotation={[Math.PI, -1.134, Math.PI]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_02"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_02.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[8.272, 0.676, -1.003]}
          rotation={[0, 1.396, 0]}
        />
      </group>
      <group
        name="Loc_Cap_004"
        position={[0.502, 1.681, -2.594]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_03"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_03.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[1.939, 0.676, 0.791]}
          rotation={[0, -1.381, 0]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_03"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_03.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[6.116, 0.676, -5.659]}
          rotation={[-Math.PI, 1.119, -Math.PI]}
        />
      </group>
      <group
        name="Loc_Cap_005"
        position={[0.599, 1.999, -2.594]}
        rotation={[Math.PI / 2, 0.168, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_04"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_04.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[0.852, 0.676, 1.913]}
          rotation={[Math.PI, -0.996, Math.PI]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_04"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_04.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[8.332, 0.676, 0.15]}
          rotation={[0, 1.258, 0]}
        />
      </group>
      <group
        name="Loc_Cap_006"
        position={[0.467, 2.672, -2.594]}
        rotation={[Math.PI / 2, 0.126, -Math.PI]}
        scale={0.006}
      >
        <mesh
          name="_SO_BOLTS_05"
          castShadow
          receiveShadow
          geometry={nodes._SO_BOLTS_05.geometry}
          material={customMaterials._SO_CHROME_Gold}
          position={[0.852, 0.676, 1.913]}
          rotation={[Math.PI, -0.996, Math.PI]}
          scale={1.334}
        />
        <mesh
          name="_SO_SHIELD_CAP_05"
          castShadow
          receiveShadow
          geometry={nodes._SO_SHIELD_CAP_05.geometry}
          material={customMaterials._SO_Metal_Shield}
          position={[8.332, 0.676, 0.15]}
          rotation={[0, 1.258, 0]}
        />
      </group>
      <mesh
        name="_SO_Shield"
        castShadow
        receiveShadow
        geometry={nodes._SO_Shield.geometry}
        material={customMaterials._SO_Shield}
        position={[-0.181, 1.563, -2.578]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.006}
      />
      <mesh
        name="_SO_Bolts_B"
        castShadow
        receiveShadow
        geometry={nodes._SO_Bolts_B.geometry}
        material={customMaterials._SO_CHROME_Gold}
        position={[-0.16, 0.248, -0.781]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={0.012}
      />
      <mesh
        name="_SO_Shield_Border"
        castShadow
        receiveShadow
        geometry={nodes._SO_Shield_Border.geometry}
        material={customMaterials._SO_Shield_Fabric}
        position={[-0.181, 1.563, -2.578]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.006}
      />
      <mesh
        name="_SO_Staples"
        castShadow
        receiveShadow
        geometry={nodes._SO_Staples.geometry}
        material={customMaterials._SO_CHROME_Gold}
        position={[-1.291, 0.989, -2.593]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group
        name="LENS"
        position={[0.427, 2.668, -2.282]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.038}
      >
        <mesh
          name="Mesh028"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028.geometry}
          material={customMaterials["16 - Default3"]}
        />
        <mesh
          name="Mesh028_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_1.geometry}
          material={customMaterials["17 - Default"]}
        />
        <mesh
          name="Mesh028_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_2.geometry}
          material={customMaterials["19 - Default"]}
        />
        <mesh
          name="Mesh028_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_3.geometry}
          material={customMaterials["13 - Default"]}
        />
        <mesh
          name="Mesh028_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_4.geometry}
          material={customMaterials["14 - Default"]}
        />
        <mesh
          name="Mesh028_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_5.geometry}
          material={customMaterials["14 - Default2"]}
        />
        <mesh
          name="Mesh028_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_6.geometry}
          material={customMaterials["16 - Default2"]}
        />
        <mesh
          name="Mesh028_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_7.geometry}
          material={customMaterials["16 - Default4"]}
        />
      </group>
      <mesh
        name="_SO_DARK_GREY"
        castShadow
        receiveShadow
        geometry={nodes._SO_DARK_GREY.geometry}
        material={customMaterials._SO_DARK_GREY}
        position={[-1.215, 0.698, -0.494]}
        rotation={[Math.PI / 2, 0, 1.563]}
        scale={0.01}
      />
      <mesh
        name="_SO_Shield_PIECES"
        castShadow
        receiveShadow
        geometry={nodes._SO_Shield_PIECES.geometry}
        material={customMaterials._SO_Shield_Fabric}
        position={[0.334, 0.106, -2.582]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.019, 0.011, 0.011]}
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
      <group
        name="_LOC_SO_BROWN"
        position={[-0.1, 0.513, 0.267]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.008}
      >
        <mesh
          name="_SO_BROWN_ANTENNA"
          castShadow
          receiveShadow
          geometry={nodes._SO_BROWN_ANTENNA.geometry}
          material={customMaterials._SO_FOIL}
          position={[-36.605, -88.797, -233.525]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={0.772}
        />
        <mesh
          name="_SO_WHITE_ANTENNA"
          castShadow
          receiveShadow
          geometry={nodes._SO_WHITE_ANTENNA.geometry}
          material={customMaterials._SO_White_Metal}
          position={[37.942, -0.434, 195.599]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.701}
        />
      </group>
      <group name="_SO_WING_A" position={[5.734, 1.544, -0.02]} scale={0.01}>
        <mesh
          name="_SO_WING_BORDER"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_BORDER.geometry}
          material={customMaterials._SO_DARK_GREY}
          position={[-140.503, 0, 1.5]}
          rotation={[Math.PI / 2, 0, 0]}
        />
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
          name="_SO_WING_CHROME"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME.geometry}
          material={customMaterials._SO_CHROME}
          position={[241.788, 33.742, 2.247]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 0.617]}
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
          name="_SO_WING_SOLAR_PANnEL"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_SOLAR_PANnEL.geometry}
          material={customMaterials._SO_Solar_pannel}
          position={[-138.806, 0, -2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_SOLAR_PANNEL_WHITE001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_SOLAR_PANNEL_WHITE001.geometry}
          material={customMaterials._SO_WING_SOLAR_PANNEL_WHITE}
          position={[-138.806, 0, -2]}
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
          name="_SO_WING_BORDER001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_BORDER001.geometry}
          material={customMaterials._SO_DARK_GREY}
          position={[-140.503, 0, 1.5]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_BROWN001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_BROWN001.geometry}
          material={customMaterials._SO_BROWN}
          position={[-140.503, 0, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_CABLES001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CABLES001.geometry}
          material={customMaterials._SO_WING_CABLES}
          position={[342.641, -45.787, 1.873]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_CHROME001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_CHROME001.geometry}
          material={customMaterials._SO_CHROME}
          position={[241.787, 33.742, 2.247]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 0.617]}
        />
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
          name="_SO_WING_SOLAR_PANnEL001"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_SOLAR_PANnEL001.geometry}
          material={customMaterials._SO_Solar_pannel}
          position={[-138.806, 0, -2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="_SO_WING_SOLAR_PANNEL_WHITE"
          castShadow
          receiveShadow
          geometry={nodes._SO_WING_SOLAR_PANNEL_WHITE.geometry}
          material={customMaterials._SO_WING_SOLAR_PANNEL_WHITE}
          position={[-138.806, 0, -2]}
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
