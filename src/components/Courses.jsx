import React from "react";
import "../styles/courses.css";

const Courses = () => {
  return (
    <div className="courses">
      <div className="course-heading"></div>
      <div className="course-content">
        <div className="course-card">
          <div className="course-card-image">
            <img src="./assets/course-card.png" />
          </div>
          <div className="course-card-content">
            <div className="card-name">
              <h3>Ultrices arcu duis porttitor urna.</h3>
            </div>
            <div className="card-desc">
              <p>
                Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
                pulvinar in. Lacus adipiscing at eget et euismod justo.
                Habitasse vitae volutpat diam dignissim.
              </p>
            </div>
            <button className="card-button">Enroll Now</button>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-image">
            <img src="./assets/course-card.png" />
          </div>
          <div className="course-card-content">
            <div className="card-name">
              <h3>Ultrices arcu duis porttitor urna.</h3>
            </div>
            <div className="card-desc">
              <p>
                Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
                pulvinar in. Lacus adipiscing at eget et euismod justo.
                Habitasse vitae volutpat diam dignissim.
              </p>
            </div>
            <button className="card-button">Enroll Now</button>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-image">
            <img src="./assets/course-card.png" />
          </div>
          <div className="course-card-content">
            <div className="card-name">
              <h3>Ultrices arcu duis porttitor urna.</h3>
            </div>
            <div className="card-desc">
              <p>
                Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
                pulvinar in. Lacus adipiscing at eget et euismod justo.
                Habitasse vitae volutpat diam dignissim.
              </p>
            </div>
            <button className="card-button">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
