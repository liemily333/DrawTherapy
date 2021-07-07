import React, { useState, useLayoutEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import rough from "roughjs";
import "./style.css";

function DrawArea() {
  const [radius, setRadius] = useState(null);
  const [color, setColor] = useState(null);

  function changeRadius() {
    setRadius(30);
  }

  function changeColor() {
    setColor("pink");
  }

  return (
    <div className="drawArea">
      <h1> begin drawing!</h1>
      <CanvasDraw
        canvasWidth={window.innerWidth}
        brushRadius={radius}
        brushColor={color}
      />
      <button onClick={changeRadius}>30</button>
      <button onClick={changeColor}>pink</button>
    </div>
  );
}

export default DrawArea;
