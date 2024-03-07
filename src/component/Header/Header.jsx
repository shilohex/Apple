import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import blacklogo from '../../assets/blackLogo.svg'
const Header = ({bgcol, txtcol}) => {
  return (
    <>
      <div id="comp" style={{backgroundColor:bgcol,color:txtcol}}>
        <div className="nav">
          <Link to={'/'}>{bgcol=="white"?<img src={blacklogo} /> :<img src="\resources\applegrey.svg" alt="" />}</Link>
          <p>Store</p>
          <Link to={'/mac'}><p>Mac</p></Link>
          <Link to={'/ipad'}><p>ipad</p></Link>
          <p>iphone</p>
          <p> watch</p>
          <p>vision</p>
          <p>Airpods</p>
          <p> Tv & Home</p>
          <p>Entertainment</p>
          <p>Accesories</p>
          <p>Support</p>
        </div>
      </div>
    </>
  );
};
export default Header;
