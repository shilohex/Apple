import React from "react";
import Header from "../component/Header/Header";
import "./Support.css";
import top from "../assets/supportAsset/asset 0.jpeg";
import top1 from "../assets/supportAsset/asset 1.png";
import top2 from "../assets/supportAsset/asset 2.png";
import top3 from "../assets/supportAsset/asset 3.png";
import top4 from "../assets/supportAsset/asset 4.png";
import top5 from "../assets/supportAsset/asset 5.svg";
import top6 from "../assets/supportAsset/asset 6.svg";
import top7 from "../assets/supportAsset/asset 7.svg";
import top8 from "../assets/supportAsset/asset 8.svg";
import top9 from "../assets/supportAsset/asset 9.svg";
import top10 from "../assets/supportAsset/asset 10.svg";
import top11 from "../assets/supportAsset/asset 11.svg";
import top12 from "../assets/supportAsset/asset 12.svg";
import top13 from "../assets/supportAsset/asset 13.svg";
import top14 from "../assets/supportAsset/asset 14.svg";
import top15 from "../assets/supportAsset/asset 15.svg";
import top16 from "../assets/supportAsset/asset 16.svg";
import top17 from "../assets/supportAsset/asset 17.svg";
import top18 from "../assets/supportAsset/asset 18.svg";
import top19 from "../assets/supportAsset/asset 19.svg";
import top20 from "../assets/supportAsset/asset 20.svg";
import top21 from "../assets/supportAsset/asset 21.svg";
import top22 from "../assets/supportAsset/asset 22.svg";
import top23 from "../assets/supportAsset/asset 23.svg";
import top24 from "../assets/supportAsset/asset 24.svg";
import top25 from "../assets/supportAsset/asset 25.svg";
import top26 from "../assets/supportAsset/asset 26.svg";

const Support = () => {
  return (
    <div id="support">
      <Header bgcol={"white"} txtcol={"black"} />
      <div>
        <div id="support-top-div">
          <img id="support-top" src={top} alt="" />
        </div>
        <h1 id="sec">Apple Support</h1>
        <div id="sec1">
          <div className="sec2">
            <img src={top1} alt="" />
            <p>iPhone</p>
          </div>
          <div className="sec2">
            <img src={top2} alt="" />
            <p>Mac</p>
          </div>
          <div className="sec2">
            <img src={top3} alt="" />
            <p>iPad</p>
          </div>
          <div className="sec2">
            <img src={top4} alt="" />
            <p>Music</p>
          </div>
        </div>
      </div>
      <div id="sec3">
        <div className="sec3container">
          <div className="sec3a">
            <img src={top5} alt="" />
            <p className="sec3b">Forget Apple ID password</p>
          </div>
        </div>
        <div className="sec3container">
          <div className="sec3a">
            <img src={top6} alt="" />
            <p className="sec3b">Billing and subscription</p>
          </div>
        </div>
        <div className="sec3container">
          <div className="sec3a">
            <img src={top7} alt="" />
            <p className="sec3b">Find My</p>
          </div>
        </div>
      </div>
      <div id="sec4">
        <div id="sec4a">
          <p>Search for more topics</p>
        </div>
        <div id="sec4b">
          <img src={top8} alt="" />
          <div id="sec4c-div">
            <input id="sec4c" type="text" required />
            <label htmlFor="sec4c">Search Support</label>
          </div>
        </div>
      </div>
      <div id="sec5">
        <div id="sec5a">
          <p id="sec5b">My Support</p>
          <p id="sec5c">
            Get up to date information about your Apple products including
            coverage, repairs, and much more.
          </p>
          <div id="sec5f">
            <div id="sec55">
              {" "}
              <p id="sec5d">Sign in to My Support </p> <p id="sec5e"> &gt;</p>{" "}
            </div>
          </div>
        </div>
        <div id="sec6">
          <p id="sec6a">Beware of counterfeit parts</p>
         <span id="sec6c">Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an <span id="sec6b">Apple Authorized Service Provider</span>. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</span>
          <p id="sec6d">Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
        </div>
      </div>
      <footer>
        <hr />
        <div id="sec7">
        <img src={top11} alt="" />
        <p> &gt;</p>
        <p>Support</p>
        </div>
         <hr />
      </footer>
    </div>
  );
};

export default Support;
