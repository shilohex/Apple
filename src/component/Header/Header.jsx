import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import blacklogo from "../../assets/blacklogo2.svg";

const Header = ({ bgcol, txtcol }) => {
  return (
    <>
      <div id="comp" style={{ backgroundColor: bgcol, color: txtcol }}>
        <div className="nav">
          <Link to={"/"}>
            {bgcol == "white" ? (
              <img src={blacklogo} />
            ) : (
              <img src="\resources\applegrey.svg" alt="" />
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

      <div id="mac">
        <div>
          <h1>
            {" "}
            <b>MacBook Pro </b>
          </h1>
          <div>
            <p>Mind blowing. Head-turning.</p>
          </div>
          <div>
            <nav>
              <a href="Learn more >"> Learn more {">"}</a>
            </nav>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
