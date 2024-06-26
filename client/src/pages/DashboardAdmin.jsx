// import { useContext } from "react";
// import { AdminContext } from "./Admin";
import { FaUsers, FaFileInvoiceDollar, FaBoxes } from "react-icons/fa";
import { IoIosShirt } from "react-icons/io";
import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  return (
    <div className={`flex-1 `}>
      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Beranda</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Product Count */}
          <Link
            to="/admin/product"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer  border-black border-2"
          >
            <IoIosShirt className="text-7xl" />
            {/* <p className="text-4xl font-bold">{products?.length}</p> */}
            <h3 className="text-2xl font-bold">Produk</h3>
          </Link>
          {/* User Count */}
          <Link
            to="/admin/user"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaUsers className="text-7xl" />
            {/* <p className="text-4xl font-bold">{user?.length}</p> */}
            <h3 className="text-2xl font-bold">Pengguna</h3>
          </Link>
          {/* Order Count */}
          <Link
            to="/admin/order"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaFileInvoiceDollar className="text-7xl" />
            {/* <p className="text-4xl font-bold">{orders?.length}</p> */}
            <h3 className="text-2xl font-bold">Pesanan</h3>
          </Link>
          {/* Stock Count */}
          <Link
            to="/admin/stock"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaBoxes className="text-7xl" />
            {/* <p className="text-4xl font-bold">{totalStock}</p> */}
            <h3 className="text-2xl font-bold">Stok</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
