import React from "react";
import LoadBestSeller from "./LoadBestSeller";

export default function BestSeller() {
  return (
    <>
      <div className="pb-[200px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold">Best Seller</h2>
            </div>
          </div>
          <LoadBestSeller />
        </div>
      </div>
    </>
  );
}
