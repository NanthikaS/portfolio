import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="type your Message Here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
