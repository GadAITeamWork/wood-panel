import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Panel(props: JSX.IntrinsicElements["group"]) {
  const { size, thickness, activeOptions } = useSnapshot(store);
  const model = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/panel.glb") as GLTFResult;

  useGSAP(
    () => {
      gsap.to(model.current!.scale, {
        x: size.value === "4x8" ? 2 : 2.5,
        y: 1 + Number(thickness.value),
      });
    },
    { dependencies: [size, thickness] }
  );

  useGSAP(
    () => {
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
    <group
      ref={model}
      position={[0, 0, 0]}
      scale={[2, 1, 1.5]}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("/panel.glb");
