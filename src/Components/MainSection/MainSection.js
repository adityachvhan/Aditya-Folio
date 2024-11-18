import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import Experience from "../Experience/Experience";
import ExpertArea from "../ExpertArea/ExpertArea";
import Projects from "../RecentProject/Projects";
import { Box, Typography, Button } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Service from "../Service/Service";
import WorkTogether from "../WorkTogether/WorkTogether";

const MainSection = () => {
  return (

    <div>
      <div className="w-[80%] mx-auto mt-8 rounded-lg flex justify-between gap-2">
        {/* Left Section (Profile Card) */}
        <div className="w-[30%]">
          <ProfileCard />
        </div>

        {/* Middle Section (Experience & Expert Area) */}
        <div className="w-[35%] flex flex-col gap-3">
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
        <div className="w-full sm:w-[35%] bg-white rounded-lg shadow-md p-4 mt-6" style={{ height: "620px" }}>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold ml-6">Recent Projects</h1>
            <a href="#" className="text-blue-600 text-sm hover:underline mr-6">
              All Projects →
            </a>
          </div>
          <div className="flex flex-col gap-4 h-full overflow-y-auto">
            {/* Project Card */}
            <div className="rounded-lg p-3 transition-shadow duration-300">
              <Projects />
            </div>
          </div>
        </div>

      </div>
      <div className="flex gap-7 w-[80%] mx-auto  border-gray-200 rounded-lg">
        <div className="w-[64%] bg-white rounded-lg shadow-md">
          <Service />
        </div>
        <div className="w-[35%] bg-white rounded-lg shadow-md">
          <WorkTogether />
        </div>
      </div>

    </div>

  );
};

export default MainSection;
