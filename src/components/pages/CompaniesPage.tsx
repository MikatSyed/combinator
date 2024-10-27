"use client";
import React, { useState } from "react";
import { BiLinkExternal, BiMinus, BiPlus } from "react-icons/bi"; // Import the desired icons from react-icons
import FilterDrawer from "../UI/FilterDrawer";
const CompaniesPage = () => {
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
    <div className="md:px-[7rem] ">
      <section className="py-6 border-t border-gray-300 mx-4 md:mx-0">
        <div className="max-w-full">
          <p className="text-3xl py-4">Startup Directory</p>
          <p className="text-sm py-2">
            Since 2005, we have invested in over 5,000 companies that have a
            combined valuation of over $600B.
          </p>
          <p className="text-sm py-3">
            In this directory, you can search for YC companies by industry,
            region, company size, and more.
          </p>
          <p className="text-sm py-3">
            To find jobs at these startups, visit{" "}
            <a href="/jobs" className="underline text-blue-500">
              Work at a Startup
            </a>
            .
          </p>
          <p className="text-sm py-3">
            At the links below you'll find directories of companies started by
            historically underrepresented founders. For demographic data on our
            batches, visit <a href="/blog/tag/batch-stats">our blog</a>.
          </p>
          <p className="mt-4 flex flex-col space-y-3 pl-3 font-medium text-linkColor sm:flex-row sm:space-y-0 ">
            <a
              className="mr-4 inline-flex flex-nowrap items-center text-base underline text-blue-500"
              href="/companies/black-founders"
            >
              <span>Black-founded companies</span>
              <BiLinkExternal className="ml-1 inline h-4 w-4 md:h-5 md:w-5 " />
            </a>
            <a
              className="mr-4 inline-flex flex-nowrap items-center text-base underline text-blue-500"
              href="/companies/hispanic-latino-founders"
            >
              <span>Hispanic &amp; Latino-founded companies</span>
              <BiLinkExternal className="ml-1 inline h-4 w-4 md:h-5 md:w-5 " />
            </a>
            <a
              className="mr-4 inline-flex flex-nowrap items-center text-base underline text-blue-500"
              href="/companies/women-founders"
            >
              <span>Women-founded companies</span>
              <BiLinkExternal className="ml-1 inline h-4 w-4 md:h-5 md:w-5" />
            </a>
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 bg-white border border-gray-300 p-4 rounded-md hidden md:block">
            <div className="">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 mr-2" />
                <span className="text-xs mr-2">💎 Top Companies</span>
                <span className="text-xs bg-gray-200 px-2 py-1">49</span>
              </div>
              <div className="mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 mr-2" />
                  <span className="text-xs mr-2">Is Hiring</span>
                  <span className="text-xs bg-gray-200 px-2 py-1">49</span>
                </label>
              </div>
              <div className="mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 mr-2" />
                  <span className="text-xs mr-2">Nonprofit</span>
                  <span className="text-xs bg-gray-200 px-2 py-1">49</span>
                </label>
              </div>
              <div className="border-b  border-gray-300 mt-5 mb-5"></div>
            </div>

            <div className="">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 mr-2" />
                <span className="text-xs mr-2">Black-founded</span>
                <span className="text-xs bg-gray-200 px-2 py-1">260</span>
              </div>
              <div className="mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 mr-2" />
                  <span className="text-xs mr-2">
                    Hispanic & Latino-founded
                  </span>
                  <span className="text-xs bg-gray-200 px-2 py-1">27</span>
                </label>
              </div>
              <div className="mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 mr-2" />
                  <span className="text-xs mr-2">Women-founded</span>
                  <span className="text-xs bg-gray-200 px-2 py-1">50</span>
                </label>
              </div>
              <div className="border-b  border-gray-300 mt-5 mb-5"></div>
            </div>

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
              <button onClick={handleToggleDrawer} className="border border-gray-300 p-2 w-full my-3 block md:hidden">
              Filter
            </button>
            </div>
            <p className="text-sm mt-8 mb-2">Showing 40 of 1,000+ companies</p>
            <div className="bg-white border border-gray-300  rounded-md">
              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="">
                <a className="" href="/companies/airbnb">
                  <div className="relative flex w-full items-center justify-start border-b border-gray-300 p-4">
                    <div className="flex w-20 shrink-0 grow-0 basis-20 items-center pr-4">
                      <img
                        src="https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png"
                        alt=""
                        role="presentation"
                        className="rounded-full bg-gray-100"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between mb-2">
                      <div className="lg:max-w-[90%]  ">
                        <div>
                          <span className="text-md font-bold">Airbnb</span>
                          <span className="text-xs ml-2">
                            {" "}
                            San Francisco, CA, USA
                          </span>
                        </div>
                        <div>
                          <span className="py-4 text-sm">
                            Book accommodations around the world.
                          </span>
                        </div>
                        <div className="py-2">
                          {/* <a href="/companies?batch=W09" target="_blank" className="flex items-center mr-4">
                        <Image src={logo} alt="" width={16} height={16} className=" bg-gray-100 p-2" />
                        <span className="bg-gray-200 p-2 text-xs mr-2">W09</span>
                    </a> */}
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            W09
                          </a>
                          <a
                            href="/companies?industry=Consumer"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] mr-2 rounded-sm"
                          >
                            Consumer
                          </a>
                          <a
                            href="/companies?industry=Travel, Leisure and Tourism"
                            target="_blank"
                            className="bg-gray-200 p-2 text-[11px] rounded-sm"
                          >
                            Travel, Leisure and Tourism
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;
