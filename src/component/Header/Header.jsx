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
          <p>Mind blowing. Head-turning.</p>
          <div>
            <nav>
              <a href="Learn more >"> Learn more {">"}</a>
            </nav>
          </div>
        </div>
      </div>

      <section className="imgm">
        <div>
          <img src="src\assets\hero_mbp__fx6ku12vgw2m_largetall.jpg" alt="" />
        </div>
      </section>
      <section className="Imac">
        <div>
          <h1>iMac</h1>
          <p>Packed with more juice.</p>
          <nav>
            <a href="Learn more >"> Learn more {">"}</a>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Header;
