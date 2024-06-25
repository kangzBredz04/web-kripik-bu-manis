import { useContext } from "react";
import { AdminContext } from "./Admin";
import CashierCardProduct from "../components/CashierCardProduct";

export default function Cashier() {
  const { products } = useContext(AdminContext);
  return (
    <div className="flex">
      <div className="w-2/3">
        <div className="grid grid-cols-4 gap-5 px-5 py-5">
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
      <div className="w-1/3">Sisi Kiri</div>
    </div>
  );
}
