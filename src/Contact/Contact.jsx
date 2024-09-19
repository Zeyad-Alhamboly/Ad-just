import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-container text-white mt-10 container m-auto px-4">
      <div className="w-fit relative m-auto">
        <div className="light-div6"></div>
        <h1 className="text-7xl text-center mb-2 font-semibold uppercase">
          Contact With US
        </h1>
      </div>
      <p className="text-center mb-9">
        Adjust stands out by prioritizing customer <br /> opinions, using their
        feedback to drive <br /> continuous improvement.
      </p>

      <div className="section1 grid lg:grid-cols-2 gap-4 rounded-lg px-5 ">
        <div className=" flex gap-5   flex-col p-5 ">
          <div className="flex gap-6 items-center ">
            <img src="phone.png" width={40} height={40} alt="" />
            <div className="p-4 flex items-center shadow  gap-2 bg-green-950 rounded-full">
              <p className="bg-green-400 text-center w-2 h-2 rounded-full"></p>
              <p> Available For You</p>
            </div>
          </div>
          <div>
            <p className="text-5xl font-bold">Don't miss the chance !</p>
            <p>
              Connect with the official Adjust accounts and unleash the
              creativity arrow!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 py-16">
          <div className="flex gap-5 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
            <FaPhoneAlt />
          </div>
          <div className="magic py-5 px-10  rounded-lg max-w-96 flex items-start">
            <p>Let’s create magic together ✨ </p>
          </div>
        </div>
      </div>

      <div className="section2 rounded-lg mt-20 max-w-5xl m-auto h-48 flex flex-col items-center p-5 justify-center text-black">
        <p className="text-3xl mb-2 font-semibold text-center ">Ready to contact you!</p>
        <p className="mb-2">
          Leave your email and we will contact you within 24 hours
        </p>
        <div className="flex gap-5 mt-2">
          <input className="p-2 px-5 outline-none rounded " type="email" placeholder="email@example.com" />
          <button className="bg-green-800 text-white px-4 py-2 rounded-lg transition hover:bg-green-600">Submit</button>
        </div>
      </div>
    </div>
  );
}
