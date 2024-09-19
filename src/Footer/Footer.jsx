import React from "react";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="max-w-7xl m-auto p-4">
      <section className="mt-20 flex justify-between items-center pb-2   border-b border-gray-500 ">
        <img src="logo.png" width={175} height={72} alt="" />
        <div className="lg:flex grid grid-cols-2 text-white gap-5">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </section>
      <section className="lg:flex grid grid-cols-2 justify-between items-center py-5  ">
        <div className="flex text-white gap-5">
          <BsInstagram />
          <FaSquareFacebook />
          <RiTwitterXLine />
          <BsYoutube />
        </div>
        <p className="text-white">&copy; Adjust 2024 | All rights Reserved</p>
      </section>
    </footer>
  );
}
