import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import rough from "roughjs";
import "./style.css";
import Axios from "axios";

function DrawArea() {
  const [radius, setRadius] = useState(null);
  const [color, setColor] = useState(null);
  const [savedDrawing, setSavedDrawing] = useState(null);
  const savecanvas = useRef(null);
  const savedcanvas = useRef(null);

  console.log("SAVED DRAWING", savedDrawing);

  const saveDrawing = () => {
    const data = savecanvas.current.getSaveData();
    console.log(data);
    setSavedDrawing(data);
    saveToDB();
  };

  const saveToDB = () => {
    Axios.post("http://localhost:3005/allDrawings", {
      savedDrawing: savedDrawing,
    }).then((response) => {
      console.log(response);
    });
  };

  const SavedDrawing = () => {
    const data = savecanvas.current.getSaveData();
    savedcanvas.current.loadSaveData(data);
  };

  const clearCanvas = () => {
    savecanvas.current.clear();
  };

  const undoCanvas = () => {
    savecanvas.current.undo();
  };

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
        getSaveData
        ref={savecanvas}
        hideGrid="true"
      />
      <button onClick={changeRadius}>30</button>
      <button onClick={changeColor}>pink</button>
      <button onClick={clearCanvas}> clear canvas</button>
      <button onClick={saveDrawing}> save drawing</button>
      <button onClick={undoCanvas}>undo last move</button>

      <CanvasDraw
        canvasWidth={window.innerWidth}
        brushRadius={radius}
        brushColor={color}
        getSaveData
        ref={savedcanvas}
        hideGrid="true"
      />
      <button onClick={SavedDrawing}>view drawing</button>
    </div>
  );
}

export default DrawArea;
