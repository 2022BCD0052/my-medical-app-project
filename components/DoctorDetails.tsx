"use client";
import React, { useState } from "react";
import AvailabilityDate from "./AvailabilityDate";
const DoctorDetails = () => {
  const [isActive, setIsActive] = useState("availability");
  return (
    <div className="py-4 px-8">
      <div className=" flex font-bold text-xl bg-gray-400  items-center justify-between uppercase tracking-widest  ">
        <button
          className={
            isActive === "details"
              ? "py-4 uppercase tracking-widest bg-blue-500  px-8 w-full texr-white border-b-4 border-gray-700"
              : " uppercase tracking-widest border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8"
          }
          onClick={() => {
            setIsActive("details");
          }}
        >
          service details
        </button>
        <button
          onClick={() => {
            setIsActive("availability");
          }}
          className={
            isActive === "availability"
              ? "py-4 uppercase bg-blue-500 border-b-4 border-gray-700 tracking-widest px-8 w-full texr-white"
              : "border uppercase tracking-widest border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8"
          }
        >
          availability details
        </button>
      </div>


      <div className="py-6 px-8">
        {isActive === "availability" ? (
          <div>
            <AvailabilityDate/>
          </div>
        ) : (
          <div>s details component</div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
