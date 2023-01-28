import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Loader from "@components/Loader/index";
import { Link } from "react-router-dom";
import truncateText from "@utils/truncateText";

export default function LoadBestSeller() {
  const [product, setProduct] = useState([]);

  const GetProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/?limit=4"
      );
      setProduct(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      <div className="mt-[56px]">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {product.length === 0 ? (
            <Loader />
          ) : (
            product.map((item, index) => {
              return (
                <div key={index}>
                  <div className="relative  h-[296px] flex justify-center items-center">
                    <Link to={`/productdetail/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain center w-[200px] h-[200px]"
                      />
                    </Link>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-[#F86338] flex justify-center items-center">
                        <HeartIcon className="text-[#F86338] w-[20.48px] stroke-2" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mt-5">
                      <label className="text-sm font-medium text-[#F3692E]">
                        {item.category}
                      </label>
                    </div>
                    <div className="mt-2">
                      <Link to={`/productdetail/${item.id}`}>
                        <h3 className="text-2xl font-bold">
                          {truncateText(item.title, 20)}
                        </h3>
                      </Link>
                    </div>
                    <div className="mt-[12px]">
                      <span className="text-xs font-normal text-[#515151]">
                        Medium Shoulder Bag
                      </span>
                    </div>
                    <div className="mt-[15px]">
                      <h5 className="text-2xl font-bold text-[#F3692E]">
                        $1000
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
