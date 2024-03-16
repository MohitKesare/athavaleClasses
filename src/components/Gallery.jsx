import React from "react";


const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-head">
        <div className="gallery-heading">
          <h3>Gallery Space</h3>
        </div>
        <div className="gallery-heading-text">
          <p>
            Candid photos of students and teachers engaged in learning
            activities.
          </p>
        </div>
      </div>
      <div className="gallery-content">
        <div className="gallery-image">
          <img src="./assets/gallery-1.svg" />
        </div>
        <div className="gallery-image">
          <img src="./assets/gallery-2.svg" />
        </div>
        <div className="gallery-image">
          <img src="./assets/gallery-3.svg" />
        </div>
        <div className="gallery-image">
          <img src="./assets/gallery-4.svg" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
