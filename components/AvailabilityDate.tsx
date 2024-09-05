"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import { Button } from "flowbite-react";

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
];
const AvailabilityDate = () => {
  const [bookdate, setbookDate] = React.useState<Date | undefined>(new Date());
  const formattedDate = bookdate
  ? bookdate.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZoneName: 'short'
    }).replace(/,/g, '') // Remove commas
  : '';  console.log(bookdate);

  return (
    <div className="mb-[200px]">
      {"collender"}
      <h2 className="font-bold py-4 text-xl uppercase text-slate-500 tracking-wider">
        Select a date and time
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0 ">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookdate}
            onSelect={setbookDate}
            className="rounded-md w-full gap-8 border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4 font-semibold">
            {bookdate && (
                <div>
                    <h2 className="p-2 text-center text-gray-600 flex items-center justify-center  border border-gray-600/30">
              {formattedDate}
              </h2> 


                </div>
            
            )}

            <div className="py-3 grid gap-2  grid-cols-3">
              {timeStamp.map((time, index) => {
                return (
                  <Link
                    className=" border py-2 px-3 flex items-center justify-center  bg-blue-600"
                    href={""}
                    key={index}
                  >
                    <span
                      className={`text-sm font-semibold text-blue-200 line-clamp-1  flex items-center justify-center ${
                        index === 5 || index === 6 ? "text-gray-900 " : ""
                      }`}
                    >
                      {time.time} {time.period}
                    </span>
                  </Link>
                );
              })}
              <Link
                href="/doctors/slug"
                className=" border text-sm trank flex items-center line-clamp-1 py-2 px-3 gap-4  text-gray-200 bg-blue-900"
              >
                <span className="line-clamp-1">More Times</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {"availibility"}{" "}
    </div>
  );
};

export default AvailabilityDate;
