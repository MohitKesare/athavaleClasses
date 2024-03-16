import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import("../styles/carousel.css");
const images = [
  {
    image: "./assets/carousel-1.svg",
  },
  {
    image: "./assets/carousel-2.svg",
  },
  {
    image: "./assets/carousel-3.svg",
  },
  {
    image: "./assets/carousel-1.svg",
  },
  {
    image: "./assets/carousel-2.svg",
  },
  {
    image: "./assets/carousel-3.svg",
  },
];
const Carousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    beforeChange: (current, next) => setImageIndex(next),
  };
  // const [autoSlide, setAutoSlide] = useState(true); // State to control auto-sliding

  // useEffect(() => {
  //   let intervalId;
  //   if (autoSlide) {
  //     intervalId = setInterval(() => {
  //       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     }, 5000); // Change slide every 5 seconds
  //   }
  //   return () => clearInterval(intervalId); // Cleanup function to clear the interval on unmount
  // }, [autoSlide, images.length]);
  return (
    <div className="carousel-container">
      <div className="carousel-heading">
        <h3>Word Of Mouth</h3>
        <p>
          Get an honest perspective from our students and parents through their
          real experiences
        </p>
      </div>
      <Slider {...settings} className="carousel">
        {images.map((img, index) => (
          <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
