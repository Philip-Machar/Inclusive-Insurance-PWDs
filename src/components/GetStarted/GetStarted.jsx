import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with AbiliLife Inclusive Insurance</span>
          <span className="secondaryText">
            Subscribe now for tailored insurance and assistive technology options.
          </span>
          <button className="button" href>
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
