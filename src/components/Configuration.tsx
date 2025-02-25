import { useSnapshot } from "valtio";
import { store } from "../store";
import { Download, LeftArrow, Repeat, RightArrow } from "./Svgs";
import ConditionalOptions from "./ConditionalOptions";
// import generatePDF, { Margin } from "react-to-pdf";
import { useRef } from "react";

const Configuration = () => {
  const targetRef = useRef<HTMLDivElement>(null);
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
  // const handleDownload = () => {
  //   generatePDF(() => targetRef.current!, {
  //     filename: "panel",
  //     page: {
  //       margin: Margin.SMALL,
  //       format: [100, 150],
  //     },
  //   });
  // };

  return (
    <div id="react-config">
      <ConditionalOptions targetRef={targetRef} />
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
          <>
            <button onClick={handleNext} className="react-button-group_button">
              <span>Next</span>
              <RightArrow />
            </button>
            <p className="note">
              Inner ply will vary by thickness for illustration purposes only
            </p>
          </>
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
          <a href="/CSISpec.pdf" download="CSISpec">
            <button className="react-button-group_button">
              <span>Download CSI Spec</span>
              <Download />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Configuration;
