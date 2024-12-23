"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="text-black bg-slate-400">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center h-auto w-full px-4 py-2">
        <div className="flex items-center font-serif text-2xl p-2">
          <h1 className="hover:underline">Data Fetching</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-wrap">
          <p className="text-sm text-black hover:underline">Help</p>
          <span className="hidden sm:block border-l border-gray-500 h-5"></span>
          <p className="text-sm text-black hover:underline">Join Us</p>
          <span className="hidden sm:block border-l border-gray-500 h-5"></span>
          <p className="text-sm text-black hover:underline">Sign In</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center bg-slate-200 w-full px-2 py-2 gap-4">
        {/* Logo Section */}
        <div className="flex items-center p-2">
          <Image
            src="/images/Vector.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation Section */}
        <nav className="flex ml-auto items-center font-serif text-black gap-4 text-lg">
          <Link href="/" className="flex items-center px-4 hover:underline">
            <IoIosHome className="mr-2" />
            <span>Home</span>
          </Link>
         
          <Link
            href="/client"
            className="flex items-center px-4 hover:underline"
          >
            <FaLaptop className="mr-2" />
            <span>Client Side</span>
          </Link>
          <Link href="/server" className="flex items-center px-4 hover:underline">
          <HiMiniAdjustmentsHorizontal className="mr-2" />
          <span>Server Side</span>
          </Link>

        
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
