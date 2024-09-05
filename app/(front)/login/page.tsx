import LoginForm from "@/components/Auth/LoginForm";
import Image from "next/image";
import React from "react";
import doctorImg from "@/public/Images/doctorLogin.jpg";
const page = () => {
  return (
    <div className="bg-blue-500 min-h-screen py-5 px-8">
      <div
        className="grid md:grid-cols-2 grid-cols-1 w-full  bg-white border
       border-gray-200 rounded-lg overflow-hidden shadow-md max-w-5xl  mx-auto
         dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="hidden md:flex linear-bg p-20">
          {/* <Image src={doctorImg} alt={""} className="w-full h-full" ></Image> */}
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
