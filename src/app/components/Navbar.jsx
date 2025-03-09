"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonContactUs from './atoms/ButtonContactUs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full h-12 bg-black bg-opacity-50 z-50`}>
      <div className="flex items-center justify-between px-4 ">
        <div className="flex items-center">
          <Image src="/images/logo/stepuplogo2.png" alt="Logo" width={50} height={50} />
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <Link href="/services">
            <p className="text-gray-400 hover:text-gray-100">Services</p>
          </Link>
          <Link href="/portfolio">
            <p className="text-gray-400 hover:text-gray-100">Portfolio</p>
          </Link>
          <Link href="/insight">
            <p className="text-gray-400 hover:text-gray-100">Insight</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-400 hover:text-gray-100">About Us</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
        <ButtonContactUs />
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="flex flex-col items-center justify-center w-5 h-10 gap-1">
            <div className={`bg-white h-[2px] w-full transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`bg-white h-[2px] w-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`bg-white h-[2px] w-full transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        </div>
      </div>
      <div className={`lg:hidden bg-black w-full absolute top-12 left-0 h-[calc(100vh-64px)] transition-transform duration-700 transform ${isOpen ? 'translate-x-0  md:translate-x-1/2' : 'translate-x-full'}`}>
        {isOpen && (
          <div className="flex flex-col items-start pl-4">
            <Link href="/services">
              <p className="text-gray-400 hover:text-gray-100 py-2">Services</p>
            </Link>
            <Link href="/portfolio">
              <p className="text-gray-400 hover:text-gray-100 py-2">Portfolio</p>
            </Link>
            <Link href="/insight">
              <p className="text-gray-400 hover:text-gray-100 py-2">Insight</p>
            </Link>
            <Link href="/about">
              <p className="text-gray-400 hover:text-gray-100 py-2">About Us</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;