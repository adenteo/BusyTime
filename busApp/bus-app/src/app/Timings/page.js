"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FaBus } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMan } from "react-icons/md";

export default function FortuneCookie() {
  const searchParams = useSearchParams();
  const BusStopNum = searchParams.get("BusStopNum");
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    busData();
  }, []);

  const busData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `/api/businfo?BusStopNum=${BusStopNum}`,
      requestOptions
    );

    const result = await response.json();

    if (result && result.Services) {
      console.log(result);
      const updatedData = result.Services.map((item) => {
        const currentDate = new Date();
        const givenDateTime = new Date(item.NextBus.EstimatedArrival);
        const diffInMinutes = Math.floor(
          (givenDateTime - currentDate) / (1000 * 60)
        );

        let timing = "";
        if (diffInMinutes <= 0) {
          timing = "Arriving";
        } else if (isNaN(diffInMinutes)) {
          timing = "Unavail";
        } else {
          timing = diffInMinutes + " mins";
        }

        const givenDateTime2 = new Date(item.NextBus2.EstimatedArrival);
        const diffInMinutes2 = Math.floor(
          (givenDateTime2 - currentDate) / (1000 * 60)
        );
        let timing2 = "";
        if (diffInMinutes2 <= 0) {
          timing2 = "Arriving";
        } else if (isNaN(diffInMinutes2)) {
          timing2 = "Unavail";
        } else {
          timing2 = diffInMinutes2 + " mins";
        }

        const givenDateTime3 = new Date(item.NextBus3.EstimatedArrival);
        const diffInMinutes3 = Math.floor(
          (givenDateTime3 - currentDate) / (1000 * 60)
        );
        let timing3 = "";
        if (diffInMinutes3 <= 0) {
          timing3 = "Arriving";
        } else if (isNaN(diffInMinutes3)) {
          timing3 = "Unavail";
        } else {
          timing3 = diffInMinutes3 + " mins";
        }

        return {
          ...item,
          NextBus: {
            ...item.NextBus,
            EstimatedArrival: timing,
          },
          NextBus2: {
            ...item.NextBus2,
            EstimatedArrival: timing2,
          },
          NextBus3: {
            ...item.NextBus3,
            EstimatedArrival: timing3,
          },
        };
      });

      setData(updatedData);
    }
  };

  return (
    <div className="bg-gray-600 h-screen overflow-auto">
      <div>
        <button
          className="px-2 hidden lg:flex mt-4 lg:mt-6 lg:px-4 text-white hover:text-blue-300 ml-3 rounded-xl bg-gray-400 lg:bg-gray-600"
          type="button"
          onClick={() => router.push("/")}
        >
          <TbArrowBackUp className="md:text-3xl text-2xl lg:text-3xl" />
          <p className="md:text-xl lg:mt-[1px] text-md lg:text-xl ">Back</p>
        </button>
      </div>
      <div className=" flex justify-center text-center text-white lg:text-5xl font-bold mt-9 text-4xl lg:mb-7 mb-5">
        <h1 className=" mr-5">
          <span className="text-red-300">Bus</span>{" "}
          <span className="text-green-200">Timings</span>
        </h1>{" "}
        <BsStopwatchFill className="text-white" />
      </div>
      <div className="flex justify-center text-rose-100 text-xl font-medium">
        <h1>Bus Stop Number: {BusStopNum}</h1>
      </div>
      <div className="mt-10">
        {data &&
          data.map((item, index) => (
            <div
              className="text-white text-lg lg:text-xl flex justify-center mb-5 border-b  pb-3 lg:w-3/12 mx-auto"
              key={index}
            >
              <div className="w-20 text-center">
                <FaBus className="text-2xl lg:text-3xl ml-[1.65rem] lg:ml-6 mb-1 " />
                <h1 className="">{item.ServiceNo}</h1>
              </div>
              <div className="w-24 lg:w-28 ml-2 block text-center mt-2">
                <h1>{item.NextBus.EstimatedArrival}</h1>
                <div className="flex justify-center">
                  {item.NextBus.Type === "DD" ? (
                    <h1 className="text-xs lg:sm">DOUBLE</h1>
                  ) : (
                    <h1 className="text-xs lg:sm">SINGLE</h1>
                  )}

                  {item.NextBus.Load === "SEA" ? (
                    <h1 className="text-green-600">
                      <MdMan />
                    </h1>
                  ) : item.NextBus.Load === "SDA" ? (
                    <h1 className="text-yellow-600">
                      <MdMan />
                    </h1>
                  ) : (
                    <h1 className="text-red-600">
                      <MdMan />
                    </h1>
                  )}
                </div>
              </div>

              <div className="w-28  block text-center  mt-2">
                <h1>{item.NextBus2.EstimatedArrival}</h1>
                <div className="flex justify-center">
                  {item.NextBus2.Type === "DD" ? (
                    <h1 className="text-xs lg:sm">DOUBLE</h1>
                  ) : (
                    <h1 className="text-xs lg:sm">SINGLE</h1>
                  )}

                  {item.NextBus2.Load === "SEA" ? (
                    <h1 className="text-green-600">
                      <MdMan />
                    </h1>
                  ) : item.NextBus2.Load === "SDA" ? (
                    <h1 className="text-yellow-600">
                      <MdMan />
                    </h1>
                  ) : (
                    <h1 className="text-red-600">
                      <MdMan />
                    </h1>
                  )}
                </div>
              </div>

              <div className="w-28  block text-center mr-2 mt-2">
                <h1>{item.NextBus3.EstimatedArrival}</h1>
                <div className="flex justify-center">
                  {item.NextBus3.Type === "DD" ? (
                    <h1 className="text-xs lg:sm">DOUBLE</h1>
                  ) : (
                    <h1 className="text-xs lg:sm">SINGLE</h1>
                  )}

                  {item.NextBus3.Load === "SEA" ? (
                    <h1 className="text-green-600">
                      <MdMan />
                    </h1>
                  ) : item.NextBus3.Load === "SDA" ? (
                    <h1 className="text-yellow-600">
                      <MdMan />
                    </h1>
                  ) : (
                    <h1 className="text-red-600">
                      <MdMan />
                    </h1>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mb-3">
        <button
          className="px-4 py-1 flex lg:hidden mt-4 text-blue-100 hover:text-blue-400 hover:border-blue-400 mx-auto border-blue-100 border-2 rounded-lg "
          type="button"
          onClick={() => router.push("/")}
        >
          <AiTwotoneHome className="text-xl mt-[3px] mr-[3px]" />
          <p className=" text-xl ">Home</p>
        </button>
      </div>
    </div>
  );
}
