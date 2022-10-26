import React, { useState } from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
    </>
  );
};

export default App;
