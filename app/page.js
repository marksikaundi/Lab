import { Button } from "@/components/ui/button";
// import Cards from "/components/FeaturesCards/Cards.jsx";
import ProgramSummary from "@/components/FeaturesCards/ProgramSummary";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto pt-25 pb-25 px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800">
          <span className="block xl:inline">The efficiency of help and</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 xl:inline">
            Collaboration with
          </span>{" "}
          <span className="block xl:inline">Developers</span>{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 xl:inline">
            empowers
          </span>
        </h1>
        <p className="mt-4 pt-12 pb-8 text-base sm:text-lg md:text-2xl text-gray-600">
          Lupleg is a community platform that enables teams to streamline and
          help novice scale up their career in tech.
        </p>
        <Button className="W-15 mt-8 px-8 py-3 text-md bg-[#ED7133] text-white rounded-full p-8 hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-50 transition duration-300">
          <Link href="contacts">Get started</Link>
        </Button>
        <br />
        {/* <Cards /> */}
        
      </div>
      <ProgramSummary />
    </div>
  );
}
