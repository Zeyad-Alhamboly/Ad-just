import "./Header.css";
import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div className="header">
      <div className="overlay">
        <Navbar />

        <div className="header-content text-white px-3 lg:px-14 mt-16">
          <p className="text-7xl font-bold text-center lg:text-left">
            AD-JUST <br /> Advertising <br /> Agency
          </p>
          <p className=" text-center lg:text-left lg:w-1/4 font-extralight mt-5">
            Leading and documented Egyptian company working in advertising in
            various fields and specializations
          </p>
          <a
            href="/rwara"
            className="px-4 py-2 border mt-4 block w-fit rounded hover:bg-green-500 transition m-auto lg:mx-0"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}
