import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Experience from "../Experience/Experience";
import ExpertArea from "../ExpertArea/ExpertArea";

const MainSection = () => {
  return (
    <div className="w-[80%] mx-auto mt-8 rounded-lg flex justify-between gap-4">
      {/* Left Section (Profile Card) */}
      <div className="w-[30%]">
        <ProfileCard />
      </div>

      {/* Middle Section (Experience & Expert Area) */}
      <div className="w-[30%] flex flex-col gap-3">
        {/* Work Experience Section */}
        <div className=" rounded-lg p-4 flex-1">
          <Experience />
        </div>

        {/* Expert Area Section */}
        <div className=" rounded-lg p-4 flex-1">
          <ExpertArea />
        </div>
      </div>

      {/* Right Section (Recent Projects) */}
      <div className="w-[30%] bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 flex justify-between">
          Recent Projects
          <a href="#" className="text-blue-600 text-sm">
            All Projects →
          </a>
        </h3>
        <div className="flex flex-col gap-4">
          {/* Project 1 */}
          <div className="bg-gray-100 rounded-lg p-3">
            <img
              src="https://via.placeholder.com/200x100"
              alt="Project 1"
              className="rounded-lg mb-2"
            />
            <p className="text-blue-600 text-xs">Product Design</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 rounded-lg p-3">
            <img
              src="https://via.placeholder.com/200x100"
              alt="Project 2"
              className="rounded-lg mb-2"
            />
            <p className="text-blue-600 text-xs">Product Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
