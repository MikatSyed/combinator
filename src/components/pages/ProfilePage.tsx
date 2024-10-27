"use client"
import React from 'react';
import Head from 'next/head';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="relative">
            <img className="w-full h-48 object-cover rounded-t-lg" src="/cover-photo.jpg" alt="Cover" />
            <div className="absolute left-4 bottom-4 flex items-center">
              <img className="w-24 h-24 rounded-full border-4 border-white" src="/profile-picture.jpg" alt="Profile" />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Edit Profile</a>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">About</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>

        {/* Post Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">Posts</h2>
          {/* Example Post */}
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full" src="/profile-picture.jpg" alt="User" />
              <div className="ml-4">
                <h3 className="text-gray-800 font-bold">John Doe</h3>
                <p className="text-gray-600 text-sm">2 hours ago</p>
              </div>
            </div>
            <p className="mt-4 text-gray-800">This is an example post content.</p>
          </div>
          {/* Add more posts as needed */}
        </div>

        {/* Friend Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800">Friends</h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {/* Example Friend */}
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src="/friend1.jpg" alt="Friend" />
              <div className="ml-2">
                <h3 className="text-gray-800 font-bold">Jane Smith</h3>
              </div>
            </div>
            {/* Add more friends as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

