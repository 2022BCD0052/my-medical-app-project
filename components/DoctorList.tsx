import React from "react";
import ToggleButton from "./ToggleButton";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { Map } from "lucide-react";

const DoctorList = ({
  title = "TeleHealth Visit",
  isPerson,
  className = "bg-pink-100 py-8 lg:py-24 lg:px-24",
}: {
  title?: string;
  isPerson?: boolean;
  className?: string;
}) => {
  return (
    <div className={`bg-pink-100 py-8 lg:py-24 lg:px-24 ${className}`}>
      <SectionHeading title={title} />
      <div className="py-4 flex items-center justify-between">
          {
            isPerson ?(
                <Link href="/person" className="text-sm flex items-center text-blue-300 font-semibold"> 
                   <Map className="mr-2 flex-shrink-0 w-4 "/>
                   <span className="text-black text-sm"> Map View </span>
                </Link>
            ):(
                <ToggleButton />
             
            )
          }

        <Link href={""} className="border border-black p-2 bg-white rounded">
          See All
        </Link>
      </div>
      <div className="py-6 grid lg:grid-cols-3 gap-4">
        <DoctorCard isPerson={isPerson} />
        <DoctorCard isPerson={isPerson} />
        <DoctorCard isPerson={isPerson} />
      </div>
    </div>
  );
};

export default DoctorList;
