"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { BsBrowserSafari } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";

function DashNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".menu-panel")) return;
      closeMenu();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-20 flex space-x-8 justify-between items-center md:px-8 px-2 border-b fixed top-0 w-full z-40 bg-white ">
      <div className="lg:flex space-x-4 hidden">
        <img
          src="/profile-sample.jpeg"
          alt="avatar"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">Code with Us</h3>
          <p className="text-sm">
            <span className="text-gray-400">Challenge yourself!</span>
          </p>
        </div>
      </div>
      <button onClick={toggleMenu} className="block lg:hidden">
        <RxHamburgerMenu className="h-8 w-8" />
      </button>
      {isMenuOpen && (
        <div className="menu-panel flex flex-col space-y-2 pt-2 pb-2 px-3 fixed z-50 top-0 w-[70%] bg-white border-r -left-8  transition-transform duration-300 transform translate-x-0 h-screen">
          <Link
            href="/dashboard-2"
            className="rounded-lg w-full flex px-2 h-12 justify-start items-center space-x-2"
            id="aLink"
            onClick={closeMenu}
          >
            <BsBrowserSafari className="h-6 w-6 text-green-950" />{" "}
            <span>Browse</span>
          </Link>
          <Link
            href="/workshops"
            className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 "
            onClick={closeMenu}
          >
            <GrWorkshop className="h-6 w-6 text-green-950" />{" "}
            <span>Workshops</span>
          </Link>
          <Link
            href="/leaderboard"
            className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 "
            onClick={closeMenu}
          >
            <MdLeaderboard className="h-6 w-6 text-green-950" />{" "}
            <span>Leaderboard</span>
          </Link>
          <Link
            href="/newsletter"
            className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2"
            onClick={closeMenu}
          >
            <RiNewsLine className="h-6 w-6 text-green-950" />{" "}
            <span>NewsLetter</span>
          </Link>
        </div>
      )}
      <div className="border lg:flex rounded-lg px-0 h-10 pl-4 hidden">
        <input
          type="text"
          placeholder="search for a challenge"
          className="w-[500px] border-none outline-none"
        />
        <button className="bg-green-950 p-2 px-1 rounded-r-lg w-10 flex justify-center items-center hover:bg-green-900 h-full">
          <FaSearch className="text-[#ffffff]" />
        </button>
      </div>
      <div>
        <button className="flex space-x-2 border rounded-lg p-2 justify-between tex-lg items-center hover:bg-slate-200">
          <MdLogin /> <span>Login</span>
        </button>
      </div>
    </div>
  );
}

export default DashNav;
