// components/MessageWindow.js
import React from 'react';

const MessageWindow = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <img src="/assets/sleeping-bird.png" alt="Sleeping Bird" className="w-32 h-32 mb-4" />
      <div className="text-gray-600">Select a new conversation to send a message!</div>
    </div>
  );
};

export default MessageWindow;
