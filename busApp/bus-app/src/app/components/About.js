import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { MdMan } from "react-icons/md";

export default function About() {
  return (
    <div className="bg-gray-600 h-full">
      <div className="text-center text-4xl text-cyan-100 font-semibold pt-40 mb-10 lg:mb-0">
        <h1>Understanding BusyTime</h1>
      </div>
      <div className="flex justify-center mt-5 text-white ">
        <div className="flex">
          <MdMan className=" text-6xl text-green-600 " />
          <h1 className="mt-4 text-xl">Seats available</h1>
        </div>
      </div>
      <div className="flex justify-center mt-8 text-white ">
        <div className="flex">
          <MdMan className=" text-6xl text-yellow-600 " />
          <h1 className="mt-4 text-xl">Standing available</h1>
        </div>
      </div>
      <div className="flex justify-center mt-8 text-white ">
        <div className="flex">
          <MdMan className=" text-6xl text-red-600 " />
          <h1 className="mt-4 text-xl">Limited standing available</h1>
        </div>
      </div>

      <div className="border w-10/12 lg:w-3/12 py-4 mx-auto border-4 rounded-lg mt-10">
        <div className="justify-center flex text-left">
          <h1 className="text-white text-xl">
            <span className="text-cyan-200 font-medium text-xl mr-1">
              DOUBLE:
            </span>{" "}
            double decker bus
          </h1>
        </div>

        <div className="justify-center flex text-left mt-4">
          <h1 className="text-white text-xl">
            {" "}
            <span className="text-cyan-200 font-medium text-xl mr-6">
              SINGLE:
            </span>{" "}
            single decker bus
          </h1>
        </div>
      </div>
    </div>
  );
}
