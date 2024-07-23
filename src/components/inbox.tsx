// pages/index.js
import React from "react";
import SearchBar from "../components/SearchBar";
import RecentChats from "../components/RecentChats";
import MessageWindow from "../components/MessageWindow";
import MessageInput from "../components/MessageInput";
import Image from "next/image";

const Inbox = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 bg-purple-600 text-white">
        <Image src="/assets/logo.png" alt="Logo" width={100} height={50} />
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div>Aya Abed</div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-1/4 bg-white text-white border-r-4 border-purple-500">
          <SearchBar />
          <RecentChats />
        </div>
        <div className="flex-1 flex flex-col bg-white">
          <MessageWindow />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
