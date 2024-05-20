import "./PricingcartStyles.css";
import React from "react";
import { Link } from "react-router-dom";

export const Pricingcart = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>skills</h3>
          <span className="bar"></span>
          <p className="btc">technologies and frameworks</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>machine learning</p>
          <p>Reactjs</p>
          <p>SQL</p>
          {/* <Link to="/contact" className="btn">
            CONTACT NOW
          </Link> */}
        </div>
        <div className="card">
          <h3>-skills-</h3>
          <span className="bar"></span>
          <p className="btc">programming</p>
          <p>python</p>
          <p>R</p>
          {/* <Link to="/contact" className="btn">
            CONTACT NOW
          </Link> */}
        </div>
        <div className="card">
          <h3>skills</h3>
          <span className="bar"></span>
          <p className="btc">Tools And Platforms</p>
          <p>PowerBI</p>
          <p>Jupyter Notebook</p>
          <p>Tableau</p>
          <p>Google Colab</p>
          <p>R studio</p>
          {/* <Link to="/contact" className="btn">
            CONTACT NOW
          </Link> */}
        </div>
      </div>
    </div>
  );
};
