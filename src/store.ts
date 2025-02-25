import { proxy } from "valtio";

type Store = {
  activeOptions: number;
  material: { value: string; text: string };
  size: { value: string; text: string };
  thickness: { value: string; text: string };
  faceCut: { value: string; text: string };
  faceMatch: { value: string; text: string };
  faceGrade: { value: string; text: string };
  faceGrain: { value: string; text: string };
  faceSpecies: { value: string; text: string };
  backCut: { value: string; text: string };
  backMatch: { value: string; text: string };
  backGrade: { value: string; text: string };
  isPDF: boolean;
};

export const store = proxy<Store>({
  activeOptions: 0,
  material: { value: "armorcore", text: "Armorcore" },
  size: { value: "4x8", text: "4 foot x 8 foot" },
  thickness: { value: "0.25", text: "1/4 inch" },
  faceCut: { value: "plain-sliced", text: "Plain sliced" },
  faceMatch: { value: "pleasing-match", text: "Pleasing match" },
  faceGrade: { value: "B", text: "B" },
  faceSpecies: { value: "cherry", text: "Cherry" },
  faceGrain: { value: "length", text: "Length" },
  backCut: { value: "rotary", text: "Rotary" },
  backMatch: { value: "book", text: "Book match" },
  backGrade: { value: "1", text: "1" },
  isPDF: false,
});
