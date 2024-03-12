import React from "react";
import Header from "../../component/Header/Header";
import backgroundimg from "../../assets/mac.jpg";
import "./home.css";
import background2 from "../../assets/imgsec.jpg";
import background3 from "../../assets/iphone.jpg";
import sign from "../../assets/greaterthan.svg";
import background4 from "../../assets/promoiphone.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <section>
          <div className="mac">
            <img src={backgroundimg} alt="" />
            <div className="imgdiv" id="first">
              <h1> MacBook Pro</h1>
              <p>Mind blowing. Head-turning.</p>

              <div className="nav">
                <p>Learn more</p>
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mac" id="sec">
            <img src={background2} alt="" />
            <div className="imgdiv">
              <h1> iMac</h1>
              <p>Packed with more juice.</p>
              <div className="nav">
                <p>Learn more</p>
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mac" id="third">
            <img src={background3} alt="" />
            <div className="imgdiv">
              <h1> iPhone 15 Pro</h1>
              <p id="st">Titanium. So strong. So light. So Pro</p>
              <div className="nav">
                <p>Learn more</p>
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="david">
            <div>
              <img src={background4} alt="" />
              <div className="imgdiv">
                <h1> iPhone 15 </h1>
                <p>New camera. New design. Newphoria</p>
                <div className="nav">
                  <p>Learn more</p>
                  <img src={sign} alt="" />
                </div>
              </div>
            </div>
            <div>
              <img src={background4} alt="" />
            </div>
          </div>
          <div className="david">
            <div>
              <img src={background4} alt="" />
            </div>
            <div>
              <img src={background4} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
