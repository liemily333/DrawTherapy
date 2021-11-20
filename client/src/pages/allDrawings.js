import React, { useEffect, useState } from "react";
import Axios from "axios";
import Canvas from "../components/Canvas/Canvas";
import Navbar from "../components/NavBar/navBar";
function AllDrawings() {
  const [savedDrawing, setSavedDrawing] = useState([]);
  const [recentToOld, setRecentToOld] = useState([]);
  const [oldToRecent, setOldToRecent] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3005/allDrawings").then((response) => {
      setSavedDrawing(response.data);
    });
  }, []);

  console.log("this is saved drawing", savedDrawing);

  const sortRecent = () => {
    console.log("sort button clicked");
    setRecentToOld(
      savedDrawing.sort((a, b) => (b.drawingID < a.drawingID ? -1 : 0))
    );
  };

  const sortTitle = () => {
    console.log("sort by title");
  };

  console.log("recent first", recentToOld);
  console.log("oldest first", oldToRecent);

  return (
    <div>
      <Navbar></Navbar>
      <div className="draw">
        <h1 className="mydrawings">MY DRAWINGS: </h1>
        <button onClick={sortRecent}> sort by most recent</button>
        <button onClick={sortTitle}> sort by title </button>
        {savedDrawing.map((data) => {
          if (data.drawing === null) {
            return null;
          } else {
            return (
              <Canvas drawing={data.drawing} key={data.drawingID}></Canvas>
            );
          }
        })}
      </div>
    </div>
  );
}

export default AllDrawings;
