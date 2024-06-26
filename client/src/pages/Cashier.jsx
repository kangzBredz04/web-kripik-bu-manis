import { useContext } from "react";
import { AdminContext } from "./Admin";
import CashierCardProduct from "../components/CashierCardProduct";
import CashierCheckoutProduct from "../components/CashierCheckoutProduct";
import { api } from "../utils";

export default function Cashier() {
  const { products, cashier } = useContext(AdminContext);
  const calculateSubTotal = () =>
    cashier.reduce((acc, curr) => acc + parseInt(curr.sub_total), 0);

  return (
    <div className="bg-warm-gray flex">
      <div className="w-2/3">
        <div className="grid grid-cols-3 gap-5 px-4 py-4">
          {products?.map((p) => (
            <CashierCardProduct
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.image}
              price={p.price}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3 m-5 border-2 border-black flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center px-2 py-3">
            <h1 className="text-xl font-extrabold tracking-widest">Checkout</h1>
          </div>
          <div className="flex flex-row items-center justify-around bg-gray-300 py-1 px-3">
            <p className=" text-center text-base font-bold tracking-wider">
              Produk
            </p>
            <p className=" text-center text-base font-bold tracking-wider">
              Harga Produk
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {cashier?.map((c) => (
              <CashierCheckoutProduct
                key={c.id}
                id={c.id}
                name={c.name}
                price={c.price}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between px-6">
            <p className="font-bold text-xl">Total</p>
            <p className="font-bold text-xl">
              Rp{parseInt(calculateSubTotal()).toLocaleString("id-ID")}
            </p>
          </div>
          <div className="flex justify-between px-5 mb-5 gap-3">
            <button
              onClick={() => {
                api.delete("/cashier/delete-all").then(() => {
                  window.location.reload();
                });
              }}
              className="cursor-pointer bg-red-600 font-bold text-white w-full rounded-md py-2"
            >
              Batal Pesan
            </button>
            <button
              onClick={() => {}}
              className="cursor-pointer bg-teal font-bold text-white w-full rounded-md py-2"
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
