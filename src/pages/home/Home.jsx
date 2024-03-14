import React from "react";
import Header from "../../component/Header/Header";
import backgroundimg from "../../assets/mac.jpg";
import "./home.css";
import background2 from "../../assets/imgsec.jpg";
import background3 from "../../assets/iphone.jpg";
import sign from "../../assets/greaterthan.svg";
import background4 from "../../assets/promoiphone.jpg";
import background5 from "../../assets/ipad.jpg";
import background6 from "../../assets/black.jpg";
import background7 from "../../assets/drive.jpg";
import disk from "../../assets/disk.png";

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
              <h1> iPhone 15 Pro </h1>
              <p id="st">Titanium. So strong. So light. So Pro</p>
              <div className="nav">
                <p>Learn more</p>
                <img src={sign} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="box">
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
              <img src={background5} alt="" />
              <div className="imgdiv">
                <h1> iPad </h1>
                <p> Loveable. Drawable. Magical</p>
                <div className="nav">
                  <p>Learn more</p>
                  <img src={sign} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div>
              <img src={background6} alt="" />
              <div className="imgdiv" id="color">
                <h1> iPad Pro </h1>
                <p>
                  Supercharged by <img src={disk} alt="" />
                </p>
                <div className="nav">
                  <p>Learn more</p>
                  <img src={sign} alt="" />
                </div>
              </div>
            </div>

            <div>
              <img src={background7} alt="" />
              <div className="imgdiv">
                <h1> Mac Studio </h1>
                <p>Supercharged by M2 Max and M2 Ultra.</p>
                <div className="nav">
                  <p>Learn more</p>
                  <img src={sign} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="footer">
            <div className="ftxt">
              <h5>Explore</h5>
              <p>Mac</p>
              <p>iPad</p>
              <p>iPhone</p>

              <div>
                <h5>Account</h5>
                <p>Manage your Apple ID</p>
              </div>

              <div>
                <h5>Apples Values</h5>
                <p>Privacy</p>
              </div>

              <div>
                <h5>About Apple</h5>
                <p>Newsroom</p>
                <p>Apple Leadership</p>
                <p>Career Opportunities</p>
                <p>Investors</p>
                <p>Ethics and compliance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
