import { useContext } from "react";
import { AdminContext } from "./Admin";
import CashierCardProduct from "../components/CashierCardProduct";

export default function Cashier() {
  const { products } = useContext(AdminContext);
  return (
    <div className="bg-gray-200 flex">
      <div className="w-2/3">
        <div className="grid grid-cols-4 gap-5 px-4 py-4">
          {products?.map((p) => (
            <CashierCardProduct
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
      <div className="w-1/3 m-5 px-4 py-2 border border-black">
        <div className="flex flex-col items-center px-2 py-3">
          <h1>Checkout</h1>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className=" text-center text-xs font-extrabold tracking-wider">
            PRODUK
          </p>
          <p className=" text-center text-xs font-extrabold tracking-wider">
            JUMLAH PRODUK
          </p>
          <p className=" text-center text-xs font-extrabold tracking-wider">
            SUBTOTAL
          </p>
        </div>
      </div>
    </div>
  );
}
