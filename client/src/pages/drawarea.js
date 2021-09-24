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

  const saveDrawing = () => {
    const data = savecanvas.current.getSaveData();
    setSavedDrawing(data);
  };

  const viewDrawing = () => {
    const data = savecanvas.current.getSaveData();
    savedcanvas.current.loadSaveData(data);
  };

  useEffect(() => {
    Axios.post("http://localhost:3005/allDrawings", {
      savedDrawing: savedDrawing,
    }).then((response) => {
      console.log(response);
    });
  }, [savedDrawing]);

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
      <button onClick={viewDrawing}>view drawing</button>
    </div>
  );
}

export default DrawArea;
