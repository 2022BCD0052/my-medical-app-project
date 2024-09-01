import { Button } from "flowbite-react";
import { Plus } from "lucide-react";
import React from "react";

const FixedButton = () => {
  return (
    <div >
        <div className="fixed bottom-0 w-full shadow-3xl py-8 px-10 rounded-t-3xl  border flex justify-between items-center">
        <div>
          <p>$46</p>
          <p> Tue, Mar 12 - 8:00 AM GMT+3</p>
        </div>
        <Button className="flex items-center px-8 tracking-widest uppercase shadow-md  text-xl font-bold py-3  text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
         <Plus/>
          Log In
        </Button>
      </div>
    </div>
  
)
};

export default FixedButton;
