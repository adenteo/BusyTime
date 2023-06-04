"use client";

import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:drop-shadow-lg drop-shadow-md flex items-center flex-wrap bg-gray-600 p-4">
      <div className="flex items-center flex-shrink-0 text-white text-3xl font-bold ml-4 mr-6 lg:mr-72">
        <a href="#homePage">
          {" "}
          <AiOutlineHome />
        </a>
      </div>
      <div className="block flex-grow text-right text-white lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:justify-right lg:w-auto lg:text-right ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg text-white lg:flex-grow">
          {/* <a href="#aboutPage" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
           About
         </a> */}
          <a
            href="#helpPage"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            <div className="flex">
              {" "}
              <p className="font-medium mr-2">Help</p>{" "}
              <MdOutlineHelp className="mr-5 text-xl mt-1 hidden lg:block" />
            </div>
          </a>
          <a
            href="#contactPage"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            <div className="flex">
              {" "}
              <p className="font-medium mr-2">Contact Me</p>{" "}
              <AiFillMessage className="text-xl mt-1 hidden lg:block" />
            </div>
          </a>
          {/* <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a> */}
        </div>
        {/* <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Click Me
         </button>
       </div> */}
      </div>
    </nav>
  );
}
export default Navbar;
