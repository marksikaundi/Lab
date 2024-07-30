import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-start h-screen px-40 space-y-4">
      <h1 className="text-4xl font-bold">Want platform news and updates? Sign up for the newsletter.</h1>
      <form action="" className="flex gap-4">
        <input type="email" placeholder="Enter your email address" className="border-2 border-gray-300 p-2 rounded-md outline-none w-96" />
        <button className="bg-green-950 text-white p-2 rounded-md w-24 hover:bg-green-900">Sign up</button>
      </form>
    </div>
  );
}

export default page;
