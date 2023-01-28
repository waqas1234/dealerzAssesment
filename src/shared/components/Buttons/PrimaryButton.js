import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function PrimaryButton({ width, height, text }) {
  return (
    <>
      <button
        className={`w-[120px] h-[56px] flex items-center justify-center text-base text-white font-bold bg-[#F86338] hover:bg-[#ca4925] rounded-lg`}
      >
        <div className="flex items-center justify-center">
          {text} <ChevronRightIcon className="w-6" />
        </div>
      </button>
    </>
  );
}
