import React from "react";
import "../styles/Node.css";

const Node = ({ label, depth, parent, map, uid, num }) => {
  const middle = Math.round((map.get(depth) - 1) / 2);
  let offset = num - middle;
  console.log(label, parent);
  return (
    <>
      <div
        className={`dot ${label}`}
        style={{
          position: "relative",
          left: `${offset * 120}px`,
          top: `${depth * 100}px`,
          bottom: `100px`,
        }}
      >
        {label}{" "}
      </div>
      {/* <LineTo from={`dot ${label}`} to={`dot ${parent}`} /> */}
    </>
  );
};

export default Node;
