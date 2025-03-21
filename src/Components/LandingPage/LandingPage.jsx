import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
import Rocket from "../hero/rocket"

import ICell from "../../svgs/ICell";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import finger from "../cursor/point_finger.gif";

const LandingPage = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHidden(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Position the Rocket behind other content */}
      <Rocket />
      
      {/* Ensure Navbar has higher z-index */}
      <div style={{ position: "relative", zIndex: 11 }}>
        <Navbar />
      </div>
      
      <div
        style={{
          position: "fixed",
          bottom: "-15px",
          right: "5px",
          display: "flex",
          alignItems: "center",
          zIndex: 10, 
          display: `${hidden ? "none" : ""}`,
        }}
      >
        <img src={finger} alt="" height={200} />
      </div>

      {/* Main content with higher z-index */}
      <div className="main-landing" style={{ position: "relative", zIndex: 10 }}>
        <div className="landing">
          <div className="welcome">
            WELCOME TO <br />
          </div>
          <div>
            
            <ICell />
            <div className="social-link">
              <a
                href="https://www.instagram.com/innovation_cell.nitrr/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/innovation-cell-nit-raipur/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://twitter.com/I_Cell_NITRR"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
