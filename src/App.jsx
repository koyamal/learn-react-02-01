import React from "react";

const App = () => {
  const onClickButton = () => {
    console.log("test");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <p>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
