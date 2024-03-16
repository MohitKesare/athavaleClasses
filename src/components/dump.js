import React, { useState } from "react";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
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

// .courses {
//   display: flex;
//   flex-direction: column;
//   /* border: 2px solid red; */
// }
// .course-heading {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: fit-content;
//   /* background-color: skyblue; */
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 8vh;
//   margin-bottom: 0;
// }
// .course-head {
//   font-family: "Satoshi-Variable";
//   font-weight: 500;
//   font-size: 40px;
//   line-height: 54px;
//   text-align: center;
// }
// .course-line {
//   font-family: "Satoshi-Variable";
//   font-size: 16px;
//   line-height: 22.4px;
//   text-align: center;
//   color: rgba(70, 70, 70, 1);
//   margin-top: 1vh;
// }
// .course-content {
//   width: 80%;
//   height: fit-content;
//   /* background-color: rgb(186, 204, 93); */
//   /* margin-top: 10vh; */
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   margin-top: 3vh;
// }
// .course-card {
//   /* border: 1px solid black; */
//   width: 94%;
//   margin: auto;
//   height: 100%;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   margin-top: 2vh;
// }
// .course-card-image {
//   height: 55%;
//   width: 100%;
// }
// .course-card-image img {
//   width: 100%;
//   height: 100%;
// }
// .course-card-main {
//   width: 90%;
//   height: 45%;
//   /* background-color: skyblue; */
//   margin: auto;
//   justify-content: space-between;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// }
// .course-card-heading {
//   font-family: "Satoshi-Variable";
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 32.4px;
//   margin-top: 1vh;
// }
// .course-card-para {
//   font-family: "Satoshi-Variable";
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 21.6px;
//   color: rgba(70, 70, 70, 1);
// }
// .course-card-btn {
//   margin-top: 1vh;
//   width: 60%;
//   height: 5vh;
//   margin-bottom: 2vh;
//   border-radius: 20px;
//   background-color: rgba(0, 121, 173, 1);
//   border: none;
//   font-family: "Satoshi-Variable";
//   font-weight: 700;
//   font-size: 18px;
//   text-align: center;
//   color: white;
// }
// .course-card-btn:hover {
//   background-color: rgb(3, 96, 136);
//   cursor: pointer;
// }

// /* courses responsive styling */
// @media screen and (max-width: 1100px) {
//   .course-head {
//     font-family: "Satoshi-Variable";
//     font-weight: 500;
//     font-size: 30px;
//     line-height: 40px;
//     text-align: center;
//   }
//   .course-line {
//     font-family: "Satoshi-Variable";
//     font-size: 13px;
//     line-height: 20px;
//     text-align: center;
//     color: rgba(70, 70, 70, 1);
//     margin-top: 1vh;
//   }
//   .course-card-btn {
//     /* height: 10vh; */
//   }
// }
// @media screen and (max-width: 950px) {
//   .course-content {
//     display: flex;
//     flex-direction: column;
//   }
// }
// @media screen and (max-height: 900px) {
//   .course-card {
//     height: 80vh;
//   }
// }
// @media screen and (max-height: 750px) {
//   .course-content {
//     height: fit-content;
//   }
//   .course-card {
//     height: 100vh;
//   }
//   .course-card-btn {
//     height: 10vh;
//   }
// }
// @media screen and (max-height: 450px) {
//   .course-content {
//     height: fit-content;
//   }
//   .course-card {
//     height: 120vh;
//   }
// }

{
  /* <div className="courses">
<div className="course-heading">
  <h3 className="course-head">Our Courses</h3>
  <p className="course-line">
    Achive your academic goals with our
    <br /> personalized learning approach
  </p>
</div>
<div className="course-content">
  <div className="course-card">
    <div className="course-card-image">
      <img src="./assets/course-card-image.png" />
    </div>
    <div className="course-card-main">
      <div className="course-card-heading">
        <h3 className="course-card-heading-text">
          Ultrices arcu duis porttitor urna.
        </h3>
      </div>
      <div className="course-card-para">
        <p>
          Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
          pulvinar in. Lacus adipiscing at eget et euismod justo.
          Habitasse vitae volutpat diam dignissim.
        </p>
      </div>
      <button className="course-card-btn">Enroll Now</button>
    </div>
  </div>
  <div className="course-card">
    <div className="course-card-image">
      <img src="./assets/course-card-image.png" />
    </div>
    <div className="course-card-main">
      <div className="course-card-heading">
        <h3 className="course-card-heading-text">
          Ultrices arcu duis porttitor urna.
        </h3>
      </div>
      <div className="course-card-para">
        <p>
          Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
          pulvinar in. Lacus adipiscing at eget et euismod justo.
          Habitasse vitae volutpat diam dignissim.
        </p>
      </div>
      <button className="course-card-btn">Enroll Now</button>
    </div>
  </div>
  <div className="course-card">
    <div className="course-card-image">
      <img src="./assets/course-card-image.png" />
    </div>
    <div className="course-card-main">
      <div className="course-card-heading">
        <h3 className="course-card-heading-text">
          Ultrices arcu duis porttitor urna.
        </h3>
      </div>
      <div className="course-card-para">
        <p>
          Ultrices arcu duis porttitor urna. Morbi sem arcu id tortor id
          pulvinar in. Lacus adipiscing at eget et euismod justo.
          Habitasse vitae volutpat diam dignissim.
        </p>
      </div>
      <button className="course-card-btn">Enroll Now</button>
    </div>
  </div>
</div>
</div> */
}

// if (menuItems) {
//   return (
//     <Menu
//       key={link.label}
//       trigger="hover"
//       transitionProps={{ exitDuration: 0 }}
//       withinPortal
//     >
//       <Menu.Target>
//         <a
//           href={link.link}
//           className={classes.link}
//           onClick={(event) => event.preventDefault()}
//         >
//           <Center>
//             <span className={classes.linkLabel}>{link.label}</span>
//             <IconChevronDown size="0.9rem" stroke={1.5} />
//           </Center>
//         </a>
//       </Menu.Target>
//       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
//     </Menu>
//   );
// }
