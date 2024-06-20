/* eslint-disable no-unused-vars */
import NotLogin from "./NotLogin";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../App";
import CardCart from "../components/CardCart";
import { useNavigate } from "react-router-dom";
import NotCart from "./NotCart";

export default function CartUser() {
  const { cart } = useContext(AllContext);

  const [subTotal, setSubTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);

  useEffect(() => {
    const sum = cart?.reduce(
      (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.total_product),
      0
    );
    setSubTotal(sum);
  }, [cart]);

  const navigate = useNavigate();

  if (localStorage.getItem("id")) {
    return (
      <div className="flex flex-col gap-5 py-5 bg-brown-light font-poppins">
        <h1 className="text-center font-bold tracking-widest text-2xl">
          KERANJANG
        </h1>
        {cart.length > 0 ? (
          <div className="flex gap-4 py-5 px-5">
            <div className="w-3/4 p-3  flex flex-col gap-3">
              <div className="flex flex-row items-center">
                <h1 className="w-3/5 text-center text-base font-extrabold tracking-wider">
                  PRODUK
                </h1>
                <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
                  JUMLAH PRODUK
                </h1>
                <h1 className="w-1/5 text-center text-base font-extrabold tracking-wider">
                  SUBTOTAL
                </h1>
              </div>
              <div className="flex flex-col">
                {cart.map((c) => (
                  <CardCart
                    key={c.id}
                    id_cart={c.id}
                    id_product={c.id_product}
                    name={c.name}
                    image={c.image}
                    total_product={c.total_product}
                    price={c.price}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/4 border h-fit border-brown-dark bg-brown-dark px-4 py-2 text-white">
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-white">
                <h1 className="text-base font-extrabold tracking-wider">
                  SUBTOTAL
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp{subTotal.toLocaleString("id-ID")}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-white">
                <h1 className="text-base font-extrabold tracking-wider">
                  DISKON
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp. 0
                </h1>
              </div>
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-white">
                <h1 className="text-base font-extrabold tracking-wider">
                  TOTAL
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp{(subTotal - diskon).toLocaleString("id-ID")}
                </h1>
              </div>
              <div className="flex flex-col justify-between py-2 border-b-[1px] border-white">
                <h1 className="text-base font-extrabold tracking-wider">
                  METODE PEMBAYARAN
                </h1>
                <div className="">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Bank Transfer - BCA"
                      //   checked={payment === "Bank Transfer - BCA"}
                      //   onChange={handleOptionPayment}
                    />
                    Bank Transfer - BCA
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Bank Transfer - BNI"
                      //   checked={payment === "Bank Transfer - BNI"}
                      // onChange={handleOptionPayment}
                    />
                    Bank Transfer - BNI
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Bank Transfer - BRI"
                      //   checked={payment === "Bank Transfer - BRI"}
                      // onChange={handleOptionPayment}
                    />
                    Bank Transfer - BRI
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Bank Transfer - BSI"
                      //   checked={payment === "Bank Transfer - BSI"}
                      // onChange={handleOptionPayment}
                    />
                    Bank Transfer - BSI
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="COD"
                      //   checked={payment === "QRIS"}
                      // onChange={handleOptionPayment}
                    />
                    COD
                  </label>
                </div>
              </div>
              <div
                onClick={() => {
                  // window.location.href = "/checkout";
                  navigate("/checkout");
                }}
                className="flex justify-center py-4 mb-2 bg-white outline outline-white text-brown-dark cursor-pointer hover:bg-brown-dark hover:text-white"
              >
                <h1 className="text-base font-extrabold tracking-wider">
                  CHECKOUT
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <NotCart />
        )}
      </div>
    );
  } else {
    return <NotLogin />;
  }
}
