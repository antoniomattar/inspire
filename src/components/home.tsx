// pages/index.js
import React from 'react';
import UpperBar from '../components/UpperBar';
import PostCard from '../components/PostCard';

const Home = () => {
  const posts = [
    {
      name: 'John Doe',
      title: 'Guitar Specialist',
      time: 'Posted 15 minutes ago',
      message: 'With the right guidance, you can become a pro too!',
      image: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?cs=srgb&dl=pexels-olly-927451.jpg&fm=jpg',
    },
    {
      name: 'Diana Henley',
      title: 'Chess Specialist',
      time: 'Posted 1 day ago',
      message: 'It’s easy if you practice!',
      image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home-1024x512.jpg',
    },
    // Add more post data here
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <UpperBar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
