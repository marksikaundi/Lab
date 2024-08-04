import React from "react";
import { BsBrowserSafari } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { RxHome } from "react-icons/rx";
import Link from "next/link";
import FooterSidebar from "./FooterSidebar";

function LeftSideBar() {

  return (
    <div className="w-72 lg:flex flex-col justify-start items-center fixed space-y-2 pt-2 left-0 top-20 z-40 overflow-y-scroll hidden">
      <div className="flex flex-col space-y-2 w-full pt-2 pb-20 px-3">
        <Link
          href="/"
          className="rounded-lg  w-full flex px-2 h-12 justify-start items-center space-x-2 hover:bg-gray-100"
        >
          <RxHome className="h-6 w-6 text-green-950" /> <span>Home</span>
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg w-full flex px-2 h-12 justify-start items-center space-x-2 hover:bg-gray-100"
        >
          <BsBrowserSafari className="h-6 w-6 text-green-950" />{" "}
          <span>Browse</span>
        </Link>
        <Link
          href="/workshops"
          className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 "
        >
          <GrWorkshop className="h-6 w-6 text-green-950" />{" "}
          <span>Workshops</span>
        </Link>
        <Link
          href="/leaderboard"
          className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 "
        >
          <MdLeaderboard className="h-6 w-6 text-green-950" />{" "}
          <span>Leaderboard</span>
        </Link>
        <Link
          href="/newsletter"
          className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2"
        >
          <RiNewsLine className="h-6 w-6 text-green-950" />{" "}
          <span>NewsLetter</span>
        </Link>
      </div>
      <FooterSidebar/>
    </div>
  );
}

export default LeftSideBar;
