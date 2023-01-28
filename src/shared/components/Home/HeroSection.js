import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function HeroSection() {
  return (
    <>
      <div className="pl-[2rem] flex gap-4">
        <div className="w-full min-w-[520px]">
          <div className="max-w-[400px]">
            <h1 className="text-5xl font-bold leading-[57.6px] mt-[89px]">
              Sort out Your Spring Look
            </h1>
            <div className="mt-8">
              <p className="text-base font-medium text-[#9A9AB0]">
                We will help to develop every smallest thing into a big one for
                your company.
              </p>
            </div>
            <div className="mt-[58px]">
              <PrimaryButton text={"Shop"} />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-[#E2E2EA] h-[619px] w-[504px]"></div>
          ))}
        </div>
      </div>
    </>
  );
}
