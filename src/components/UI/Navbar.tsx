"use client"
import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Importing icons from react-icons
import logo from "../../../public/assets/download.png";
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (linkIndex: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [linkIndex]: !prevState[linkIndex] || false,
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({});
  };

  const navItems: any = [
    // Array of items with sub-items (replace with your data)
    {
      title: 'About',
      href: '/about',
      // subItems: [
      //   { title: 'What Happen at YC?', href: '/sub-item-1' },
      //   { title: 'Apply?', href: '/sub-item-1' },
      //   { title: 'YC Interview Guide', href: '/sub-item-2' },
      //   { title: 'FAQ', href: '/sub-item-2' },
      //   { title: 'People', href: '/sub-item-2' },
      //   { title: 'YC Blog', href: '/sub-item-2' },
      // ],
    },
    {
      title: 'Companies',
      href: '/companies',
      // subItems: [
      //   { title: 'Startup Directory', href: '/companies' },
      //   { title: 'Top Companies', href: '/sub-item-4' },
      //   { title: 'Founder Directory', href: '/sub-item-4' },
      //   { title: 'Launch YC', href: '/sub-item-4' },
      // ],
    },
    {
      title: 'Startup Jobs',
      href: '/jobs',
      // subItems: [
      //   { title: 'All Jobs', href: '/sub-item-5' },
      //   { title: '◽ Engineering', href: '/sub-item-6' },
      //   { title: '◽ Operations', href: '/sub-item-6' },
      //   { title: '◽ Marketing', href: '/sub-item-6' },
      //   { title: '◽ Sales', href: '/sub-item-6' },
      //   { title: 'Pioneer Internship Program 2024', href: '/sub-item-6' },
      //   { title: 'Startup Job Guide', href: '/sub-item-6' },
      //   { title: 'Career Coaching', href: '/sub-item-6' },
      //   { title: 'YC Startup Jobs Blog', href: '/sub-item-6' },
      // ],
    },
    {
      title: 'Find a Co-Founder',
      href: '/cofounder-matching',
     
    },
    {
      title: 'Libarary',
      href: '/library',
     
    },
    {
      title: 'SAFE',
      href: '/documents',
     
    },
    // {
    //   title: 'Resources',
    //   href: '#',
    //   // subItems: [
    //   //   { title: 'Startup School', href: '/sub-item-5' },
    //   //   { title: 'Newsletter', href: '/sub-item-6' },
    //   //   { title: 'For Investors', href: '/sub-item-6' },
    //   //   { title: 'Hacker News', href: '/sub-item-6' },
    //   //   { title: 'Bookface', href: '/sub-item-6' },
       
    //   // ],
    // },
    // ... Add other items with sub-items
  ];


  return (
    <nav className="mx-auto sm:px-6 md:px-[7rem]">
      <div className="max-w-7xl py-4 mx-4 md:mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-8">
             <Link href="/"> <Image src={logo} alt="" height={56} width={56} /></Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                {navItems.map((item:any, index:number) => (
                  <li key={index} className="relative">
                    <Link
                      href={item.href}
                      className="text-black hover:text-blue-500 py-2 rounded-md text-sm flex items-center"
                      onMouseEnter={() => toggleDropdown(index)} 
                      onMouseLeave={closeDropdown} 
                    >
                      {item.title}
                    </Link>
                    {item.subItems && item.subItems.length > 0 && (
                      <ul
                        className={`${
                          dropdownOpen[index]
                            ? 'absolute  shadow-md z-50 bg-white rounded-md py-1'
                            : 'hidden'
                        }`}
                        onMouseEnter={() => toggleDropdown(index)} 
                        onMouseLeave={closeDropdown} 
                      >
                        {item.subItems.map((subItem:any, subIndex:any) => (
                          <li key={subIndex} className="py-2 px-3 w-[200px]" >
                            <Link href={subItem.href} className="text-sm text-black hover:text-blue-500">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="block md:hidden text-black hover:text-blue-500 focus:outline-none"
              onClick={toggleNavbar}
            >
              {/* Hamburger menu icon */}
              <FiMenu className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} />
              {/* Close menu icon */}
              <FiX className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            {/* Your other navbar elements */}
            <span className="text-black mr-4">Apply for <b>S2024</b> batch</span>
            <button className="bg-[#fb651e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Link
                  href={item.href}
                  className="text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </Link>
                {item.subItems && item.subItems.length > 0 && (
                  <button
                    className="text-white hover:text-blue-500 focus:outline-none"
                    onClick={() => toggleDropdown(index)}
                  >
                   
                    <FiChevronDown className={`h-5 w-5 ml-2 transform ${dropdownOpen[index] ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                )}
              </div>
             
              {dropdownOpen[index] && (
                <div className="pl-4">
                  {item?.subItems?.map((subItem:any, subIndex:any) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
