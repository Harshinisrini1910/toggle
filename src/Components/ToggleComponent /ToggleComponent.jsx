import React, { useState } from "react";
import "./ToggleComponent.css";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="small">
      <div className="large">
        <img
          src="https://www.svgrepo.com/show/12044/eye.svg"
          alt="Eye Logo"
        ></img>
        <h3>Name:Ashika Jubi</h3>
        <h5>Registration number:212221040020</h5>
        <div className="btn">
          <button className="click" onClick={toggleDetails}>
            {isVisible ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {isVisible && (
          <div className="content">
            <p>Additional details or content can go here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleComponent;