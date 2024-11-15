import Navbar from "@/components/frontend/Navbar";
import MegaMenu from "@/components/MegaMenu";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      <div className="">
        <Navbar />

        <div className=" mx-auto py-1 shadow  w-full fixed  bg-white  z-50 top-[65px]   flex items-center justify-center">
          <MegaMenu />
        </div>
      </div>

      <div className="mt-[73px]">{children}</div>
    </div>
  );
}
