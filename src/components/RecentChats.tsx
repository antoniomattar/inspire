// components/RecentChats.js
import React from 'react';

const RecentChats = () => {
  const chats = [
      { name: 'Roy Bou Nasreddine', message: 'See you!', time: '7:41 PM' },
      { name: 'Aya Abed', message: 'I am on my way', time: '7:41 PM' }
    // Add more chat data here
  ];

  return (
    <div className="p-4">
      {chats.map((chat, index) => (
        <div key={index} className="flex items-center p-2 bg-purple-500 mb-2 rounded-md">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div className="flex-1">
            <div className="text-white">{chat.name}</div>
            <div className="text-gray-200">{chat.message}</div>
          </div>
          <div className="text-gray-200">{chat.time}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentChats;
