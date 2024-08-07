// components/PostCard.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const LikeIcon = () => <FontAwesomeIcon icon={faHeart} />;
const CommentIcon = () => <FontAwesomeIcon icon={faComment} />;
const ShareIcon = () => <FontAwesomeIcon icon={faShare} />;
const SaveIcon = () => <FontAwesomeIcon icon={faSave} />;


interface PostCardProps {
  name: string;
  title: string;
  time: string;
  message: string;
  image?: string;
}

const PostCard = ({ name, title, time, message, image }: PostCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-fit">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-xs text-gray-400">{time}</div>
          </div>
        </div>
        <button className="bg-purple-500 text-white px-3 py-1 rounded-md">
          +Connect to Mentor
        </button>
      </div>
      <div className="mt-4 text-gray-800">{message}</div>
      {image && (
        <img
          src={image}
          alt="Post Image"
          className="mt-4 w-full h-auto object-cover rounded-lg"
        />
      )}
      <div className="flex justify-around mt-4 text-gray-500">
        <button className="flex items-center space-x-1">
          <LikeIcon/>
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1">
            <CommentIcon />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1">
          <ShareIcon />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-1">
          <SaveIcon />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;