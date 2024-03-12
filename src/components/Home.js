import React from "react";
import { SidePannel } from "./SidePannel/SidePannel.js";
import { MessagePannel } from "./MessagePannel/MessagePannel.js";
import toast from "react-hot-toast";
export const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] m-auto w-3/4  bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100rounded-lg overflow-hidde">
      <SidePannel />
      <MessagePannel />
    </div>
  );
};
