import React from "react";
import Xarrow from "react-xarrows";
import "../styles/Node.css";

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

const Node = ({ label, depth, parent, map, uid, num, highlight }) => {
  const middle = Math.round((map.get(depth) - 1) / 2);
  let offset = num - middle;
  let color = "#bbb";
  if (highlight) {
    color = "#61B329";
  }
  return (
    <>
      <div
        className="dot"
        id={`dot ${uid}`}
        style={{
          boxStyle,
          position: "relative",
          left: `${offset * 100}px`,
          top: `${depth * 100}px`,
          bottom: `100px`,
          backgroundColor: `${color}`,
        }}
      >
        <p className="label">{label}</p>
      </div>
      {parent != null && (
        <Xarrow
          start={`dot ${uid}`}
          end={`dot ${parent}`}
          endAnchor="bottom"
          startAnchor="top"
          path={"smooth"}
          lineColor="black"
          strokeWidth={2}
          showHead={false}
          zIndex={1}
        />
      )}
    </>
  );
};

export default Node;
