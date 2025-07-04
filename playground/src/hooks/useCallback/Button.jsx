import React from "react";
const Button = React.memo(({ onClick }) => {
  console.log("Button component rendered");
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Click Me
    </button>
  );
});

export default Button;
