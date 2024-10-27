// components/UI/Header.tsx
"use client"
import { FiMenu, FiX, FiBell, FiUser, FiHelpCircle, FiLogOut } from 'react-icons/fi';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <header className="z-10 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-blue-600">
        <div className="flex items-center">
          <button
            className="mr-3 md:hidden"
            onClick={onToggleSidebar}
          >
            {isSidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <FiBell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <FiUser className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <FiHelpCircle className="w-5 h-5" />
          </button>
          <button className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            <FiLogOut className="w-4 h-4 mr-2 inline-block" />
            <span className='text-sm'>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
