import React from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    console.log("test");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorfulMessage color="blue" message="How are you?" />
      <ColorfulMessage color="pink" message="I'm fine!" />
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
