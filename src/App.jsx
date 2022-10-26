import React from "react";

const App = () => {
  const onClickButton = () => {
    console.log("test");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <p style={contentStyle}>How are you?</p>
      <p style={contentLedyStyle}>I'm fine!</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
