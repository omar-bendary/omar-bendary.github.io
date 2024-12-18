// AngledSide.js
import React from "react";

const AngledSide = ({ position, top, bottom, left, right }) => {
  const rotationDegree = position === "left" ? -60 : 240;

  return (
    <div
      className={`absolute ${top || ""} ${bottom || ""} ${left || ""} ${
        right || ""
      } hidden 2xl:block w-[1618px] h-[506px] rounded-full bg-[linear-gradient(94.72deg,_rgba(203,_210,_238,_0)_8.33%,_#5070D1_57.27%)] opacity-50`}
      style={{ zIndex: -1, transform: `rotate(${rotationDegree}deg)` }}
    ></div>
  );
};

export default AngledSide;
