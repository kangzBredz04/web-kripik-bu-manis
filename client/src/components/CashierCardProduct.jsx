/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { api } from "../utils";

/* eslint-disable react/prop-types */
export default function CashierCardProduct({ id, name, image, price }) {
  const [cashierProduct, setCashierProduct] = useState({});

  useEffect(() => {
    setCashierProduct({
      id_product: id,
      total_product: 1,
      price: price,
    });
  }, []);

  return (
    <div
      onClick={() => {
        api.post("/cashier/add", cashierProduct).then(() => {
          window.location.reload();
        });
      }}
      className="bg-teal text-white cursor-pointer flex flex-col justify-between font-poppins rounded-md"
    >
      <div className="rounded-md">
        <img src={`/${image}`} alt="" className="rounded-md" />
        <div className="p-1 items-center flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-base text-center font-bold">{name}</p>
            <p className="text-base font-extrabold text-center text-teal">
              Rp{parseInt(price).toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
