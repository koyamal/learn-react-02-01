/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage";

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

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

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
