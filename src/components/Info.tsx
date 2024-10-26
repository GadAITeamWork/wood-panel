import { useSnapshot } from "valtio";
import { store } from "../store";

const Info = () => {
  const {
    size,
    thickness,
    material,
    faceCut,
    faceMatch,
    faceGrade,
    faceGrain,
    backCut,
    backGrade,
    backMatch,
  } = useSnapshot(store);

  return (
    <div data-nogap className="react-option">
      <h2>5. Your Panel</h2>
      <h3>Download your spec sheet.</h3>
      <div className="react-info">
        <h4>core</h4>
        <div>
          <p>{material.text}</p>
        </div>
      </div>
      <div className="react-info">
        <h4>panel size</h4>
        <div>
          <p>{size.text}</p>
        </div>
      </div>
      <div className="react-info">
        <h4>thickness</h4>
        <div>
          <p>{thickness.text}</p>
        </div>
      </div>

      <div className="react-info">
        <h4>Face Veneer</h4>
        <div>
          <p>cut: {faceCut.text}</p>
          <p>match: {faceMatch.text}</p>
          <p>grade: {faceGrade.text}</p>
          <p>grain direction: {faceGrain.text}</p>
        </div>
      </div>
      <div className="react-info">
        <h4>Back Veneer</h4>
        <div>
          <p>cut: {backCut.text}</p>
          <p>match: {backMatch.text}</p>
          <p>grade: {backGrade.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
