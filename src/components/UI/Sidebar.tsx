// components/UI/Sidebar.tsx
"use client"
import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiBarChart, FiSettings, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { FaBuilding, FaUser } from 'react-icons/fa6';

interface SidebarProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    onToggle(isOpen); // Close sidebar on mobile when a link is clicked
  };

  const getLinkClass = (link: string) => (
    `flex items-center px-4 py-3 mt-1 text-sm font-semibold rounded hover:bg-gray-200 ${activeLink === link ? 'bg-gray-100  ' : 'text-gray-700'}`
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-20 h-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
        isOpen ? 'transform translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => onToggle(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-7 h-7 text-gray-600" />
          ) : (
            <FiMenu className="w-7 h-7 text-gray-600" />
          )}
        </button>
        <div className={`mt-6 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block w-[250px]`}>
          <div className="p-2 border rounded-lg mb-4 mt-10 md:mt-0">
            <div className="flex items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Mikat Syed</h3>
                <p className="text-gray-500 text-sm">User</p>
              </div>
            </div>
          </div>
          <Link href="/dashboard">
            <p
              onClick={() => handleLinkClick('dashboard')}
              className={getLinkClass('dashboard')}
            >
              <FiHome className="w-5 h-5 mr-2" />
              <span>Dashboard</span>
            </p>
          </Link>
          <Link href="/user">
            <p
              onClick={() => handleLinkClick('user')}
              className={getLinkClass('user')}
            >
              <FaUser className="w-5 h-5 mr-2" />
              <span>User</span>
            </p>
          </Link>
          <Link href="/company">
            <p
              onClick={() => handleLinkClick('company')}
              className={getLinkClass('company')}
            >
              <FaBuilding className="w-5 h-5 mr-2" />
              <span>Company</span>
            </p>
          </Link>
          <Link href="/settings">
            <p
              onClick={() => handleLinkClick('settings')}
              className={getLinkClass('settings')}
            >
              <FiSettings className="w-5 h-5 mr-2" />
              <span>Settings</span>
            </p>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
