import { useSnapshot } from "valtio";
import { store } from "../store";
import Info from "./Info";

const ConditionalOptions = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) => {
  const {
    activeOptions,
    material,
    faceCut,
    faceGrade,
    faceMatch,
    faceSpecies,
  } = useSnapshot(store);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.material = { value: e.target.value, text: e.target.title };
  };

  switch (activeOptions) {
    case 0:
      return (
        <div className="react-option">
          <h2>1. Core Material</h2>
          <div className="react-radio">
            <div>
              <input
                type="radio"
                id="react-armorcore"
                name="core_material"
                title="armorcore"
                value="armorcore"
                onChange={handleMaterialChange}
                checked={material.value === "armorcore"}
              />
              <label htmlFor="react-armorcore">Armorcore</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-appleply"
                name="core_material"
                value="appleply"
                title="appleply"
                onChange={handleMaterialChange}
                checked={material.value === "appleply"}
              />
              <label htmlFor="react-appleply">ApplePly</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-particle-board"
                name="core_material"
                value="particleboard"
                title="particle board"
                onChange={handleMaterialChange}
                checked={material.value === "particleboard"}
              />
              <label htmlFor="react-particle-board">Particle Board</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-mdf"
                name="core_material"
                value="mdf"
                title="mdf"
                onChange={handleMaterialChange}
                checked={material.value === "mdf"}
              />
              <label htmlFor="react-mdf">MDF</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-naf"
                name="core_material"
                value="naf"
                title="naf"
                onChange={handleMaterialChange}
                checked={material.value === "naf"}
              />
              <label htmlFor="react-naf">NAF</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-hdf"
                name="core_material"
                value="hdf"
                title="hdf"
                onChange={handleMaterialChange}
                checked={material.value === "hdf"}
              />
              <label htmlFor="react-hdf">HDF</label>
            </div>
            <div>
              <input
                type="radio"
                id="react-scb"
                name="core_material"
                value="scb"
                title="scb"
                onChange={handleMaterialChange}
                checked={material.value === "scb"}
              />
              <label htmlFor="react-scb">SCB</label>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="react-option">
          <h2>2. Panel Size</h2>
          <div className="react-input">
            <label>Size</label>
            <select
              onChange={(e) =>
                (store.size = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="size"
            >
              <option value="4x8">4 foot x 8 foot</option>
              <option value="4x10">4 foot x 10 foot</option>
            </select>
          </div>
          <div className="react-input">
            <label>Thickness</label>
            <select
              onChange={(e) =>
                (store.thickness = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="thickness"
            >
              <option value="0.25">1/4 inch</option>
              <option value="0.375">3/8 inch</option>
              <option value="0.5">1/2 inch</option>
              <option value="0.625">5/8 inch</option>
              <option value="0.75">3/4 inch</option>
              <option value="1">1 inch</option>
              <option value="1.25">1-1/4 inch</option>
              <option value="1.5">1-1/2 inch</option>
            </select>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="react-option">
          <h2>3. Face Veneer</h2>
          <div className="react-input">
            <label>Species</label>
            <select
              onChange={(e) => {
                store.faceSpecies = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                };
              }}
              value={faceSpecies.value}
              name="face-species"
            >
              <option value="maple">Maple</option>
              <option value="birch">Birch</option>
              <option value="oak">Oak</option>
              <option value="cherry">Cherry</option>
              <option value="cedat">Cedar</option>
              <option value="pine">Pine</option>
              <option value="redwood">Redwood</option>
              <option value="fir">Fir</option>
              <option value="walnut">Walnut</option>
              <option value="white-oak">White Oak</option>
            </select>
          </div>
          <div className="react-input">
            <label>Cut</label>
            <select
              onChange={(e) => {
                store.faceCut = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                };
              }}
              value={faceCut.value}
              name="face-cut"
            >
              <option value="rotary">Rotary</option>
              <option value="plain-sliced">Plain sliced</option>
              <option value="quarter-cut">Quarter cut</option>
              <option value="rift-cut">Rift cut</option>
            </select>
          </div>
          <div className="react-input">
            <label>Match</label>
            <select
              onChange={(e) =>
                (store.faceMatch = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              value={faceMatch.value}
              name="face-match"
            >
              <option value="book-match">Book match</option>
              <option value="slip-match">Slip match</option>
              <option value="random-match">Random match</option>
              <option value="pleasing-match">Pleasing match</option>
              <option value="whole-piece">Whole piece</option>
            </select>
          </div>
          <div className="react-input">
            <label>Grade</label>
            <select
              onChange={(e) =>
                (store.faceGrade = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              value={faceGrade.value}
              name="face-grade"
            >
              <option value="AA">AA</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div className="react-input">
            <label>Grain Direction</label>
            <select
              onChange={(e) =>
                (store.faceGrain = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="face-grain"
            >
              <option value="length">Length</option>
              <option value="width">Width</option>
            </select>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="react-option">
          <h2>4. Back Veneer</h2>
          <div className="react-input">
            <label>CUT</label>
            <select
              onChange={(e) =>
                (store.backCut = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="back-cut"
            >
              <option value="rotary">Rotary</option>
              <option value="plain">Plain sliced</option>
              <option value="quarter">Quarter cut</option>
              <option value="rift">Rift cut</option>
            </select>
          </div>
          <div className="react-input">
            <label>Match</label>
            <select
              onChange={(e) =>
                (store.backMatch = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="back-match"
            >
              <option value="book">Book match</option>
              <option value="slip">Slip match</option>
              <option value="random">Random match</option>
              <option value="pleasing">Pleasing match</option>
              <option value="plank">Whole piece</option>
            </select>
          </div>
          <div className="react-input">
            <label>GRADE</label>
            <select
              onChange={(e) =>
                (store.backGrade = {
                  value: e.target.value,
                  text: e.target.options[e.target.selectedIndex].innerText,
                })
              }
              name="back-grade"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      );
    case 4:
      return <Info targetRef={targetRef} />;
  }
};

export default ConditionalOptions;
