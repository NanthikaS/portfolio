import "./HeroimgStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import IntroImg from "../assets/workplacegirl.jpg";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I' AM A STUDENT</p>
        <h1>Python Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
