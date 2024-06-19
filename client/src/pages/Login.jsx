/* eslint-disable no-unused-vars */
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { api } from "../utils.js";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useOutletContext();

  const [isCustomerLogin, setIsCustomerLogin] = useState(true);
  const toggleLoginType = () => {
    setIsCustomerLogin(!isCustomerLogin);
  };

  const [loginCustomer, setLoginCustomer] = useState({
    customer_code: "",
    password: "",
  });

  const [loginAdmin, setLoginAdmin] = useState({
    username: "",
    password: "",
  });

  function handleChangeCustomer(e) {
    setLoginCustomer({
      ...loginCustomer,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeAdmin(e) {
    setLoginAdmin({
      ...loginAdmin,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (isCustomerLogin) {
      api.post("/auth/login-customer", loginCustomer).then((res) => {
        console.log(res.token);
        if (!res.token) {
          alert(res.msg);
        } else {
          alert(res.msg);
          console.log(res);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("customer_code", res.data.customer_code);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("token", res.token);
          window.location.href = "/";
        }
      });
    }
  }

  return (
    <div className="py-12 flex items-center justify-center bg-brown-light font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl mb-6 text-brown-dark font-bold">
          {isCustomerLogin ? "Customer Login" : "Admin Login"}
        </h2>
        <div className="my-4 text-center grid grid-cols-2">
          <span
            className={`py-2 cursor-pointer ${
              isCustomerLogin
                ? "bg-brown-dark font-semibold text-white"
                : "text-brown-dark font-bold"
            }`}
            onClick={() => setIsCustomerLogin(true)}
          >
            Customer
          </span>
          <span
            className={` py-2 cursor-pointer ${
              !isCustomerLogin
                ? "bg-brown-dark font-semibold text-white"
                : "text-brown-dark font-bold"
            }`}
            onClick={() => setIsCustomerLogin(false)}
          >
            Admin
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          {isCustomerLogin ? (
            <>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Customer Code
                </label>
                <input
                  type="text"
                  id="customer_code"
                  name="customer_code"
                  value={loginCustomer.customer_code}
                  onChange={handleChangeCustomer}
                  required
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginCustomer.password}
                  onChange={handleChangeCustomer}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginAdmin.username}
                  onChange={handleChangeAdmin}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginAdmin.password}
                  onChange={handleChangeAdmin}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="w-full py-3 font-bold text-xl bg-brown-dark text-white rounded hover:bg-white hover:border hover:border-brown-dark hover:text-brown-dark"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <h1 className="text-brown-dark">
            Belum punya akun?{" "}
            <Link to={"/register"} className="font-bold underline">
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
