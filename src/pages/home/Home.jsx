import React from "react";
import Header from "../../component/Header/Header";
import backgroundimg from "../../assets/mac.jpg";
import "./home.css";
import background2 from "../../assets/imgsec.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="mac" id="first">
          <img src={backgroundimg} alt="" />
          <div className="imgdiv">
            <h1> MacBook Pro</h1>
            <p>Mind blowing. Head-turning.</p>
            <div>
              <nav>
                <a href="Learn more >"> Learn more {">"}</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mac">
          <img src={background2} alt="" />
          <div className="imgdiv">
            <h1> iMac</h1>
            <p>Packed with more juice.</p>
            <div>
              <nav>
                <a href="Learn more >"> Learn more {">"}</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="">
          {/* <div>
          <h1>iMac</h1>
          <p>Packed with more juice.</p>
          <nav>
            <a href="Learn more >"> Learn more {">"}</a>
          </nav>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
