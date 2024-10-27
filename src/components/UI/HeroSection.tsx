import React from 'react';
import bgImage from "../../../public/assets/why-yc-new-full-res-B8TvYziy.webp";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className=" bg-white relative ">
      <div className="px-[4rem] md:px-[7rem] ">
        <div className="py-[4rem] md:py-[70px]">
          <div className="">
            <div className="text-4xl font-semibold xs:text-5xl md:text-6xl sm:text-5xl">
              <div>Why</div>
              <div className="text-4xl md:text-6xl mt-3 inline-block text-[#fb651e]  sm:text-5xl">Y Combinator?</div>
            </div>
            <div className="mt-5 max-w-xs md:max-w-sm">
              <div className="text-xl sm:text-2xl">We give startups a disproportionate advantage.</div>
            </div>
            <a href="/apply" className="mt-5 inline-block rounded-lg px-8 py-2 text-xl font-semibold text-[#ffffff] bg-[#fb651e]">Apply to YC</a>
          </div>
          <div className="absolute bottom-0 right-0 top-0 z-0 hidden w-[45vw] md:block">
            <div className="absolute bottom-0 left-0 top-0 z-10 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f5f5ee] shadow-lg mb-6 ml-[-70px] w-[170px] py-3 xl:ml-[-115px] xl:w-[230px] xl:py-9">
                <div className="mb-1 text-3xl font-bold text-[#fb651e] xl:text-4xl">5,000</div>
                <div className="text-l">funded startups</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#f5f5ee] shadow-lg  ml-[-70px] w-[170px] py-3 xl:ml-[-115px] xl:w-[230px] xl:py-9">
                <div className="mb-1 text-3xl font-bold text-[#fb651e] xl:text-4xl">$600B</div>
                <div className="text-l">combined valuation</div>
              </div>
            </div>
            <div className="h-full w-full overflow-hidden">
              <Image src={bgImage} className="h-full w-full"  alt="YC Founders Clapping at a YC Batch Event " layout='responsive'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
