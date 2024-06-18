"use client";
import { UserButton, SignOutButton, UserProfile } from "@clerk/nextjs";
import { LuLogOut } from "react-icons/lu";


export default function Component() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
          <UserProfile />
          <SignOutButton /><LuLogOut className="cursor-pointer" /> 

        </div>
      </div>
    </div>
  );
}




// Hello 👋, {user?.fullName} <SignOutButton><CiLogout className="cursor-pointer" />
