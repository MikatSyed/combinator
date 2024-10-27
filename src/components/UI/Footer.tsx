import React from 'react';
import { AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import logo from "../../../public/assets/download.png"
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mx-auto sm:px-6 md:px-[7rem]'>
      <div className="mx-auto py-12 lg:py-16 px-4">
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
          <div className="md:pr-16">
            <a className="block h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]" href="/" title="Y Combinator">
              <span className="sr-only">Y Combinator</span>
             
              <Image src={logo} className="h-full w-full" alt="Y Combinator" height={60} width={60} />
            </a>
          </div>
          <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-16 sm:space-y-0 md:justify-items-center">
            <div>
              <h3 className="font-semibold tracking-wider">Programs</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="/about" className="font-light text-sm text-inherit">YC Program</a></li>
                <li><a href="https://startupschool.org" className="font-light text-sm text-inherit">Startup School</a></li>
                <li><a href="/jobs" className="font-light text-sm text-inherit">Work at a Startup</a></li>
                <li><a href="/cofounder-matching" className="font-light text-sm text-inherit">Co-Founder Matching</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider">Programs</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="/about" className="font-light text-sm text-inherit">YC Program</a></li>
                <li><a href="https://startupschool.org" className="font-light text-sm text-inherit">Startup School</a></li>
                <li><a href="/jobs" className="font-light text-sm text-inherit">Work at a Startup</a></li>
                <li><a href="/cofounder-matching" className="font-light text-sm text-inherit">Co-Founder Matching</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider">Programs</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="/about" className="font-light text-sm text-inherit">YC Program</a></li>
                <li><a href="https://startupschool.org" className="font-light text-sm text-inherit">Startup School</a></li>
                <li><a href="/jobs" className="font-light text-sm text-inherit">Work at a Startup</a></li>
                <li><a href="/cofounder-matching" className="font-light text-sm text-inherit">Co-Founder Matching</a></li>
              </ul>
            </div>
            <div>
           
            </div>
            <div>
         
            </div>
          </div>
          <div className="mt-8 flex">
           <div>
           <h3 className="text-lg mr-4">Make something people want. </h3>
           </div>
            <div>
            <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
        
            <a href="https://twitter.com/ycombinator" target="_blank"><AiFillTwitterSquare size={25} /></a>
            <a href="https://www.facebook.com/YCombinator/" target="_blank"><AiFillFacebook  size={25}/></a>
            <a href="https://www.instagram.com/ycombinator" target="_blank"><AiFillInstagram size={25}/></a>
            <a href="https://www.linkedin.com/school/y-combinator/" target="_blank"><AiFillLinkedin size={25} /></a>
            <a href="https://www.youtube.com/c/ycombinator" target="_blank"><AiFillYoutube  size={25}/></a>
          </div>
          <p className="mt-8 text-base md:order-1 md:mt-0">© 2024 Y Combinator</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
