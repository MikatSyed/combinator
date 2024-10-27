import Link from "next/link";
import React from "react";

const JobsPage = () => {
  const categories = [
    { title: "Design & UI/UX", href: "/jobs/design-ui-ux" },
    { title: "Product", href: "/jobs/product" },
    { title: "Recruiting & HR", href: "/jobs/recruiting-hr" },
    { title: "Sales ", href: "/jobs/sales" },
    { title: "Science ", href: "/jobs/science" },
  ];
  return (
    <div className="mx-auto px-6 md:px-[7rem]">
      <section className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px] border-b pt-6 lg:pt-9 pb-6 lg:pb-9 ">
        <div className="flex flex-col justify-evenly md:flex-row px-4">
          <div className="mt-2 flex flex-col ">
            <p className=" text-xl md:text-2xl">
              Find the best startup jobs, curated by Y&nbsp;Combinator.
            </p>
            <ul className="text-sm prose-md prose ml-10 mt-4 list-disc">
              <li className="py-2">
                Apply to thousands of startup jobs with a single profile.
              </li>
              <li className="py-2">
                Let YC founders contact you or browse companies privately.
              </li>
              <li className="py-2">
                Find the next Airbnb, Instacart or Coinbase — only YC companies.
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col justify-center text-center px-4">
            <a
              className="bg-[#fb651e] p-3 text-white rounded-md font-bold"
              href=""
            >
              Find a job ›
            </a>
            <div className="prose mt-4 text-sm ">
              Already work at a YC startup? &nbsp;
              <Link href="#" className="text-blue-500 underline">
                Browse privately
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative isolate z-0 border-retro-sectionBorder sm:pr-[13px]border-b pt-6 lg:pt-9 pb-6 lg:pb-9 hidden sm:block ">
        <h2 className="text-2xl text-center md:text-left">
          Meet YC founders and learn about startups, new tech and hot job
          opportunities.
        </h2>
        <div className="sm:space-x- mt-4 flex flex-col justify-between space-y-4 sm:mb-4 sm:flex-row sm:space-y-0"></div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 py-10 ">
        {" "}
        {/* Responsive grid */}
        <div>
          <p className="text-xl md:text-2xl">
            Software Engineer jobs added recently
          </p>
        </div>
        <div className="flex md:justify-end">
          {" "}
          {/* Maintain flex for larger devices */}
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="text-sm text-blue-500 border-r border-gray-200 px-2 hover:text-blue-700"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      <div className="bg-white py-4 border border-gray-300 rounded-lg mx-auto w-full mb-2">
      <a href="/companies/airbnb" className="block">
        <div className="flex flex-col items-center justify-start sm:flex-row px-4 py-2">
      
          <div className="w-20 h-20 flex-shrink-0 sm:mx-auto sm:my-auto">
            <img
              src="https://bookface-images.s3.amazonaws.com/small_logos/f59b4fa6c1b83c6d1b9ccf4e02733f3f60a7a727.png"
              alt=""
              className="rounded-full bg-gray-100 mx-auto my-auto"
            />
          </div>
          <div className="sm:ml-4">
            <div className="lg:max-w-[90%]">
              <div className="flex justify-between items-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">
                    Peakflo (W22)
                    <span className="text-sm font-normal text-gray-600 hidden md:inline ">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400  hidden md:inline">
                    (less than a minute ago)
                  </span>
                  <div className="md:hidden">
                  <span className="text-lg font-semibold">
                    <span className="text-sm font-normal text-gray-600">
                      {' '}
                      • Bill.com for SE Asia
                    </span>
                  </span>
                  <span className="text-xs ml-2 text-gray-400 ">
                    (less than a minute ago)
                  </span>
                  </div>
                </div>
                <div>
                  <button className=" hidden md:block bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-[-5px]">
                <p className="text-lg text-blue-500 font-bold">
                  Backend Engineer Internship (remote).
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <p className="mr-3">Internship</p>
                  <span className="border-r border-gray-400 h-4"></span>
                  <p className="ml-3">
                    Iran / Bangladesh / India / Pakistan / Sri Lanka /
                    Philippines / Malaysia / Indonesia / Vietnam / Thailand /
                    Remote (Iran; Bangladesh; India; Pakistan; Sri Lanka;
                    Philippines; Malaysia; Indonesia; Vietnam; Thailand) Backend
                  </p>
                </div>
                <div className="flex justify-center mt-4 md:hidden ">
          <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    </div>
  );
};

export default JobsPage;
