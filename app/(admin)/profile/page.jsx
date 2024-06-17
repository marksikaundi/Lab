"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  const { user } = useUser();

  console.log(user);
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-[#122E17] h-32 relative">
        <div className="absolute -bottom-12 left-6">
          <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="pt-16 px-6 pb-6 grid gap-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold">Hello 👋, {user?.fullName}</h2>
          <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">
              {user?.primaryEmailAddress.emailAddress}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">2024</span>
          </div>
          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">{user?.id}</span>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">About</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {user?.fullName} is a passionate software engineer with a strong
            background in full-stack development. He has a keen eye for design
            and a commitment to writing clean, maintainable code. In his free
            time, {user?.fullName} enjoys hiking, reading, and exploring the
            latest technologies.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              Hiking
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              Reading
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              Technology
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              Photography
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
