import React from "react";
import { Check } from "@assets/images/index";

export default function checkoutForm() {
  return (
    <>
      <div className="w-5/6 m-auto mt-40">
        <div>
          <h4 className="text-5xl font-bold">Checkout</h4>
        </div>
        <div className="mt-14">
          <label className="text-2xl font-bold">Email Address</label>
          <input
            type="text"
            className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg"
            placeholder="Input your email here"
          />
          <div className=" mt-6">
            <span className="text-base text-[#9A9AB0]">
              Already have an account? Sign in
            </span>
          </div>
        </div>

        <div className="mt-20">
          <h4 className="text-[31px] font-bold">Shipping Address</h4>

          <div className="grid lg:gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl-grid-cols-2 mt-14">
            <div className="">
              <label className="text-2xl font-bold">First Name</label>
              <input
                type="text"
                className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg"
                placeholder="First Name"
              />
            </div>
            <div className="">
              <label className="text-2xl font-bold">Last Name</label>
              <input
                type="text"
                className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg"
                placeholder="Last Name"
              />
            </div>

            <div className="col-span-2 mt-10">
              <label className="text-2xl font-bold">Address Line</label>
              <textarea
                className="w-full mt-6 px-[40px] py-[20px] h-[200px] border-[#F86338] border-2 bg-transparent rounded-lg"
                placeholder="Address Line"
              ></textarea>
            </div>

            <div className="col-span-2 mt-10">
              <label className="text-2xl font-bold">Country</label>
              <select className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg">
                <option value="volvo">Country</option>
                <option value="saab">Country</option>
                <option value="mercedes">Country</option>
                <option value="audi">Country</option>
              </select>
            </div>

            <div className="mt-10">
              <label className="text-2xl font-bold">Postal Code</label>
              <select className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg">
                <option value="">Postal Code</option>
                <option value="00000">00000</option>
                <option value="00000">00000</option>
                <option value="00000">00000</option>
              </select>
            </div>

            <div className="mt-10">
              <label className="text-2xl font-bold">Phone Number</label>
              <input
                type="text"
                className="w-[100%] h-[79px] mt-6 px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg"
                placeholder="Phone Number"
              />
            </div>

            <div className="col-span-2 mt-20">
              <h4 className="text-[31px] font-bold">Billing Address</h4>

              <div className="flex items-center mt-[46px] gap-7">
                <img src={Check} className="w-[30px]" alt="Check" />
                <h5 className="text-2xl text-[#F86338]">
                  Same as shipping address
                </h5>
              </div>
            </div>

            <div className="col-span-2">
              <button className="bg-[#F86338] text-white px-[24px] py-[18px] w-full rounded-lg mt-[60px]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
