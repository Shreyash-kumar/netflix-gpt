import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black rounded-md grid grid-cols-12" action="">
          <input
            type="text"
            className="p-4 m-4 rounded-md col-span-9"
            placeholder="What would you like to watch today?"
          />
          <button className="py-2 px-2 m-4 bg-red-700 text-white rounded-md col-span-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
