import React from "react";

const ToTop = () => {
  return (
    <div className="top">
      <img
        src="./assets/arrow-icon.svg"
        alt="arrow"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default ToTop;
