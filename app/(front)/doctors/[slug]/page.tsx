import React from "react";
import doctorImg from "@/public/Images/download.jpeg";
import Image from "next/image";
import DoctorDetails from "@/components/DoctorDetails";
import FixedButton from "@/app/FixedButton";
const page = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="bg-white max-w-4xl   mx-auto shadow-md rounded-md">
        <div className="py-6 px-8">
          <div className=" flex items-center justify-between ">
            <div className="">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold uppercase  tracking-widest">
                  Vijay Patel,Pa-C0
                </h2>
                <p className="text-gray-500">Adult Health</p>
              </div>
              <div className="mt-4">
                <p className=" line-clamp-1">IN person doctor visit</p>

                <p>3246 lincon Highway, Kendall Park, Nj 054357</p>
              </div>
            </div>
            <Image
              src={doctorImg}
              width={263}
              height={263}
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="py-7 ">
          <DoctorDetails />
        </div>
      </div>
      
      <FixedButton />
    </div>
  );
};

export default page;
