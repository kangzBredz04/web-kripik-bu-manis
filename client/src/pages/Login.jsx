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

  const [login, setLogin] = useState({
    usernameoremail: "",
    password: "",
  });

  // Event saat mengetik pada textfield
  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    // e.preventDefault();
    // api.post("/auth/login", login).then((response) => {
    //   if (!response.token) {
    //     alert(response.msg);
    //   } else {
    //     alert(response.message);
    //     api.get("/auth/my-account").then((res) => {
    //       setUser(res.data);
    //       localStorage.setItem("role", res.data.role);
    //       localStorage.setItem("id", res.data.id);
    //       if (res.data.role === "admin") {
    //         console.log("Masuk sebagai admin");
    //         navigate("/admin");
    //         // window.location.reload();
    //       } else {
    //         console.log("Masuk sebagai user");
    //         navigate("/");
    //         // window.location.reload();
    //       }
    //     });
    //     localStorage.setItem("token", response.token);
    //   }
    // });
  }

  return (
    <div className="py-12 flex items-center justify-center bg-brown-light font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl mb-6 text-center text-brown-dark font-bold">
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
        <form>
          {isCustomerLogin ? (
            <>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Customer Code
                </label>
                <input type="text" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Password
                </label>
                <input
                  type="password"
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
                <input type="text" className="mt-1 p-2 w-full border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-brown-dark font-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-3 font-bold text-xl bg-brown-dark text-white rounded hover:bg-white hover:border-2 hover:border-brown-dark hover:text-brown-dark"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <h1 className="text-brown-dark">
            Don&apos;t have account?{" "}
            <Link className="font-bold underline">Register</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
