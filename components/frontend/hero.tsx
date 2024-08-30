
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TransitionText from "./TransitionText";
import { Pill } from "lucide-react";

const Hero = () => {
  const TEXTS = [
    "Acupuncture",
    "message",
    "Dental",
    "Herbal Remedies",
    "Eye Care",
    "Massage Therapy",
    "Spa",
    "Hair Care",
    "Skincare",
    "Therapy",
    "Nutrition",
    "Pain Management",
    "Pregnancy Care",
  ];
  return (
    <div className="bg-blue-950 mt-24">
      <div className="relative bg-blue-950  max-w-6xl mx-auto pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-5xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl line-clamp-2 flex flex-wrap gap-2">
                  Book your
                  <TransitionText
                    TEXTS={TEXTS}
                    className="text-blue-700 line-clamp-1"
                  />
                  <span>sessions now</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color text-gray-200  dark:text-dark-6">
                  health should be informed, accessible, and sustainable. We're
                  here to help you achieve that. health should be informed,
                  accessible, and sustainable. We're here to help you achieve
                  that.
                </p>

                {/* search bar here */}
                <SearchBar />

                <ul className="flex flex-wrap items-center gap-6">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex bg-blue-600  items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Need Doctor Urgently{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center  bg-blue-600 rounded-md justify-center px-6 py-3 text-center text-base font-medium text-[#c7c7c7] hover:text-primary "
                    >
                      <span className="mr-2">
                        <Pill className="flex-shrink-0 h-4 w-4 text-blue-100" />
                      </span>
                      Need a refil{" "}
                    </a>
                  </li>
                </ul>

                <div className="py-4 flex gap-4 pt-8 justify-center items-center">
                  <div className="flex flex-col items-center justify-between">
                    <span className="font-bold text-gray-50">600</span>
                    <span className="text-sm text-gray-400">
                      Active Speciliast
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-between">
                    <span className="font-bold text-gray-50">600</span>
                    <span className="text-sm text-gray-400">
                      Active Speciliast
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};
