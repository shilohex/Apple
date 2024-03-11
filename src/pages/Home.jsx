import React from "react";
import Header from "../component/Header/Header";
import backgroundimg from "../../src/assets/mac.jpg";
const Home = () => {
  return (
    <>
      <Header />
      <section>
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
      </section>

      <section className="imgm">
        <div>
          <img src="src\assets\mac.jpg" alt="" />
        </div>
      </section>
      <section className="imgm">
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

export default Home;
