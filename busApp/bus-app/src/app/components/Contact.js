import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-gray-600 h-full">
      <div className="text-center">
        <h1 className=" pt-56 pb-20 text-5xl lg:text-6xl text-white font-semibold">
          Contact Me
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="text-white ">
          <Link
            className="lg:text-6xl text-5xl hover:text-blue-300"
            href="https://github.com/gracelimshiern"
          >
            {" "}
            <AiFillGithub />
          </Link>
          <p className="lg:text-md mt-3">Github</p>
        </div>

        <div className=" text-center justify-center text-white ml-20 mr-20 lg:ml-40 lg:mr-40">
          <Link
            className="text-center text-5xl lg:text-6xl hover:text-blue-300"
            href="https://www.linkedin.com/in/grace-lim-89918521a/"
          >
            {" "}
            <AiFillLinkedin />
          </Link>
          <p className="lg:text-md mt-3 ">LinkedIn</p>
        </div>

        <div className=" text-white">
          <Link
            className="text-5xl lg:text-6xl hover:text-blue-300"
            href="mailto: graccelim@gmail.com"
          >
            {" "}
            <MdEmail />
          </Link>
          <p className="lg:text-md mt-3 lg:ml-2">Email</p>
        </div>
      </div>
    </div>
  );
}
