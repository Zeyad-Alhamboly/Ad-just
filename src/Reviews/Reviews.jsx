import React from "react";
import Slider from "react-slick";
import './Reviews.css'
export default function Reviews() {
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
  return (
    <div className="reviews-container text-white">
      <div className="w-fit relative m-auto">
        <div className="light-div6"></div>
        <h1 className="text-7xl text-center mb-2 font-semibold uppercase">
          Reviews
        </h1>
      </div>
      <p className="text-center mb-9">
        Adjust stands out by prioritizing customer <br /> opinions, using their
        feedback to drive <br /> continuous improvement.
      </p>

      <div className="slider-container w-11/12 m-auto">
        <Slider {...settings}>
          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>

          <div className="review-card w-1/5 border border-gray-600 rounded p-5 text-center relative">
            <div className="light-div9"></div>
            <img className="block m-auto mb-1" src="review.png" alt="" />
            <p className="text-xs mb-1">Dr : Amr Mohamed</p>
            <p className="text-xs mb-1">CEO Leader AT FCES</p>
            <p className="text-xs mb-1">
              Working with [Media Agency Name] was a seamless experience. They
              expertly translated complex medical concepts into clear, engaging
              content while maintaining accuracy and professionalism. Highly
              recommended for their creativity and dedication.
            </p>
            <p className="text-xs mb-1">[FB] Review</p>
          </div>


        </Slider>
      </div>
    </div>
  );
}
