import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import { Pricingcart } from "../components/Pricingcart";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="some of my most recent works" />
      <Work />
      <Pricingcart />
      <Footer />
    </div>
  );
};

export default Project;
