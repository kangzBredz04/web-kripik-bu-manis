/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import CardProduct from "../components/CardProduct";
import { AllContext } from "../App";

// const products = [
//   {
//     id: 1,
//     name: "Keripik Original",
//     price: 20000,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modimagni quibusdam dolor cumque",
//     image: "/Keripik Original.jpeg",
//   },
//   {
//     id: 2,
//     name: "Keripik Pedas",
//     price: 10000,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modimagni quibusdam dolor cumque",
//     image: "/Keripik Pedas.jpeg",
//   },
//   {
//     id: 3,
//     name: "Keripik Coklat",
//     price: 15000,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modimagni quibusdam dolor cumque",
//     image: "/Keripik Coklat.jpeg",
//   },
//   {
//     id: 1,
//     name: "Keripik Original",
//     price: 20000,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modimagni quibusdam dolor cumque",
//     image: "/Keripik Original.jpeg",
//   },
// ];

export default function Home() {
  const { products } = useContext(AllContext);

  const filteredProducts = products.slice(1, 5);

  return (
    <div className="flex flex-col gap-20 bg-brown-light">
      <div className="w-full"></div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 py-8 m-auto">
          <div>
            <h1 className="text-center font-medium text-xl tracking-wider">
              BEST SELLER
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 px-5 py-5">
          {filteredProducts.map((p) => (
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
}
