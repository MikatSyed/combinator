import Image from 'next/image';
import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";

const Overview = () => {
    // YouTube video links and information
    const videos = [
        {
            id: 1,
            title: "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
            link: "https://youtu.be/e1Yhs9BEOSw",
            thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
            duration: "42:22",
            views: "52K",
            date: "Apr 25, 2024"
        },
        {
            id: 2,
            title: "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
            link: "https://youtu.be/e1Yhs9BEOSw",
            thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
            duration: "42:22",
            views: "52K",
            date: "Apr 25, 2024"
        },
        {
            id: 3,
            title: "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
            link: "https://youtu.be/e1Yhs9BEOSw",
            thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
            duration: "42:22",
            views: "52K",
            date: "Apr 25, 2024"
        },
        // Add more videos as needed
    ];

    return (
        <div className='bg-white'>
            <div className="mx-auto sm:px-6 md:px-[7rem]">
                <div className="mx-auto py-10">
                    <div className="mb-10 text-center text-3xl font-medium">The Latest from YC</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
                        {videos.map((video) => (
                            <div key={video.id} className="relative overflow-hidden rounded-md">
                                <a href={video.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={video.thumbnail}
                                        alt="YouTube Video"
                                        className="w-full h-auto cursor-pointer"
                                        height={190}
                                        width={340}
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 flex justify-center items-center text-white text-4xl">
                                        <AiFillCaretRight  />
                                    </div>
                                </a>
                                <div className="py-3">
                                    <div className="line-clamp-2 text-sm font-bold text-gray-600">{video.title}</div>
                                    <div className="flex items-center text-sm text-neutral-500">
                                        <div className="flex items-center">
                                            {video.views} views
                                            <div className="mx-2 my-auto h-1 w-1 rounded-full bg-neutral-500"></div>
                                        </div>
                                        <div title={video.date}>{video.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
