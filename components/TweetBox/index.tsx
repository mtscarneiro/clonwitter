import React, { useState } from "react";
import {
  CalendarIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const TweetBox = () => {
  const [input, setInput] = useState<string>('')


  return (
    <>
      <div className="flex space-x-2 p-5">
        <img
          className={"mt-4 h-14 w-14 object-cover rounded-full"}
          src="https://links.papareact.com/gll"
          alt=""
        />

        <div className="flex flex-1 items-center pl-2">
          <form className="flex flex-1 flex-col">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-24 w-full text-xl outline-none placeholder:text-xl"
              type="text"
              placeholder={"What's Happening?"}
            />
            <div className={"flex items-center"}>
              <div className={"flex flex-1 space-x-2 text-twitter"}>
                <PhotoIcon
                  className={
                    "h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
                  }
                />
                <MagnifyingGlassCircleIcon className={"h-5 w-5"} />
                <FaceSmileIcon className={"h-5 w-5"} />
                <CalendarIcon className={"h-5 w-5"} />
                <MapPinIcon className={"h-5 w-5"} />
              </div>

              <button
                disabled={!input}
                className={
                  "bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
                }
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TweetBox;
