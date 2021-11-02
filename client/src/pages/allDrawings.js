import React, { useEffect, useState } from "react";
import Axios from "axios";
import Canvas from "../componets/Canvas";

function AllDrawings() {
  const [savedDrawing, setSavedDrawing] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3005/allDrawings").then((response) => {
      setSavedDrawing(response.data);
      console.log("response of drawing data", response.data);
    });
  }, []);

  console.log("this is saved drawing", savedDrawing);
  return (
    <div>
      {savedDrawing.map((data) => {
        if (data.drawing === null) {
          return null;
        } else {
          return <Canvas drawing={data.drawing} key={data.drawingID}></Canvas>;
        }
      })}
    </div>
  );
}

export default AllDrawings;
