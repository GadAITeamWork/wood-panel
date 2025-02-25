import { useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { store } from "../store";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, RepeatWrapping } from "three";

const CoreMaterial = () => {
  const materialRef = useRef<MeshStandardMaterial>(null);
  const { material, thickness } = useSnapshot(store);

  useEffect(() => {
    const texture = materialRef.current!.map;

    texture!.wrapS = texture!.wrapT = RepeatWrapping;
    texture!.offset.set(0, 0);
    texture!.repeat.set(1, 0.75 + Number(thickness.value));
    texture!.needsUpdate = true;
  }, [thickness]);

  return (
    <meshStandardMaterial
      ref={materialRef}
      roughness={0.5}
      metalness={1}
      map={useTexture(`/cores/${material.value}.png`)}
    />
  );
};

export default CoreMaterial;
