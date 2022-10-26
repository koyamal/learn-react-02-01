import React from "react";

const ColorfulMessage = (props) => {
  console.log("Colorful called");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
