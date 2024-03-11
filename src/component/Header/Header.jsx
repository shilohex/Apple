import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import blacklogo from "../../assets/blacklogo2.svg";
import mac from "../../assets/mac.jpg";

const Header = ({ bgcol, txtcol }) => {
  return (
    <div className="header">
      <div id="comp" style={{ backgroundColor: bgcol, color: txtcol }}>
        <div className="nav">
          <Link to={"/"}>
            {bgcol == "white" ? (
              <img src={blacklogo} />
            ) : (
              <img className="img" src="\resources\applegrey.svg" alt="" />
            )}
          </Link>

          <Link to={"/mac"}>
            <p>Mac</p>
          </Link>
          <Link to={"/ipad"}>
            <p>ipad</p>
          </Link>
          <p>iphone</p>
          <Link to={"/support"} id="Support">
            <p>Support</p>
            <div class="dropdown" id="dropdown">
              <div id="drop">
                <div className="dropdown1">
                  <p className="drop2">Explore Support</p>
                  <p className="drop3">iphone</p>
                  <p className="drop3">Mac</p>
                  <p className="drop3">iPad</p>
                  <p className="drop3">Music </p>
                  <p className="drop4">Explore Support</p>
                </div>
                <div className="dropdown1">
                  <p className="drop2">Get Help</p>
                  <p className="drop4">Communities</p>
                  <p className="drop4">Check Coverage</p>
                  <p className="drop4">Contact Us</p>
                </div>
                <div className="dropdown1">
                  <p className="drop2">Helpful Topics</p>
                  <p className="drop4">Apple ID & Password</p>
                  <p className="drop4">Billing & Subscriptions</p>
                  <p className="drop4">Find My</p>
                </div>
              </div>
            </div>
          </Link>
          <p>Where to Buy</p>
          <div className="img2">
            <img src="src\assets\magnifying-glass-solid.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
