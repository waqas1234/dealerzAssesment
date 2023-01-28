import React from "react";
import NewArrivalsProductSlider from "./NewArrivalsProductSlider";

export default function LoadProductArrivals() {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-bold">New Arrival</h2>
          </div>
          <div>
            <h4 className="text-2xl text-[#F86338]">See All</h4>
          </div>
        </div>
      </div>
      <NewArrivalsProductSlider />
    </>
  );
}
