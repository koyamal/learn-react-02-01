import React from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    console.log("test");
  };
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorfulMessage color="blue" message="How are you?" />
      <p style={contentLedyStyle}>I'm fine!</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
