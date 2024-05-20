import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import react2 from "../assets/react2.jpg";
import react1 from "../assets/react1.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am an python developer. Enthusiastic to learn about new things</p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="image" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
