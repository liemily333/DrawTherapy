import React from "react";
import CanvasDraw from "react-canvas-draw";
import "./style.css";
function Canvas(props) {
  return (
    <div className="drawingComponent">
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
