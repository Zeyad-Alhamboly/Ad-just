import React from "react";
import "./BeyondPortfolio.css";
export default function BeyondPortfolio() {
  return (
    <div className="container mx-auto px-4 py-4 text-white flex flex-col lg:flex-row gap-7 relative">
      <div className="light-div1 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:z-0"></div>
      <div className="light-div2 lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-full lg:z-0"></div>

      <div className="w-full lg:w-1/3">
        <p className="kosomk">Beyond Portfolio</p>
        <h1 className="text-6xl mt-3">
          AD-JUST{" "}
          <strong>
            IN <br /> 10 SEC
          </strong>
        </h1>
        <div className="company-overview mt-4 p-5 shadow border rounded-lg w-full lg:w-72 relative overflow-hidden">
          <p className=" mb-2 flex items-center gap-2">
            <img src="path.png" alt="" /> Company Overview
          </p>
          <p className="font-extralight">
            It is a digital advertising agency in Egypt, established in 2023 We
            set the highest standards in the field of marketing thanks to our
            creative solutions Although it was established a short time ago, it
            has proven to have experience and includes many clients in all
            fields
          </p>
          <div className="light-div3 absolute top-0 left-0 w-full h-full z-0"></div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <div className="service p-5 border border-gray-400 rounded-lg w-full lg:w-80 relative overflow-hidden">
          <div className="light-div4 absolute top-0 left-0 w-full h-full z-0"></div>
          <p className=" mb-2 flex items-center gap-2">
            <img src="path.png" alt="" /> Services
          </p>
          <p>Adjust offers many services, here are some of them:</p>
          <ul className="grid grid-rows-4 grid-flow-col gap-4 mt-4">
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="web-design.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="customer-service.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="print.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="content.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="copy-writing.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="narrator.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="moderator.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="study.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="video.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="accountant.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="camera.png" alt="" width={30} height={30} />
            </li>
            <li className="border p-2 border-gray-400 w-fit rounded">
              <img src="period.png" alt="" width={30} height={30} />
            </li>
          </ul>
        </div>

        <div className="feedbacks mt-2  rounded-lg flex flex-wrap flex-col px-5 py-2 text-black">
          <div className="relative flex">
            <img src="client1.png" alt="" className="w-14 h-14" />
            <img
              src="client2.png"
              alt=""
              className="absolute left-10 w-14 h-14"
            />
          </div>
          <p className="mt-2 text-black">
            More Than <strong>+5 Feedbacks</strong>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <div>
          <iframe
            className="rounded-lg"
            width="100%"
            height="200"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
        <div className="important-clients border border-gray-400 rounded-lg mt-4 px-6 py-4 relative overflow-hidden">
          <div className="light-div5 absolute top-0 left-0 w-full h-full z-0"></div>

          <p className=" mb-2 flex items-center gap-2">
            <img src="path.png" alt="" /> Most Important Clients
          </p>
          <p>
            We confidently serve the most important clients in the Middle East.
          </p>
          <div className="clients flex justify-around flex-wrap gap-3 items-center mt-3">
            <p className="client-name text-black px-6 py-2 font-semibold rounded-full ">
              Dr Amr Mansy
            </p>
            <p className="client-name text-black px-6 py-2 font-semibold rounded-full ">
              Zahya clinic
            </p>
            <p className="client-name text-black px-6 py-2 font-semibold rounded-full ">
              Dr Walid El Shazly
            </p>
            <p className="client-name text-black px-6 py-2 font-semibold rounded-full ">
              Scarpa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

