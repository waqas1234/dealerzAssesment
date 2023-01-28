import React from "react";
import { Remove } from "@assets/images/index";
import BestSeller from "@components/Home/BestSeller";
import CheckoutForm from "@components/Cart/checkoutForm";
import { useSelector } from "react-redux";
import Loader from "@components/Loader/index";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@store/slices/cartSlice";
import NumberUtils from "@utils/numberUtils";
import truncateText from "@utils/truncateText";

export default function Cart() {
  const selector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = selector;

  return (
    <>
      <div className="pl-[2rem] flex gap-4">
        <div className="w-full min-w-[400px]">
          <div className="max-w-[400px]">
            <h4 className="text-2xl font-bold leading-[57.6px] mt-[89px]">
              {" Home > Shooping Bag"}
            </h4>
            <h2 className="text-5xl font-bold mt-10">Shopping Bag</h2>
          </div>
        </div>
        <div className="w-full flex gap-3">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="bg-[#E2E2EA] h-[400px] w-[1200px]"
            ></div>
          ))}
        </div>
      </div>

      <div className="container my-[160px]">
        <div className="w-5/6 m-auto">
          <div className="mb-[43px]">
            <h2 className="text-5xl font-bold">Cart</h2>
          </div>
          <div className="h-[72px] items-center bg-[#F86338] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 rounded-lg">
            <div>
              <h4 className="text-xl font-bold text-white px-10">
                Product Name
              </h4>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white px-10">Price</h4>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white px-10">Quantity</h4>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white px-10">Total</h4>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white px-10">Remove</h4>
            </div>
          </div>
          <div>
            {items.length === 0 ? (
              <div className="flex justify-center items-center h-[400px]">
                <h4 className="text-2xl font-bold text-[#11142D]">
                  No items in cart
                </h4>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 items-center mt-10 mb-12"
                >
                  <div className="flex items-center">
                    <div className="w-20 h-20 flex rounded-[4px] bg-[#E2E2EA]"></div>
                    <div className="ml-10">
                      <h4 className="text-2xl font-bold text-[#11142D]">
                        {truncateText(item.title, 20)}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#11142D] px-10">
                      ${item.price}
                    </h4>
                  </div>

                  <div className="">
                    <h4 className="text-2xl font-bold text-[#11142D] px-10">
                      {item.quantity}
                    </h4>
                  </div>

                  <div className="">
                    <h4 className="text-2xl font-bold text-[#11142D] px-10">
                      {item.price * item.quantity}
                    </h4>
                  </div>

                  <div className="flex justify-center">
                    <img
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                      src={Remove}
                      className="px-10 cursor-pointer"
                      alt="remove"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-5/6 m-auto">
          <div className="grid lg:gap-[120px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="py-[72px] px-[40px] bg-[#FFEFEB]">
              <h4 className="text-2xl font-bold">Have a Coupon?</h4>
              <div className="mt-7">
                <input
                  type="text"
                  className="w-[100%] h-[56px] px-[40px] border-[#F86338] border-2 bg-transparent rounded-lg"
                  placeholder="Input your email here"
                />
              </div>
              <div className="mt-10">
                <button className="bg-[#F86338] text-white px-[30px] py-[20px] rounded-lg">
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold">Cart Totals</h4>
              </div>
              <div>
                <div className="flex gap-[78px] mt-10">
                  <h4 className="text-basel font-bold">Subtotal</h4>
                  <h4 className="text-base">
                    {NumberUtils.format(totalAmount)}
                  </h4>
                </div>
                <div className="flex gap-[78px] mt-6">
                  <h4 className="text-basel font-bold">Shipping</h4>
                  <h4 className="text-base">Free Shipping</h4>
                </div>

                <div className="flex gap-[78px] mt-6">
                  <h4 className="text-basel font-bold">Total</h4>
                  <h4 className="text-base">
                    {NumberUtils.format(totalAmount)}
                  </h4>
                </div>
              </div>

              <div className="mt-14">
                <button className="bg-[#F86338] text-white px-[24px] py-[18px] w-full rounded-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <CheckoutForm />
      </div>
      <BestSeller />
    </>
  );
}
