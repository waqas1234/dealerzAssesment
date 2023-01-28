import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CartIcon,
  HeartIcon,
  LogoImage,
  PhoneIcon,
  UserIcon,
} from "@assets/images/index";
import { Link } from "react-router-dom";

export default function Header() {
  const [Menu, setMenu] = useState([
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "About",
      path: "/about",
      active: false,
    },
    {
      name: "FAQ",
      path: "/faq",
      active: false,
    },
    {
      name: "Blog",
      path: "/blog",
      active: false,
    },
  ]);

  const selector = useSelector((state) => state.cart);
  const CartQuantity = selector.totalQuantity;

  return (
    <>
      <div className="container">
        <div className="flex justify-between h-[96px] items-center">
          <div className="flex items-center">
            <div>
              <img src={PhoneIcon} className="w-[20px]" alt="Phone Icon" />
            </div>
            <div className="ml-[9.78px]">
              <span className="text-base font-medium">+022 319 821 967</span>
            </div>
          </div>
          <div>
            <div>
              <img src={LogoImage} alt="Logo" className="w-[166.58px]" />
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <div className="w-10 h-10 rounded-full border border-black flex justify-center items-center cursor-pointer">
                  <span className="text-base font-medium">Fb</span>
                </div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full border border-black flex justify-center items-center cursor-pointer">
                  <span className="text-base font-medium">Tw</span>
                </div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full border border-black flex justify-center items-center cursor-pointer">
                  <span className="text-base font-medium">Lg</span>
                </div>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full border border-black flex justify-center items-center cursor-pointer">
                  <span className="text-base font-medium">Yt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between h-[70px] items-center">
          <div>
            <div className="flex gap-[38px]">
              {Menu.map((items, index) => (
                <div key={index}>
                  <Link
                    to={items.path}
                    className={`text-base ${
                      items.active === true && "font-bold"
                    }`}
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex gap-[46.35px]">
              <div>
                <img src={HeartIcon} className="w-[27.31px]" alt="HeartIcon" />
              </div>
              <div className="relative">
                <Link to="/cart">
                  <img src={CartIcon} className="w-6" alt="HeartIcon" />
                  <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-[#F3692E] flex justify-center items-center text-white">
                    {CartQuantity > 0 ? CartQuantity : "0"}
                  </div>
                </Link>
              </div>
              <div>
                <img src={UserIcon} className="w-6" alt="HeartIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
