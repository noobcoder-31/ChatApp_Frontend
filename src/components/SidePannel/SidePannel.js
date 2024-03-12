import React from "react";
import { SearchComponent } from "./SearchComponent";
import { Conversations } from "./Conversations.js";
import { LogoutComp } from "./LogoutComp.js";
export const SidePannel = () => {
  return (
    <div className="bg-purple-900 w-96 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40 border border-gray-100 p-5">
      <SearchComponent />
      <Conversations />
      <LogoutComp />
    </div>
  );
};
