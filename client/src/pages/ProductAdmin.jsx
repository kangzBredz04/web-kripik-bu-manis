import { useContext, useEffect } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../utils";

export default function ProductAdmin() {
  const { products } = useContext(AdminContext);
  return (
    <div className="p-5 min-h-64">
      {/* ADMIN DAN SUPER ADMIN */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Daftar Produk</h2>
        <div>
          <button
            onClick={() => {
              // setEditedUser({});
              // setPopUp(!popUp);
            }}
            className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            <MdOutlineAddBox /> Tambah Produk
          </button>
        </div>
      </div>
      {/* Table for CRUD Data */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">No</th>
            <th className="border border-gray-300 ">Nama</th>
            <th className="border border-gray-300 ">Deskripsi</th>
            <th className="border border-gray-300 ">Harga</th>
            <th className="border border-gray-300 ">Stok</th>
            <th className="border border-gray-300 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows */}
          {products?.map((p, index) => (
            <tr key={p.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {p.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {p.description.slice(0, 25)}
                {p.description.length > 25 && "..."}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Rp{parseInt(p.price).toLocaleString("id-ID")}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {p.stock}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                <button
                  onClick={() => {
                    // setEditedUser(u);
                    // setPopUp(!popUp);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  <HiOutlinePencilAlt />
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
