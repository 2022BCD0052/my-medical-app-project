import { ArrowBigUpIcon, Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import doctorImg from "@/public/Images/download.jpeg";
const timeStamp = [
  {
    time: "8:30",
    period: "am",
  },
  {
    time: "10:30",
    period: "am",
  },
  {
    time: "12:30",
    period: "pm",
  },
  {
    time: "2:30",
    period: "pm",
  },
  {
    time: "2:30",
    period: "pm",
  },
  {
    time: "3:30",
    period: "pm",
  },
  {
    time: "9:30",
    period: "am",
  },
];
const DoctorCard = ({isPerson= false}:{isPerson?:boolean}) => {

  return (
    <div
      className="border border-gray-200 hover:shadow-inner shadow-xl inline-flex flex-col 
     bg-white py-6 px-3  rounded-2xl hover:border-gray-400 duration-300 
     transition-all 
     "
    >
      <Link className="border-b-2" href={"/doctors/slug"}>
        <h2 className="uppercase font-bold text-2xl tracking-widest">
          Vijay Patel, pac
        </h2>
        {
            isPerson && (
              <div className="absolute right-0 top-0 bg-white p-2 rounded-full">
                <p className="text-xs">Person</p>
              </div>
            )
            
        }
        <div className="flex items-center gap-4 py-4 ">
          <div className="relative">
            <Image
              src={doctorImg}
              width={263}
              height={263}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover"
            />
            {
                isPerson && (
                  <div className="absolute right-0 top-0 bg-white p-2 rounded-full">
                    <p className="text-xs">Person</p>
                  </div>
                )
  
            }
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <div className="bg-green-200 py-3 px-6 uppercase">
              available today
            </div>
          </div>
        </div>
      </Link>
      <div className="pt-6 border-7 text-center border-gray-400 ">
        <h3 className="flex gap-4 justify-between items-center">
          <span> Tue, Mar 12</span> <span>$123</span>
        </h3>
        <div className="py-3 grid gap-4 px-3 grid-cols-3">
          {timeStamp.map((time, index) => {
            return (
              <Link
                className=" border py-2 px-3 gap-4 rounded bg-blue-600"
                href={""}
                key={index}
              >
                <span
                  className={`text-sm font-semibold   ${
                    index === 5 || index === 6 ? "text-gray-900 " : ""
                  }`}
                >
                  {time.time} {time.period}
                </span>
              </Link>
            );
          })}
          <Link
            href={"/doctors/slug"}
            className=" border text-sm trank line-clamp-1 py-2 px-3 gap-4 rounded text-gray-200 bg-blue-900"
          >
            More Times 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
