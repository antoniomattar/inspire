// components/MessageInput.js
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AttachmentIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 9V14C10 15.1046 10.8954 16 12 16V16C13.1046 16 14 15.1046 14 14V7C14 4.79086 12.2091 3 10 3V3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21V21C15.3137 21 18 18.3137 18 15V5"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

const MessageInput = () => {
  return (
    <div className="flex items-center p-4 border-t">
      <Button variant="ghost" className="mr-2">
        <AttachmentIcon />
      </Button>
      <Input type="text" placeholder="Type a message" className="flex-1" />
    </div>
  );
};

export default MessageInput;
