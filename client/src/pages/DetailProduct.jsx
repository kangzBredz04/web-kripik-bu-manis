/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { AllContext } from "../App";
import { GoShareAndroid } from "react-icons/go";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { PiHandsPrayingBold } from "react-icons/pi";
import { api } from "../utils";
import CardProduct from "../components/CardProduct";
import Loading from "../components/Loading";
// import { api } from "../utils";

import { FaPlus, FaMinus } from "react-icons/fa6";

export default function DetailProduct() {
  const { id } = useParams();
  const { products } = useContext(AllContext);
  //   const [user] = useOutletContext();
  const product = products.find((p) => p.id == parseInt(id));

  const productsLike = products
    .filter((p) => p.id !== localStorage.getItem("id_product"))
    .slice(0, 4);

  const navigate = useNavigate();

  if (product?.id) {
    return (
      <div className="bg-brown-light font-poppins">
        <div className="flex justify-center py-3">
          <h1 className="text-4xl font-bold tracking-wider">DETAIL PRODUK</h1>
        </div>
        <div className="mx-32 flex flex-row rounded-lg bg-white">
          <div className="border border-gray-200 w-96 rounded-lg">
            <img src={product.image} alt="" className="rounded-s-lg" />
          </div>
          <div>
            <div className="my-10 mx-8 flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-brown-dark">
                {product.name}
              </h1>
              <h1 className="font-semibold text-2xl">
                Rp{parseInt(product.price).toLocaleString("id-ID")} {""}/Kg
              </h1>
              <p className="font-light text-xl">{product.description}</p>
            </div>
            <div className="my-10 mx-8 gap-5 flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <button className="py-3 px-3 bg-brown-dark rounded-full text-white text-xl font-bold">
                  <FaMinus />
                </button>
                <p className="text-2xl">1</p>
                <button className="py-3 px-3 bg-brown-dark rounded-3xl text-white text-xl font-bold">
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={() => {
                  if (localStorage.getItem("id")) {
                    alert("Bisa");
                  } else {
                    alert("Anda harus login dahulu");
                    navigate("/login");
                  }
                }}
                className="w-full py-2 px-11 bg-brown-dark rounded-3xl text-white text-xl font-bold"
              >
                PESAN
              </button>
            </div>
          </div>
        </div>
        <div className="w-full py-7">
          <h1 className="text-center text-2xl font-bold tracking-wider">
            ANDA JUGA MUNGKIN MENYUKAI
          </h1>
          <div className="grid grid-cols-4 gap-5 px-5 py-5">
            {productsLike?.map((p) => (
              <CardProduct
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                price={p.price}
                description={p.description}
                stock={p.stock}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    <Loading />;
  }
}
