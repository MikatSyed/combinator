import React from 'react';

const Success = () => {
  return (
    <div className='py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center'>
      <div className="text-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 py-6">Our formula for <span className="text-[#fb651e]">success</span>.</p>
        <div className=" mx-4 aspect-w-16 aspect-h-9 md:px-8 ">
          <iframe
            className="w-full h-full  md:w-[672px] md:h-[370px]"
            src="https://www.youtube.com/embed/EiRnSjcVIqk"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Success;