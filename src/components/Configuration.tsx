import { useSnapshot } from "valtio";
import { store } from "../store";
import { Download, LeftArrow, Repeat, RightArrow } from "./Svgs";
import ConditionalOptions from "./ConditionalOptions";

const Configuration = () => {
  const { activeOptions } = useSnapshot(store);

  const handleNext = () => {
    if (activeOptions < 4) {
      store.activeOptions = activeOptions + 1;
    }
  };
  const handleBack = () => {
    if (activeOptions >= 0) {
      store.activeOptions = activeOptions - 1;
    }
  };
  const handleStartOver = () => {
    store.activeOptions = 0;
  };
  const handleDownload = () => {};

  return (
    <div id="react-config">
      <ConditionalOptions />
      <div className="react-button-group">
        {activeOptions !== 0 && (
          <button
            onClick={handleBack}
            data-grey
            className="react-button-group_button"
          >
            <LeftArrow />
            <span>Back</span>
          </button>
        )}
        {activeOptions < 4 && (
          <button onClick={handleNext} className="react-button-group_button">
            <span>Next</span>
            <RightArrow />
          </button>
        )}

        {activeOptions > 3 && (
          <button
            data-grey
            onClick={handleStartOver}
            className="react-button-group_button"
          >
            <span>Start Over</span>
            <Repeat />
          </button>
        )}
        {activeOptions > 3 && (
          <button
            onClick={handleDownload}
            className="react-button-group_button"
          >
            <span>Download CSI Spec</span>
            <Download />
          </button>
        )}
      </div>
    </div>
  );
};

export default Configuration;
