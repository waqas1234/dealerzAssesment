import React from "react";
import LightButton from "../Buttons/LightButton";

export default function Offer() {
  return (
    <>
      <div className="pb-[200px]">
        <div className="container">
          <div className="flex flex-col h-[496px] justify-center items-center bg-[#F86338]">
            <div>
              <span className="text-2xl text-white">March Discount</span>
            </div>
            <div className="mt-6">
              <h3 className="text-[64px] font-bold text-white">
                Up to 70% off
              </h3>
            </div>
            <div className="mt-[56px]">
              <LightButton text="Got it" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
