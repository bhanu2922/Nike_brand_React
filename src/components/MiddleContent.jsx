import React from "react";
import shoe from "../utils/shoe_image.png";
import "./MiddleContent.css";
const MiddleContent = () => {
  return (
    <>
      <div className="middle-content">
        <div className="content-1">
          <h1 className="text-main">
            {" "}
            YOUR FEET <br /> DESERVE <br />
            THE BEST
          </h1>
          <p className="text-main-1">
            {" "}
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH
            OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP
            YOU WITH OUR <br />
            SHOES.
          </p>
          <span>
            {" "}
            <button className="btn-2"> Shop Now </button>{" "}
            <button className="btn-3"> Category </button>
          </span>
        </div>
        <div>
          <img src={shoe} alt="shoe" />
        </div>
      </div>
    </>
  );
};

export default MiddleContent;
