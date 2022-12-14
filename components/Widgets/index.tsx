import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widget = () => {
  return (
    <div className={"px-2 mt-2 col-span-2 hidden lg:inline"}>
      {/*Search*/}
      <div
        className={
          "flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2"
        }
      >
        <MagnifyingGlassIcon className={"h-5 w-5 text-gray-400"} />
        <input
          className={"bg-transparent flex-1 outline-none"}
          type="text"
          placeholder={"Search Twitter"}
        />
      </div>
      <TwitterTimelineEmbed
        sourceType={"profile"}
        screenName={"mtscarcrf"}
        options={{
          height: 1000,
        }}
      />
    </div>
  );
};

export default Widget;
