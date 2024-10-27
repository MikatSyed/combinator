"use client";
import React, { useState } from "react";
import { BiLinkExternal, BiMinus, BiPlus } from "react-icons/bi"; // Import the desired icons from react-icons
import logo from "../../../public/assets/download.png";
import Image from "next/image";
import FilterDrawer from "../UI/FilterDrawer";
import { FaLocationDot } from "react-icons/fa6";
const BusinessPage = () => {
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showAllIndustry, setShowAllIndustry] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(8);
  const [visibleIndustries, setVisibleIndustries] = useState(8);
  const [isExpend, setIsExpend] = useState(false);
  const [isExpendIndustries, setIsExpendIndustries] = useState(false);

  const options = [
    "S22",
    "W22",
    "S21",
    "W21",
    "S20",
    "W20",
    "S19",
    "W19",
    "S18",
    "W18",
    "S17",
    "W17",
    "IK12",
    "S16",
    "W16",
    "S15",
    "W15",
    "S14",
    "W14",
    "S13",
    "W13",
    "S12",
    "W12",
    "S11",
    "W11",
    "S10",
    "W10",
    "S09",
    "W09",
    "S08",
    "W08",
    "S07",
    "W07",
    "S06",
    "W06",
  ];
  const industriesData = [
    "All industries",
    "B2B",
    "Education",
    "Fintech",
    "Consumer",
    "Healthcare",
    "Real Estate and Construction",
    "Industrials",
    "Government",
    "Unspecified",
  ];

  const toggleOptions = () => {
    setShowAllOptions(!showAllOptions);
    if (!showAllOptions) {
      setVisibleOptions(options.length);
    } else {
      setVisibleOptions(8);
    }
  };

  const toggleIndustries = () => {
    setShowAllIndustry(!showAllIndustry);
    if (!showAllIndustry) {
      setVisibleIndustries(industriesData.length);
    } else {
      setVisibleIndustries(8);
    }
  };

  const handleExpand = () => {
    setIsExpend(!isExpend);
    setShowAllOptions(!showAllOptions);
  };

  const handleExpandIndustries = () => {
    setIsExpendIndustries(!isExpendIndustries);
    setShowAllIndustry(!showAllIndustry);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="md:px-[7rem] bg-white">
      <section className="py-6 border-t border-gray-300 mx-4 md:mx-0">
        <div className="max-w-full">
          <p className="text-3xl py-4">Startup businesses for sale</p>

          <p className="text-md py-3">
            The #1 Marketplace for startup businesses. Flippa is the largest
            marketplace to buy and sell online businesses, websites and digital
            assets.
          </p>
          <p className="text-md py-3">
            Start your search or get a valuation today.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 bg-white  p-4 rounded-md hidden md:block">
            <div className="">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold">Batch</h4>
                <button onClick={handleExpand} className="flex items-center">
                  {showAllOptions ? (
                    <BiMinus className="h-5 w-5 mr-1" />
                  ) : (
                    <BiPlus className="h-5 w-5 mr-1" />
                  )}
                </button>
              </div>
              {/* Additional options */}
              <div className={`${isExpend ? "block" : "hidden"}`}>
                {options.slice(0, visibleOptions).map((option, index) => (
                  <div
                    key={index}
                    className={`mt-2 ${isExpend ? "block" : "hidden"}`}
                  >
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      <span className="text-xs mr-2">{option}</span>
                    </div>
                  </div>
                ))}
                {options.length > 8 && (
                  <span
                    onClick={toggleOptions}
                    className="text-xs py-1 text-blue-500 underline"
                  >
                    See {showAllOptions ? "Fewer" : "All"} Options
                  </span>
                )}
              </div>
              <div className="border-b  border-gray-300 mt-5 mb-5"></div>
            </div>

            <div className="">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold">Industry</h4>
                <button
                  onClick={handleExpandIndustries}
                  className="flex items-center"
                >
                  {showAllIndustry ? (
                    <BiMinus className="h-5 w-5 mr-1" />
                  ) : (
                    <BiPlus className="h-5 w-5 mr-1" />
                  )}
                </button>
              </div>
              {/* Additional options */}
              <div className={`${isExpendIndustries ? "block" : "hidden"}`}>
                {industriesData
                  .slice(0, visibleIndustries)
                  .map((option, index) => (
                    <div
                      key={index}
                      className={`mt-2 ${
                        isExpendIndustries ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 mr-2" />
                        <span className="text-xs mr-2">{option}</span>
                      </div>
                    </div>
                  ))}
                {industriesData.length > 8 && (
                  <span
                    onClick={toggleIndustries}
                    className="text-xs py-1 text-blue-500 underline"
                  >
                    See {showAllIndustry ? "Fewer" : "All"} Industries
                  </span>
                )}
              </div>
              <div className="border-b  border-gray-300 mt-5 mb-5"></div>
            </div>
          </div>
          <div className="col-span-4 mx-4 md:mx-0 md:col-span-3 ">
            <div className="bg-white border border-gray-300 p-4 rounded-md">
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                placeholder="Search..."
              />
              <FilterDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
              <button
                onClick={handleToggleDrawer}
                className="border border-gray-300 p-2 w-full my-3 block md:hidden"
              >
                Filter
              </button>
            </div>


            <div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>

  
<div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>

  
<div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>

  
<div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>

  
<div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>

  
<div className="bg-white rounded-md my-5">
  <div className="flex flex-col sm:flex-row overflow-hidden max-w-4xl bg-white border border-gray-300 rounded-lg p-4">
    <div className="flex-shrink-0 w-full sm:w-[260px] sm:h-[260px]">
      <img
        src="https://d2jafhvbn4akdi.cloudfront.net/webp_6ca47c29-b596-4963-8c2b-0d9bf3b6f1e4.png"
        alt="Descriptive Alt Text"
        className="w-full h-auto sm:w-[260px] sm:h-[260px] object-cover"
      />
    </div>
    <div className="flex flex-col sm:flex-row flex-grow justify-between ml-0 sm:ml-4 mt-4 sm:mt-0">
      <div className="flex-grow mr-4">
        <p className="text-xl font-semibold text-blue-500">Ecommerce | Business</p>
        <div className="flex items-center mt-2">
          <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
            Verified Listing
          </p>
          <div className="flex items-center ml-4">
            <FaLocationDot />
            <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
          </div>
        </div>
        <div className="text-sm w-full sm:w-[80%] py-3">
          <p>Growing 10 Y/O Artisan US-based eCommerce Marketplace w/ $1,000,000+ in Sales/Year! No inventory = highly scalable!</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Type</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Industry</span>
            <span className="font-semibold text-[14px]">Health and Beauty</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
            <span className="font-semibold text-[14px]">Ecommerce</span>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
            <span className="font-semibold text-[14px]">2 Years</span>
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
            <span className="font-semibold text-[14px]">USD $26 p/mo</span>
          </div>
        </div>
      </div>
      <div className="text-sm w-[50%] md:my-3">
                   <div className="my-3 md:my-0">
                   <p className="text-sm text-gray-500 mr-2 font-normal ">
                      Asking Price
                    </p>
                    <p className="text-xl font-bold text-gray-900">USD $1000</p>
                   </div>
                    <div className="md:mt-36 my-3 md:my-0">
                      <button className=" bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-full  px-4 py-3  text-white text-sm md:text-md">
                        View Listing
                      </button>
                    </div>
                  </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
