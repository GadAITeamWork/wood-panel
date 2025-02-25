import { useSnapshot } from "valtio";
import { store } from "../store";
import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshStandardMaterial, RepeatWrapping } from "three";

const VeneerTexture = () => {
  const { faceSpecies, faceCut, faceGrade, faceMatch, faceGrain } =
    useSnapshot(store);
  const ref = useRef<MeshStandardMaterial>(null);

  useEffect(() => {
    if (ref.current!) {
      const texture = ref.current.map!;

      texture.wrapS = texture.wrapT = RepeatWrapping;

      texture.rotation = faceGrain.value === "length" ? 0 : Math.PI * 0.5;

      texture.needsUpdate = true;
    }
  }, [faceCut, faceGrade, faceSpecies, faceMatch, faceGrain, ref]);

  switch (
    `${faceSpecies.value}_${faceCut.value}_${faceMatch.value}_${faceGrade.value}`
  ) {
    case "cherry_plain-sliced_pleasing-match_B":
    case "walnut_plain-sliced_book-match_A":
    case "walnut_plain-sliced_pleasing-match_A":
    case "white-oak_plain-sliced_pleasing-match_A":
    case "white-oak_rift-cut_pleasing-match_A":
      return (
        <meshStandardMaterial
          ref={ref}
          map={useTexture(
            `/vaneer/${faceSpecies.value}_${faceCut.value}_${faceMatch.value}_${faceGrade.value}.jpg`
          )}
        />
      );

    default:
      return <meshStandardMaterial map={useTexture("/vaneer/empty.jpg")} />;
  }
};

export default VeneerTexture;
