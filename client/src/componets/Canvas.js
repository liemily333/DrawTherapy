import React from "react";
import CanvasDraw from "react-canvas-draw";

function Canvas(props) {
  return (
    <div>
      <CanvasDraw
        disabled
        canvasWidth="1000px"
        hideInterface
        saveData={props.drawing}
        hideGrid
      ></CanvasDraw>
    </div>
  );
}

export default Canvas;
