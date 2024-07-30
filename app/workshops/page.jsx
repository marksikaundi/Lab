
import ChallengeCard from "@/components/DashComponents/ChallengeCard";
import { FaSearch } from "react-icons/fa";


export default function Workshops() {
  return (
    <div className="">
      <div className='border flex rounded-lg px-0 h-10 pl-4 md:hidden'>
        <input type="text" placeholder='search for a challenge' className='w-[500px] border-none outline-none' />
        <button className='bg-green-950 p-2 px-1 rounded-r-lg w-10 flex justify-center items-center hover:bg-green-900 h-full'><FaSearch className='text-[#ffffff]'/></button>
      </div>
      <div className="flex justify-start flex-wrap gap-4 ">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
}
