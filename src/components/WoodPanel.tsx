import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF, OrbitControls as OC } from "three-stdlib";
import { Suspense, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import gsap from "gsap";
import CoreMaterial from "./CoreMaterial";
import VeneerTexture from "./VeneerTexture";

type GLTFResult = GLTF & {
  nodes: {
    Core: THREE.Mesh;
    Veneer: THREE.Mesh;
  };
  materials: {
    corematerial: THREE.MeshStandardMaterial;
    veneermaterial: THREE.MeshStandardMaterial;
  };
};

export function WoodPanel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/wood-panel.glb") as GLTFResult;
  const { size, thickness, activeOptions } = useSnapshot(store);
  const model = useRef<THREE.Group>(null);
  const orbitref = useRef<OC>(null);

  useGSAP(
    () => {
      gsap.to(model.current!.scale, {
        x: size.value === "4x8" ? 0.8 : 1,
        y: 1 + Number(thickness.value),
      });
    },
    { dependencies: [size, thickness] }
  );

  useGSAP(
    () => {
      orbitref.current?.reset();
      if (activeOptions === 2) {
        gsap.to(model.current!.rotation, { x: Math.PI * 0.36 });
      } else if (activeOptions === 3) {
        gsap.to(model.current!.rotation, { x: -Math.PI * 0.66 });
      } else {
        gsap.to(model.current!.rotation, { x: 0 });
      }
    },
    { dependencies: [activeOptions] }
  );

  return (
    <>
      <OrbitControls
        ref={orbitref}
        enablePan={false}
        minDistance={1.9}
        maxDistance={5}
      />
      <group
        position={[-0.45, 0, -0.176]}
        ref={model}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Core.geometry}
          position={[0.369, 0, 0.176]}
          scale={0.0255}
        >
          <Suspense fallback={null}>
            <CoreMaterial />
          </Suspense>
        </mesh>
        <mesh
          geometry={nodes.Veneer.geometry}
          scale={[1.006, 1, 1.004]}
          // material={materials.veneermaterial}
        >
          <Suspense fallback={null}>
            <VeneerTexture />
          </Suspense>
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/wood-panel.glb");
