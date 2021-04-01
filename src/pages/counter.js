import React, { useState } from "react";

function Counter(props) {
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <div>
      <button onClick={() => setScore(score + 1)}>+</button>
      <button onClick={() => setScore(score - 1)}>-</button>
    </div>
  );
}

export default Counter;
