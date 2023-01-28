import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Loader from "@components/Loader/index";
import axios from "axios";

export default function Categories() {
  const [Categories, setCategories] = useState([]);

  const GetCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCategories();
  }, []);

  return (
    <>
      <div className="py-[200px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {Categories.length === 0 ? (
              <Loader />
            ) : (
              Categories.map((item, index) => (
                <div key={index}>
                  <div className="bg-[#E2E2EA] h-[560px] p-10 flex items-end">
                    <div>
                      <div>
                        <h2 className="text-5xl font-bold capitalize">
                          {item}
                        </h2>
                      </div>
                      <div className="mt-6">
                        <p className="text-base text-[#9A9AB0]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                      <div className="mt-[67.29px]">
                        <button className="w-10 h-10 flex justify-center items-center rounded-full text-white stroke-2 bg-[#F86338] hover:bg-[#ca4925]">
                          <ArrowRightIcon className="w-[17.41px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
