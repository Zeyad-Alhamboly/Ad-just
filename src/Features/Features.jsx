import React from "react";
import "./Features.css";
import Slider from "react-slick";
export default function Features() {
  //   const settings = {
  //     className: "center",
  //     centerMode: true,
  //     dots: true,
  //     centerPadding: "60px",
  //     slidesToShow: 4,
  //     infinite: true,
  //     speed: 500,
  //     slidesToScroll: 4,
  //     initialSlide: 0,

  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
  return (
    <div className="features-container text-white mt-16 mb-10 px-7 relative ">
      <div className="light-div7"></div>
      <div className="light-div8"></div>
      <div className="w-fit relative m-auto">
        <div className="light-div6"></div>
        <h1 className="text-7xl text-center mb-2 font-semibold uppercase">
          Features
        </h1>
      </div>
      <p className="text-center mb-9">
        Adjust Company is distinguished by providing <br /> special features
        that guarantee customer <br /> comfort and speed of work.
      </p>

      <div className="slider-container w-11/12 m-auto">
        <Slider {...settings}>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
          <div id="a7a" className="bg-gray-800 text-white ">
            <img src="premium.png" alt="" width={75} height={75} />
            <p>High quality standards</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
