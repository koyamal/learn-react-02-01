import React, { useState } from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("001");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
      <button onClick={onClickShowFace}>on/off</button>
      {faceShowFlag && <p>（＾_＾）</p>}
    </>
  );
};

export default App;
