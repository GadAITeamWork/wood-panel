import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF, OrbitControls as OC } from "three-stdlib";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Box001: THREE.Mesh;
  };
  materials: {
    ["01 - Default"]: THREE.MeshStandardMaterial;
  };
};

export function WoodPanel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/wood-panel.glb") as GLTFResult;
  const { size, thickness, activeOptions } = useSnapshot(store);
  const model = useRef<THREE.Group>(null);
  const orbitref = useRef<OC>(null);

  useGSAP(
    () => {
      gsap.to(model.current!.scale, {
        x: size.value === "4x8" ? 1 : 1.2,
        y: 1 + Number(thickness.value),
      });
    },
    { dependencies: [size, thickness] }
  );

  useGSAP(
    () => {
      orbitref.current?.reset();
      if (activeOptions === 2) {
        gsap.to(model.current!.rotation, { x: Math.PI * 0.4 });
      } else if (activeOptions === 3) {
        gsap.to(model.current!.rotation, { x: -Math.PI * 0.6 });
      } else {
        gsap.to(model.current!.rotation, { x: 0 });
      }
    },
    { dependencies: [activeOptions] }
  );

  return (
    <>
      <OrbitControls ref={orbitref} />
      <group ref={model} {...props} dispose={null}>
        <mesh
          geometry={nodes.Box001.geometry}
          material={materials["01 - Default"]}
          scale={0.032}
        />
      </group>
    </>
  );
}

useGLTF.preload("/wood-panel.glb");
