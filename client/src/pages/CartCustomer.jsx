/* eslint-disable no-unused-vars */
import NotLogin from "./NotLogin";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../App";
import CardCart from "../components/CardCart";
import { useNavigate } from "react-router-dom";
import NotCart from "./NotCart";

export default function CartCustomer() {
  const { cart, codeVouchers } = useContext(AllContext);

  const [subTotal, setSubTotal] = useState(0);
  const [diskon, setDiskon] = useState(0);
  const [selectedBank, setSelectedBank] = useState("");
  const [checkCode, setCheckCode] = useState("");

  console.log(codeVouchers);

  const bankDetails = [
    {
      id: 1,
      name: "Bank Transfer - BCA",
    },
    {
      id: 2,
      name: "Bank Transfer - BRI",
    },
    {
      id: 3,
      name: "Bank Transfer - BNI",
    },
    {
      id: 4,
      name: "Bank Transfer - BSI",
    },
  ];

  useEffect(() => {
    if (Array.isArray(cart)) {
      const sum = cart.reduce(
        (acc, curr) =>
          acc + parseInt(curr.price) * parseInt(curr.total_product),
        0
      );
      setSubTotal(sum);
    }
  }, [cart, diskon]);

  const handleBankChange = (event) => {
    if (event.target.value === "COD") {
      setSelectedBank("");
    } else {
      setSelectedBank(event.target.value);
    }
  };

  const navigate = useNavigate();

  if (localStorage.getItem("id")) {
    return (
      <div className="flex flex-col gap-5 py-5 bg-gray-200 font-poppins">
        <h1 className="text-center font-bold tracking-widest text-2xl">
          KERANJANG
        </h1>
        {cart.length > 0 ? (
          <div className="flex flex-col gap-4 py-5 px-5">
            <div className="w-full p-3  flex flex-col gap-3">
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
            <form className="w-full border h-fit border-brown-dark bg-brown-dark px-4 py-2 text-white">
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-white">
                <h1 className="text-base font-extrabold tracking-wider">
                  SUBTOTAL
                </h1>
                <h1 className="text-base font-extrabold tracking-wider">
                  Rp{subTotal.toLocaleString("id-ID")}
                </h1>
              </div>
              <div className=" flex w-full justify-between gap-5">
                <div className="w-1/2 py-4 border-b-[1px] border-white">
                  <form className="flex flex-row gap-2">
                    <input
                      type="text"
                      placeholder="MASUKAN KODE VOUCHER"
                      value={checkCode}
                      onChange={(e) => {
                        setCheckCode(e.target.value);
                      }}
                      className="w-full p-1 border text-black border-gray-300 rounded focus:outline-none placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-wider"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const codeDiscount = codeVouchers.find(
                          (c) => c.code === checkCode
                        );
                        if (codeDiscount) {
                          alert(
                            `SELAMAT ANDA MENDAPATKAN POTONGAN BELANJA SEBESAR ${codeDiscount.discount}%`
                          );
                          setDiskon(
                            (subTotal * parseInt(codeDiscount.discount)) / 100
                          );
                          setCheckCode("");
                        } else {
                          alert("KODE YANG DIMASUKAN TIDAK COCOK");
                        }
                      }}
                      className="bg-white rounded text-brown-dark font-semibold px-2 tracking-wider"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
                <div className="w-1/2 flex flex-row items-center  justify-between py-4 border-b-[1px] border-white">
                  <h1 className="text-base font-extrabold tracking-wider">
                    DISKON
                  </h1>
                  <h1 className="text-base font-extrabold tracking-wider">
                    Rp{diskon.toLocaleString("id-ID")}
                  </h1>
                </div>
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
                  {bankDetails.map((b) => (
                    <label key={b.id} className="flex items-center gap-2">
                      <input
                        required
                        type="radio"
                        name="Metode Transfer"
                        onChange={handleBankChange}
                      />
                      {b.name}
                    </label>
                  ))}
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="COD"
                      name="Metode Transfer"
                      onChange={handleBankChange}
                    />
                    COD
                  </label>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between py-4 border-b-[1px] border-white">
                <textarea
                  placeholder="MASUKAN ALAMAT PENGIRIMAN"
                  required
                  rows={5}
                  className="w-full p-1 border text-black border-gray-300 rounded focus:outline-none placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-wider"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  // window.location.href = "/checkout";
                  // navigate("/checkout");
                }}
                className="w-full flex justify-center py-4 mb-2 bg-white outline outline-white text-brown-dark cursor-pointer hover:bg-brown-dark hover:text-white"
              >
                <h1 className="text-base font-extrabold tracking-wider">
                  CHECKOUT
                </h1>
              </button>
            </form>
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
