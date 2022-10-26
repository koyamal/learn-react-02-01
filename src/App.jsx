import React from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    console.log("test");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine!</ColorfulMessage>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
