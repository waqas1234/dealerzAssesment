import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function LightButton({ width, height, text }) {
  return (
    <>
      <button
        className={`w-[${width ? width + "px" : "120px"}] h-[${
          height ? height + "px" : "56px"
        }] flex items-center justify-center text-base text-black font-bold bg-[#ffffff] hover:bg-[#dddddd] rounded-lg`}
      >
        <div className="flex items-center justify-center">
          {text} <ChevronRightIcon className="w-6" />
        </div>
      </button>
    </>
  );
}
