import React from "react";
import "./Toppers.css";
import { data } from "../data";

const Toppers = () => {
  return (
    <div className="toppers">
      <div className="topper-row sp-topper">
        <div className="topper-sr-no">Sr.No.</div>
        <div className="topper-name">Name</div>
        <div className="topper-marks">Score</div>
      </div>
      {data.map((item) => (
        <div className="topper-row ">
          <div className="topper-sr-no">{item.serialNumber}</div>
          <div className="topper-name">{item.name}</div>
          <div className="topper-marks">{item.score}</div>
        </div>
      ))}
    </div>
  );
};

export default Toppers;
