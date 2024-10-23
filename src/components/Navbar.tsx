"use client";
import { useState } from "react";
import Logo from "@/assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/icons/menu.svg";
import { MdClose } from "react-icons/md"; // Import the close icon

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={Logo} alt="Saas logo" className="h-12 w-12 relative" />
          </div>

          {/* Menu icon for small screens */}
          <div
            className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdClose className="text-white" /> // Show close icon when the menu is open
            ) : (
              <MenuIcon className="text-white" /> // Show menu icon when the menu is closed
            )}
          </div>

          {/* Navigation for larger screens */}
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>

        {/* Collapsible menu for small screens */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <nav className="flex flex-col items-center gap-4 py-4">
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Updates
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Help
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Customers
              </a>
              <button className="bg-white py-2 px-4 rounded-lg w-full">
                Get for free
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
