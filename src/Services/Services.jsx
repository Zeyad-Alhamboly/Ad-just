import React from "react";
import Slider from "react-slick";
import "./Services.css";
export default function Services() {
  const settings = {
    className: "center",
    infinite: false,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="text-white  px-10 py-5 mt-10 relative">
      <div className="light-div7"></div>
      <div className="light-div8"></div>

      <div className="w-fit m-auto relative">
        <div className="light-div6"></div>
        <h1 className="text-7xl text-center mb-2 font-semibold">SERVICES</h1>
      </div>
      <p className="text-center mb-9">
        Adjust Company provides many distinctive,
        <br /> important and unique services in one place.
      </p>

      <div className="slider-container w-11/12 m-auto mb-9 text-black lg:hidden">
        <Slider {...settings}>
          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>

          <div className="service-card rounded">
            <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
              <div className="p-1 border-2 rounded-lg border-yellow-200">
                <img src="graphic-designer.png" alt="" width={50} height={50} />
              </div>
              <div>
                <p>Graphic Designer 1</p>
                <p>Creative visual solutions</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="services-containr container mt-9 lg:grid lg:grid-cols-3 grid-cols-2 hidden lg gap-5 m-auto items-stretch">
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
        <div className="service-card rounded">
          <div className="text-white px-5 py-3 rounded-lg mr-5 flex items-center flex-wrap gap-5">
            <div className="p-1 border-2 rounded-lg border-yellow-200">
              <img src="graphic-designer.png" alt="" width={50} height={50} />
            </div>
            <div>
              <p>Graphic Designer 1</p>
              <p>Creative visual solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
