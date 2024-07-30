import React from "react";
import { BsBrowserSafari } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { CiMenuKebab } from "react-icons/ci";
import Link  from "next/link";

function LeftSideBar() {
  return (
    <div className="w-72 lg:flex flex-col justify-start items-center fixed space-y-2 h-[473px] pt-2 left-0 top-20 z-40 overflow-y-scroll hidden">
      <div className="flex flex-col space-y-2 w-full pt-2 pb-2 px-3">
        <Link href="/dashboard-2" className="rounded-lg bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
          <BsBrowserSafari className="h-6 w-6 text-green-950" /> <span>Browse</span>
        </Link>
        <Link href="/workshops" className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
          <GrWorkshop className="h-6 w-6 text-green-950" /> <span>Workshops</span>
        </Link>
        <Link href="/leaderboard" className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
          <MdLeaderboard className="h-6 w-6 text-green-950" /> <span>Leaderboard</span>
        </Link>
        <Link href="/newsletter" className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2">
          <RiNewsLine className="h-6 w-6 text-green-950" /> <span>NewsLetter</span>
        </Link>
      </div>
      <div className="w-full px-3">
        <div className="border p-3 rounded-lg mb-4">
          <h2 className="text-lg font-bold py-2">Upgrade to pro</h2>
          <p className="pb-2 text-sm">
            Unlock all courses, get access to source code, and more.
          </p>
          <button className="bg-green-950 text-white w-full rounded-lg py-2 hover:bg-green-900">
            Upgrade
          </button>
        </div>
      </div>
      <Separator className="my-4 " />
      <div className="flex space-x-4 text-xs justify-between items-center w-full px-3">
        <span>&#169; 2024 Lupleg Dev </span>
        <button className="hover:bg-gray-100 p-2 rounded-md">
          <CiMenuKebab className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default LeftSideBar;
