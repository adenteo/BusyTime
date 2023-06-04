"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import buslogo from ".../public/buslogo.png";
import { AiOutlineSend } from "react-icons/ai";
import React, { useState } from "react";

export default function BusHome() {
  const router = useRouter();
  const [BusStopNum, setBusStopNum] = useState("");

  function handleClick() {
    router.push(`/Timings?BusStopNum=${BusStopNum}`);
    console.log(BusStopNum);
  }

  function handleInputChange(e) {
    setBusStopNum(e.target.value);
  }

  return (
    <div className="bg-gray-600 h-full">
      <div className="text-center pt-16 md:pt-11">
        <h1>
          <span className="text-6xl lg:text-7xl text-red-300 font-extrabold">
            Bus
          </span>
          <span className="text-6xl lg:text-7xl text-white font-bold">
            yTime
          </span>
        </h1>
      </div>

      <div className="flex text-center justify-center mx-auto mt-10 lg:ml-5 ">
        <img
          className="w-7/12 md:w-5/12 xl:w-3/12"
          src="buslogo.png"
          alt="bus"
        ></img>
      </div>

      <div className="flex text-center justify-center mt-5">
        <h3 className="text-2xl text-white font-medium"> Where's my bus?</h3>
      </div>

      <div className="flex justify-center mt-5 ">
        <input
          type="number"
          value={BusStopNum}
          onChange={handleInputChange}
          placeholder="Enter bus stop number"
          className="lg:w-1/2 w-3/4 p-4 my-2 bg-gray-100 rounded-xl border-[3px] lg:border-[4px] border-gray-600 focus:outline-none focus:border-gray-700 focus:drop-shadow-xl"
        />
        <button
          className="text-4xl text-white hover:text-blue-300 ml-3"
          type="button"
          onClick={handleClick}
        >
          <AiOutlineSend className="animate-bounce" />
        </button>
      </div>
    </div>
  );
}
