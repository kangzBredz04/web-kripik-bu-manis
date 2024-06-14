import { useContext } from "react";
import CardProduct from "./CardProduct";
import { AllContext } from "../App";

export default function Home() {
  const { products } = useContext(AllContext);
  // const filterProduct = (category) => {
  //   return products.filter((p) => p.category === category).slice(0, 4);
  // };

  return (
    <div className="flex flex-col gap-20 bg-brown-light">
      <div className="w-full"></div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 py-8 m-auto">
          <div>
            <h1 className="text-center font-medium text-xl tracking-wider">
              TEMUKAN KOLEKSI TERBARU SEKARANG
            </h1>
          </div>
          <div className="text-center">
            <h3
              className="text-sm underline cursor-pointer"
              // onClick={() => navigate("/shop")}
            >
              Tampilkan Semua
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {products.map((p) => (
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
