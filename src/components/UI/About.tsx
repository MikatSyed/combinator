import React from "react";

const About = () => {
  return (
   <div className="bg-white">
   <div className="mx-auto sm:px-6 md:px-[7rem]">
   <div className="py-[70px] mx-4">
      <div className="text-center">
        <div className="mx-auto mb-12 max-w-xl text-center text-3xl font-medium">
          <span className="mr-2 inline leading-[45px] text-[#fb651e]">
            We help founders{" "}
          </span>
          <span className="inline leading-[45px]">
            make something people want and the results speak for themselves.
          </span>
        </div>

        <div className="md:mx-none mx-auto grid max-w-md grid-cols-1 gap-[40px] font-medium xs:grid-cols-2 md:max-w-full md:grid-cols-4">
          <div className="flex flex-col">
          <div className="mb-3 border-l-4 border-[#fb651e] pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
    We help founders at their earliest stages regardless of their age.
</div>
            <ul className="ml-5 list-disc">
              <li className="mt-5">
                <span className="mr-1 text-blue-500">54%</span>
                <span className="mr-1 ">
                  of YC's billion dollar companies had no revenue when they
                  applied
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 text-blue-500">52%</span>
                <span className="mr-1 ">
                  of YC's billion dollar company founders were under 28 years
                  old and the oldest founder was in their 50s
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 text-blue-500">42%</span>
                <span className="mr-1 ">
                  of YC's billion dollar companies applied with only an idea
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="mb-3 border-l-4 border-[#fb651e] pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
              We improve the success rate of our startups.
            </div>
            <ul className="ml-5 list-disc">
              <li className="mt-5">
                <span className="mr-1 text-blue-500">39%</span>
                <span className="mr-1 ">
                  of YC companies have raised a Series A
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 text-blue-500">18%</span>
                <span className="mr-1 ">of YC companies are valued at</span>
                <span className="mr-1 text-blue-500">$100M+</span>
              </li>
              <li className="mt-5">
                <span className="mr-1 text-blue-500">4%</span>
                <span className="mr-1 ">of YC companies have become</span>
                <span className="mr-1 text-blue-500">billion dollar</span>
                <span className="mr-1 ">companies</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="mb-3 border-l-4 border-[#fb651e] pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
              We give startups a huge fundraising advantage.
            </div>
            <ul className="ml-5 list-disc">
              <li className="mt-5">
                <span className="mr-1 ">YC companies have raised money at</span>
                <span className="mr-1 text-blue-500">
                  2.5x higher valuation
                </span>
                <span className="mr-1 ">
                  after participating in the program
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 ">The median YC company raises</span>
                <span className="mr-1 text-blue-500">
                  $1.3M+ at $14M valuation cap
                </span>
                <span className="mr-1 ">
                  after participating in the program
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 ">The top 10% of YC companies raise</span>
                <span className="mr-1 text-blue-500">
                  $1.8M+ at $20M valuation cap
                </span>
                <span className="mr-1 ">
                  after participating in the program
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="mb-3 border-l-4 border-[#fb651e] pl-4 text-[18px] xs:min-h-[108px] xs:max-w-[195px]">
              Our companies have a track record of becoming billion dollar
              companies.
            </div>
            <ul className="ml-5 list-disc">
              <li className="mt-5">
                <span className="mr-1 ">YC has funded</span>
                <span className="mr-1 text-blue-500">90+</span>
                <span className="mr-1 ">billion dollar companies</span>
              </li>
              <li className="mt-5">
                <span className="mr-1 text-blue-500">66%</span>
                <span className="mr-1 ">
                  of those companies had YC as their first investor
                </span>
              </li>
              <li className="mt-5">
                <span className="mr-1 ">YC companies have an average</span>
                <span className="mr-1 text-blue-500">15B</span>
                <span className="mr-1 ">
                  market cap at the time of public exit,
                </span>
                <span className="mr-1 text-blue-500">3x higher</span>
                <span className="mr-1 ">than average</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </div>
   
   </div>
  );
};

export default About;
