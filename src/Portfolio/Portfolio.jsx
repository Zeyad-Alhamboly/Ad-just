import React from "react";
import "./Portfolio.css";
import Slider from "react-slick";

var settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        variableWidth: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        variableWidth: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
};

export default function Portfolio() {
  return (
    <div className="portfolio-container text-white mt-16 mb-10 px-7">
      <div className="w-fit relative m-auto">
        <div className="light-div6"></div>
        <h1 className="text-7xl text-center mb-2 font-semibold uppercase">
          Portfolio
        </h1>
      </div>
      <p className="text-center mb-9">
        Adjust Company is distinguished by providing <br /> special features
        that guarantee customer <br /> comfort and speed of work.
      </p>

      <div className="slider-container w-11/12 m-auto">
        <Slider {...settings}>
          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>

          <div class="portfolio">
            <div class="transbox">
              <p>backdrop-filter: blur(5px)</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
