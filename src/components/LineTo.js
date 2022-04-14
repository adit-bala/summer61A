import React from "react";
import "../styles/Node.css";

const LineTo = ({ div1, div2, thickness }) => {
  const off1 = getOffset(div1);
  const off2 = getOffset(div2);

  const x1 = off1.left + off1.width;
  const y1 = off1.top + off1.height;

  const x2 = off2.left + off2.width;
  const y2 = off2.top;

  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

  const cx = (x1 + x2) / 2 - length / 2;
  const cy = (y1 + y2) / 2 - thickness / 2;

  const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
  return (
    <div
      classname="line"
      style={{
        height: `${thickness}px`,
        left: `${cx}px`,
        top: `${cy}px`,
        width: `${length}px`,
        moztransform: `rotate(${angle}deg)`,
        webkittransform: `rotate(${angle}deg)`,
        otransform: `rotate(${angle}deg)`,
        mstransform: `rotate(${angle}deg)`,
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
};

const getOffset = (el) => {
  console.log(el);
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    width: rect.width || el.offsetWidth,
    height: rect.height || el.offsetHeight,
  };
};

export default LineTo;
