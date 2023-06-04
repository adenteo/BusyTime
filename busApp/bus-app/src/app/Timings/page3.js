'use client';

import {TbArrowBackUp} from "react-icons/tb"
import { useRouter } from 'next/navigation';
import {FaBus} from "react-icons/fa";
import {BsBusFront} from "react-icons/bs";
import {BsStopwatchFill} from "react-icons/bs";
import {GiClockwork} from "react-icons/gi";

export default function Timings() {
    const router = useRouter();
    const myArray = [["12","8.55"], ["354", "9.00"], ["21", "8.45"], ["17","8.50"],["3","8.54"]];
    return (
        <div className="bg-gray-600 h-screen">
            <div>
                <button className=" px-4 pt-7 flex text-white hover:text-blue-300 ml-3" type="button" onClick={() => router.push('/')}>
                    <TbArrowBackUp className="mt-[2px] md:mt-[0px] md:text-3xl text-2xl lg:text-4xl" /><p className="md:text-xl text-lg lg:text-2xl ">Back</p>
            </button> 
            </div>
        <div className=" flex justify-center text-center text-white lg:text-5xl font-bold mt-9 text-4xl lg:mb-7 mb-5">
            <h1 className=" mr-5"><span className="text-red-300">Bus</span> <span className="text-green-200">Timings</span></h1> <BsStopwatchFill className="text-white" />
        </div>
        <div className="flex justify-center text-rose-100 text-xl font-medium">
            <h1>Bus Stop Number: 78271</h1>
        </div>
        <div className="mt-10">
            {myArray.map((item) => (
                <div className="text-white text-xl lg:text-2xl flex justify-center">
                   <div className="w-20 p-2 mb-3">
                        <FaBus className="text-2xl lg:text-3xl mb-1 lg:mb-2"/> 
                        <h1 className>{item[0]} </h1>
                        <div></div>
                   </div>
                   <div className="w-20 py-4 pl-1 lg:pl-4 ">
                    {item[1]}
                   </div>                                                                              
                </div>         
                ))}
        </div>
      </div>
    )
  }

  