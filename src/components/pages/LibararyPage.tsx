import Image from "next/image";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
const LibraryPage = () => {
  const videos = [
    {
      id: 1,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 2,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 3,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 4,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 5,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 6,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 7,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 8,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 9,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 10,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 11,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 12,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 13,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 14,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 15,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 16,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 17,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    {
      id: 18,
      title:
        "Lightcone: Consumer is back, What’s getting funded now, The vibes immaculate",
      link: "https://youtu.be/e1Yhs9BEOSw",
      thumbnail: "https://img.youtube.com/vi/e1Yhs9BEOSw/hqdefault.jpg",
      duration: "42:22",
      views: "52K",
      date: "Apr 25, 2024",
    },
    // Add more videos as needed
  ];
  return (
    <>
      <div className="">
        <div className="mx-auto sm:px-6 md:px-[7rem]">
          <div className="mx-auto py-10">
            <div className="px-4 relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] border-t  border-b pt-6 lg:pt-9 pb-6 lg:pb-9">
              <p className="text-3xl">YC Library</p>
              <p className="text-sm py-2">
                Watch videos, listen to podcasts, and read essays for startup
                founders. Peruse the full library archive here.
              </p>
            </div>
            <div className="mb-10 mx-4 mt-5">
              <p className="text-xl font-medium text-gray-600 flex items-center">
                <span className="mr-2">
                  <MdVideoLibrary />
                </span>{" "}
                Continue watching
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative overflow-hidden rounded-md"
                >
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt="YouTube Video"
                      className="w-full h-auto cursor-pointer"
                      height={190}
                      width={340}
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 flex justify-center items-center text-white text-4xl">
                      <AiFillCaretRight />
                    </div>
                  </a>
                  <div className="py-3">
                    <div className="line-clamp-2 text-sm font-bold text-gray-600">
                      {video.title}
                    </div>
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
    </>
  );
};

export default LibraryPage;
