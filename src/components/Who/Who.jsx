import React from "react";
import "./Who.css";

const Who = () => {
  return (
    <div className="who">
      <div className="who-desc">
        <div className="who-head">Who We Are</div>
        <div className="who-content">
          <p>
            Our institute, led by the passionate Athavale Sir, who believe in
            fostering a love for mathematics, regardless of prior academic
            standing. We prioritize building a strong conceptual foundation,
            nurturing well-rounded individuals, and empowering students through
            additional support. We strive to ignite a spark for learning through
            engaging methods and motivational stories, ultimately preparing
            students for success in their chosen fields and beyond.
          </p>
        </div>
      </div>
      <div className="who-pic">
        <img src="./assets/teacher-pic.svg" />
      </div>
    </div>
  );
};

export default Who;
