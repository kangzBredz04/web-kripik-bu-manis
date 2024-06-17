import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils.js";

export default function Register() {
  const [customerCode, setCustomerCode] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerCode || !password || !name) {
      setError("Harus diisi semua");
      return;
    }
    setError("");
    api.post("/auth/register", register).then((res) => {
      alert(res.msg);
    });
  };
  return (
    <div className="py-8 flex items-center justify-center bg-brown-light font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brown-dark">
          Register Account
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Code</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={customerCode}
              onChange={(e) => setCustomerCode(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
