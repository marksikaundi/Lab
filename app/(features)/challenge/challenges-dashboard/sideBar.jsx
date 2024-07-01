import React from "react";
import SidebarButton from "./sideBarButton";

const Sidebar = ({challenges, onSelectChallenge}) => {


  return (
    <aside className="w-[250px] max-w-xs z-40  mt-8 ml-6">
      <h2 className=" text-2xl pb-4 font-bold">Challenges</h2>
      <div className="h-full px-3 max-h-[70vh] overflow-y-auto scroll-smooth">
        <ul className=" flex flex-col text-xl">
          {
          challenges.map((challenge) => (
            <li className="border-b-[0.2px] border-gray-400"><SidebarButton key={challenge.title} challengeName={challenge.title} onClick={() => onSelectChallenge(challenge)} />
            </li>
          ))
        }
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
