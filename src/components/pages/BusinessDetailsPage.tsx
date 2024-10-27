import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const BusinessDetailsPage = () => {
    return (
        <div className="md:px-[7rem] bg-white">
            <div className='flex flex-col md:flex-row w-full'>
                <div className="rounded-md my-5 w-full md:w-[65%] md:pr-5">
                    <div className="flex flex-col overflow-hidden bg-white rounded-lg p-4">
                        <div className="flex-grow">
                            <p className="text-3xl font-semibold">Ecommerce Store | Business</p>
                            <div className="flex items-center mt-2">
                                <p className="px-5 py-1 text-blue-500 font-semibold text-xs border border-blue-500 rounded-full">
                                    Verified Listing
                                </p>
                                <div className="flex items-center ml-4">
                                    <FaLocationDot />
                                    <p className="text-gray-600 text-sm font-semibold ml-1">United States</p>
                                </div>
                            </div>
                            <div className="text-md my-10">
                                <p>6yr old Digital eCommerce Business, 300+ Digital Products in Business Niche with Unique Content, Earning $17,657/m Profit from Multiple Revenue Streams</p>
                            </div>
                            <div className="flex space-x-4 mt-10 ">
                                <div className="flex flex-col pr-6 border-r border-gray-300">
                                    <span className="text-gray-600 font-normal text-[14px] ">Type</span>
                                    <span className="font-semibold text-[14px]">Ecommerce</span>
                                </div>
                                <div className="flex flex-col  pr-6 border-r border-gray-300">
                                    <span className="text-gray-600 font-normal text-[14px]">Industry</span>
                                    <span className="font-semibold text-[14px]">Health and Beauty</span>
                                </div>
                                <div className="flex flex-col  pr-6 border-r border-gray-300 ">
                                    <span className="text-gray-600 font-normal text-[14px]">Monetization</span>
                                    <span className="font-semibold text-[14px]">Ecommerce</span>
                                </div>
                                <div className="flex flex-col  pr-6 border-r border-gray-300">
                                    <span className="text-gray-600 font-normal text-[14px]">Site Age</span>
                                    <span className="font-semibold text-[14px]">2 Years</span>
                                </div>
                                <div className="flex flex-col pl-6 ">
                                    <span className="text-gray-600 font-normal text-[14px]">Net Profit</span>
                                    <span className="font-semibold text-[14px]">USD $26 p/mo</span>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div className="rounded-lg my-5 w-full md:w-[35%] overflow-hidden shadow-xl transition-shadow duration-300:shadow-2xl">
            <img src="https://via.placeholder.com/400x200" alt="Business" className="w-full object-cover"/>

            <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Price: $1,000,000</h2>
                    <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Reserve</button>
                </div>
                
                <div className="space-y-2">
                    <p className="text-gray-800 font-semibold">Ownership: 100%</p>
                    <p className="text-gray-800 font-semibold">Revenue: $1,000,000/year</p>
                    <p className="text-gray-800 font-semibold">Net Profit: $250,000/year</p>
                    <p className="text-gray-800 font-semibold">Business Age: 10 Years</p>
                    <p className="text-gray-800 font-semibold">Employees: 20</p>
                    <p className="text-gray-800 font-semibold">Location: United States</p>
                    <p className="text-gray-800 font-semibold">Industry: Health and Beauty</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default BusinessDetailsPage;
