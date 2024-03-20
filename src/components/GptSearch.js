import React from "react";
import GptSearchSuggestion from "./GptSearchSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="h-screen">
      <div className="absolute z-0">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <div className="relative z-10">
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
