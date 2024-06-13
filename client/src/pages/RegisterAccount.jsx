import { useEffect, useState } from "react";

export default function RegisterAccount() {
  const [custCode, setCustCode] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newCode = `CS${randomNum}`;
    setCustCode(newCode);
  }, []);
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="" className="flex gap-4">
        Customer Code
        <input
          type="text"
          value={custCode}
          disabled
          className="border-[1px] border-black"
        />
      </label>
      <label htmlFor="" className="flex gap-4">
        Username
        <input type="text" className="border-[1px] border-black" />
      </label>
      <label htmlFor="" className="flex gap-4">
        Password
        <input type="password" className="border-[1px] border-black" />
      </label>

      <button className="bg-blue-500 font-semibold w-1/4 rounded-lg py-1 px-2">
        Register
      </button>
    </form>
  );
}
