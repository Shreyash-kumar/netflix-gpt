import React from "react";
import { MORE_INFO_ICON, PLAY_ICON } from "../utils/constants";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-1/3">{overview}</h1>
      <div>
        <button className="pl-5 pr-8 mr-2 rounded-md  hover: bg-gray-200 hover:bg-opacity-80">
          <div className="flex items-center">
            <img className="w-12 h-12" src={PLAY_ICON} alt="" />
            <p className="text-xl font-bold text-black">Play</p>
          </div>
        </button >
        <button className="pl-5 pr-8 rounded-md bg-gray-500/[0.7]">
          <div className="flex items-center">
            <img className="w-12 h-12\" src={MORE_INFO_ICON} alt="" />
            <p className="text-xl font-bold text-white">More</p>
          </div>
        </button >
      </div>
    </div>
  );
};

export default VideoTitle;
