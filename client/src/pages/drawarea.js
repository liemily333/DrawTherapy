import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import "./style.css";
import Axios from "axios";
import Navbar from "../components/NavBar/navBar";
import Modal from "../components/Modal/Modal";

function DrawArea() {
  const [radius, setRadius] = useState(null);
  const [color, setColor] = useState(null);
  const [savedDrawing, setSavedDrawing] = useState(null);

  const savecanvas = useRef(null);
  const savedcanvas = useRef(null);

  const saveDrawing = () => {
    const data = savecanvas.current.getSaveData();
    setSavedDrawing(data);
    alert("your drawing has been saved!");
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
    <div>
      <Navbar></Navbar>
      <div className="draw">
        <h1> begin drawing!</h1>
        <CanvasDraw
          canvasWidth="1000px"
          brushRadius={radius}
          brushColor={color}
          getSaveData
          ref={savecanvas}
          hideGrid="true"
        />

        <button onClick={changeRadius}>30</button>
        <button onClick={changeColor}>pink</button>
        <button onClick={clearCanvas}> clear canvas</button>
        <button onClick={saveDrawing}>finished </button>
        <button onClick={undoCanvas}>undo last move</button>

        <div className="viewDrawing">
          <CanvasDraw
            canvasWidth="1000px"
            brushRadius={radius}
            brushColor={color}
            getSaveData
            ref={savedcanvas}
            hideGrid="true"
            disabled
            hideInterface
          />
          <button onClick={viewDrawing}>view drawing</button>
        </div>
      </div>
    </div>
  );
}

export default DrawArea;
