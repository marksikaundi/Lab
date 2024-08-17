import React from "react";

function NewsLatter() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:items-start h-[400px] md:px-40 space-y-4 ">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold w-full">Want platform news and updates? Sign up for the newsletter.</h1>
      <form action="" className="flex gap-4 flex-wrap">
        <input type="email" placeholder="Enter your email address" className="border-2 border-gray-300 p-2 rounded-md outline-none w-full max-w-96 md:w-96 " />
        <button className="bg-green-950 text-white p-2 rounded-md md:w-24 w-full hover:bg-green-900">Sign up</button>
      </form>
    </div>
  );
}

export default NewsLatter;
