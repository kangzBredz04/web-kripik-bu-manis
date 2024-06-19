/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { api } from "../utils.js";
import { AllContext } from "../App";

export default function Register() {
  const { register, setRegister } = useContext(AllContext);
  const [user, setUser] = useOutletContext();

  useEffect(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    // setCustomerCode(`CS${randomCode}`);
    setRegister({
      ...register,
      customer_code: `CS${randomCode}`,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/auth/register", register).then((res) => {
      alert(res.msg);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("customer_code", res.data.customer_code);
      localStorage.setItem("name", res.data.name);
      window.location.href = "/";
    });
  };
  return (
    <div className="py-8 flex items-center justify-center bg-brown-light font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brown-dark">
          Register Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Code</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={register.customer_code}
              disabled
              // onChange={(e) =>
              //   setRegister({
              //     ...register,
              //     customer_code: customerCode,
              //   })
              // }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              required
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={register.name}
              onChange={(e) =>
                setRegister({
                  ...register,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              required
              type="password"
              className="mt-1 p-2 w-full border rounded"
              value={register.password}
              onChange={(e) =>
                setRegister({
                  ...register,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-brown-dark text-xl text-white rounded hover:bg-white hover:text-brown-dark hover:border hover:border-brown-dark"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <h1 className="text-brown-dark">
            Sudah punya akun?{" "}
            <Link to={"/login"} className="font-bold underline">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
