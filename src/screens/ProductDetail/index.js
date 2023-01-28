import { CartLight, ShareIcon, Star, Check } from "@assets/images/index";
import React, { useEffect, useState } from "react";
import BestSeller from "@components/Home/BestSeller";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import truncateText from "@utils/truncateText";
import toast, { Toaster } from "react-hot-toast";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const id = useParams();

  const ValidateProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id.id}`
      );
      setProduct(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ValidateProduct();
  }, []);

  // increment quantity //

  const HandleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // decrement quantity //

  const HandleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // add to cart with quantity //
  const handleAddToCart = (product) => {
    dispatch({
      type: "cart/addItemToCart",
      payload: {
        product: product,
        quantity: quantity,
      },
    });

    // add toast notification position right //
    const ProductTitle = product.title;
    toast.success(ProductTitle + "added to cart", {
      position: "top-right",
      style: {
        borderRadius: "10px",
      },
    });
  };

  return (
    <>
      <div className="pl-[2rem] flex gap-4">
        <div className="w-full min-w-[800px]">
          <div className="max-w-[400px]">
            <h4 className="text-2xl font-bold leading-[57.6px] mt-[89px]">
              {`Home > ${product.category}`}
            </h4>
            <h2 className="text-5xl font-bold mt-10">
              {truncateText(product.title, 25)}
            </h2>
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="bg-[#E2E2EA] h-[400px] w-[800px]"></div>
        </div>
      </div>

      <div className="container mt-[160px] mb-[80px]">
        <div className="">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="inline-flex h-full">
              <div className="min-w-[88px]">
                <div className="w-[88px] h-[126px] bg-[#E2E2EA]"></div>
                <div className="w-[88px] h-[126px] mt-[18px] bg-[#E2E2EA]"></div>
                <div className="w-[88px] h-[126px] mt-[18px] bg-[#E2E2EA]"></div>
                <div className="w-[88px] h-[126px] mt-[18px] bg-[#E2E2EA]"></div>
              </div>
              <div className="w-full h-full flex justify-center items-center ml-4">
                <img
                  className="object-contain w-[300px] h-[300px]"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold">{product.title}</h2>
              <div className="mt-6">
                <span className="text-base text-[#515151]">
                  Avaliability :{" "}
                  <span className="text-black font-bold">48 in stocks</span>
                </span>
              </div>

              <div className="flex justify-between items-center mt-10">
                <div className="">
                  <h3 className="text-[39px] font-bold flex items-center">
                    ${product.price}
                    <label className="text-base text-[#9A9AB0] font-bold ml-6 line-through">
                      $1500
                    </label>
                  </h3>
                </div>
                <div className="flex items-center">
                  <h5 className="text-base text-black">Share</h5>
                  <img className="ml-2" src={ShareIcon} alt="share" />
                </div>
              </div>

              <div className="mt-10">
                <div className="flex">
                  <div className="min-w-[85px]">
                    <h5 className="text-base font-bold">SKU</h5>
                  </div>
                  <div className="">
                    <h5 className="text-base text-[#666666]">: AA0031</h5>
                  </div>
                </div>

                <div className="flex mt-[26px]">
                  <div className="min-w-[85px]">
                    <h5 className="text-base font-bold">Category</h5>
                  </div>
                  <div className="">
                    <h5 className="text-base text-[#666666]">
                      : {product.category}
                    </h5>
                  </div>
                </div>

                <div className="flex mt-[26px]">
                  <div className="min-w-[85px]">
                    <h5 className="text-base font-bold">Tags</h5>
                  </div>
                  <div className="">
                    <h5 className="text-base text-[#666666]">
                      : Fashion, Classic, Blouses, Dresses
                    </h5>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-[57px]">
                  <div>
                    <select className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Select Size</option>
                      <option>Size</option>
                      <option>Size</option>
                      <option>Size</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={HandleDecrement}
                        className="text-[#11142D]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="text-[#666666] text-xl font-bold mx-4">
                        {quantity}
                      </span>
                      <button
                        onClick={HandleIncrement}
                        className="text-[#11142D]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base font-bold text-[#F3692E]">
                      Add note
                    </h5>
                  </div>
                </div>

                <div className="flex items-center  mt-[57px]">
                  <div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#F86338] hover:bg-[#ca4925] flex justify-center items-center text-white text-base font-bold h-[56px] px-7 rounded-md"
                    >
                      Add to cart
                      <img className="ml-2 w-6" src={CartLight} alt="cart" />
                    </button>
                  </div>
                  <div className="ml-4">
                    <button className="flex justify-center items-center h-[56px] w-[56px] rounded-lg border-2 border-[#F86338]">
                      <img src={Star} className="w-5" alt="Star Icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />

        <div className="mt-10 mb-[120px]">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <h4 className="text-2xl font-bold">Description</h4>
              <div className="mt-8">
                <p className="text-base text-[#515151]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Fabric Details</h4>
              <div className="mt-8 flex items-center gap-[18px]">
                <img src={Check} className="w-5" alt="Check" />
                <span className="text-base text-[##515151]">100% Cotton</span>
              </div>

              <div className="mt-8 flex items-center gap-[18px]">
                <img src={Check} className="w-5" alt="Check" />
                <span className="text-base text-[##515151]">Quick Dry</span>
              </div>

              <div className="mt-8 flex items-center gap-[18px]">
                <img src={Check} className="w-5" alt="Check" />
                <span className="text-base text-[##515151]">
                  Ties as Shoulder
                </span>
              </div>

              <div className="mt-8 flex items-center gap-[18px]">
                <img src={Check} className="w-5" alt="Check" />
                <span className="text-base text-[##515151]">
                  Accusantium doloremque{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSeller />
    </>
  );
}
