import React from "react";

const Values = () => {
  return (
    <div className="values">
      <div className="mission">
        <div className="mission-statement">
          <div className="mission-heading">
            Our <span>Mission</span>
          </div>
          <div className="mission-para">
            <p>
              Our mission is to empower students with a solid grasp of
              mathematical principles, fostering academic excellence. We aim to
              motivate them to pursue higher education globally, contributing to
              personal growth and national prosperity, while returning to serve
              India effectively.
            </p>
          </div>
        </div>
        <div className="mission-image">
          <img src="./assets/mission-image.svg" alt="" />
        </div>
      </div>
      <div className="vision">
        <div className="vision-image">
          <img src="./assets/vision-image.svg" />
        </div>
        <div className="vision-statement">
          <div className="vision-heading">
            Our <span>Vision</span>
          </div>
          <div className="vision-para">
            <p>
              At our institution, Athavale Sir's vision extends beyond
              academics, aiming to ignite a deep passion for the subject in
              every student. His goal is to empower them to achieve remarkable
              success in any endeavour they choose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
