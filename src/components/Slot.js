import React from "react";
import "../App.css";

const Slot = (props) => {
  let x = props.x
  let y = props.y
  let z = props.z
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is   Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Not Matching</h1>
          <hr />
        </div>
      </>
    );
  }
};
export default Slot;
