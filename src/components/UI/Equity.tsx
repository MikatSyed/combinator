import React from 'react';

const Equity = () => {
  return (
    <div className='py-8 sm:py-2 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center'>
      <div className="text-center">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 py-6">Is YC Worth 7%?</p>
        <div className="w-full h-full md:max-w-[672px] md:mx-auto ">
          <iframe
            className="w-full h-full  md:w-[672px] md:h-[370px]  "
            src="https://www.youtube.com/embed/DOez-RwJ7mg"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-md font-medium mb-4 py-6"> <span className="text-[#fb651e]">Learn more</span> about evaluating equity.</p>
      </div>
    </div>
  );
}

export default Equity;
