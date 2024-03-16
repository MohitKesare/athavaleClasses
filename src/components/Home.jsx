import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-home">
        <div className="col1">
          <div className="head-box">
            <h3 className="statement">
              Empowering Minds,
              <br /> Inspiring Futures
            </h3>
            <p className="home-para">
              Transformative Mathematics Education at <br />
              Athavale Classes
            </p>
            <Link>
              <button className=" home-btn">Enroll Now</button>
            </Link>
          </div>
        </div>
        <div className="col2">
          <div className="home-image">
            <img src="./assets/home-img.svg" />
          </div>
        </div>
      </div>
      <div className="sec-home">
        <div className="source">
          <div className="source-box">
            <div className="source-image">
              <img src="./assets/inspiring-atmosphere.svg" />
            </div>
            <div className="source-para">
              <p className="source-text">
                Inspiring <br />
                Atmosphere
              </p>
            </div>
          </div>
        </div>
        <div className="source">
          <div className="source-box">
            <div className="source-image">
              <img src="./assets/individualized-attention.svg" />
            </div>
            <div className="source-para">
              <p className="source-text">
                Individualized <br />
                Attention
              </p>
            </div>
          </div>
        </div>
        <div className="source">
          <div className="source-box">
            <div className="source-image">
              <img src="./assets/practice-tests.svg" />
            </div>
            <div className="source-para">
              <p className="source-text">
                Practice <br />
                Tests
              </p>
            </div>
          </div>
        </div>
        <div className="source">
          <div className="source-box">
            <div className="source-image">
              <img src="./assets/educational-materials.svg" />
            </div>
            <div className="source-para">
              <p className="source-text">
                Educational <br />
                Materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
