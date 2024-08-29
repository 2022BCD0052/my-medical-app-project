import Navbar from "@/components/frontend/Navbar";
import MegaMenu from "@/components/MegaMenu";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-950 ">
        <Navbar/>
        <div className="max-w-5xl mx-auto py-3 border-b border-gray-700  pb-6 flex items-center justify-center">

                  <MegaMenu/>

        </div>

      {children}
    </div>
  );
}
