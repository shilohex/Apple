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
          <p>Support</p>
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
