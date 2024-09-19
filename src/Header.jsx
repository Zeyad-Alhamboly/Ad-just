import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="overlay">
        <nav className="container  overflow-hidden p-4 flex flex-wrap justify-between items-center">
          <img src="logo.png" alt="AD-JUST" className="ml-6" />
          <div className="text-white flex gap-10">
            <a
              href="#"
              className="hover:bg-green-800 transition px-4 py-2 rounded-full"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-green-800 transition px-4 py-2 rounded-full"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:bg-green-800 transition px-4 py-2 rounded-full"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="hover:bg-green-800 transition px-4 py-2 rounded-full"
            >
              Reviews
            </a>
            <a href="#" className="bg-green-800 px-4 py-2 rounded-full">
              Contact
            </a>
          </div>
        </nav>
        <div className="header-content text-white px-14 mt-16">
          <p className="text-7xl font-bold">AD-JUST <br/> Advertising <br/> Agency</p>
          <p className='w-1/4 font-extralight mt-5'>Leading and documented Egyptian company working in advertising in various fields and specializations</p>
          <a href="/rwara" className="px-4 py-2 border mt-4 block w-fit rounded hover:bg-green-500 transition">About Us</a>
        </div>
      </div>
    </div>
  );
}
