import React, { useRef } from "react";
import Xarrow from "react-xarrows";
import "../styles/Node.css";
import LineTo from "./LineTo";

const boxStyle = {
  border: "1px #999 solid",
  borderRadius: "10px",
  textAlign: "center",
  width: "100px",
  height: "30px",
  color: "black",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

const Node = ({ label, depth, parent, map, uid, num }) => {
  const middle = Math.round((map.get(depth) - 1) / 2);
  let offset = num - middle;

  console.log(`dot ${label}`, `dot ${parent}`);
  return (
    <>
      <div
        id={`dot ${label}`}
        style={{
          boxStyle,
          position: "relative",
          left: `${offset * 120}px`,
          top: `${depth * 100}px`,
          bottom: `100px`,
        }}
      >
        {label}{" "}
      </div>
      <Xarrow
        start={`dot ${label}`}
        end={`dot ${parent}`}
        path={'grid'}
        showHead={false}
      />
      {/* <LineTo from={`dot ${label}`} to={`dot ${parent}`} thickness={5} /> */}
    </>
  );
};

export default Node;
