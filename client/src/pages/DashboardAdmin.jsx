import { useContext } from "react";
import { AdminContext } from "./Admin";
import { FaFileInvoiceDollar, FaBoxes } from "react-icons/fa";
import { FaUsersGear, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  const { products, user, customer, salesReport, bestProducts } =
    useContext(AdminContext);
  return (
    <div className="flex-1 bg-[#EAEAEA]">
      <div className="py-6 px-5">
        <div className="grid grid-cols-4 gap-4">
          <Link
            to="/admin/customer-user"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaUsersGear className="text-7xl" />
            <p className="text-4xl font-bold">{user?.length}</p>
            <h3 className="text-2xl font-bold">Admin</h3>
          </Link>
          <Link
            to="/admin/product"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer  border-black border-2"
          >
            <FaBoxes className="text-7xl" />
            <p className="text-4xl font-bold">{products?.length}</p>
            <h3 className="text-2xl font-bold">Produk</h3>
          </Link>
          <Link
            to="/admin/customer-user"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaUsers className="text-7xl" />
            <p className="text-4xl font-bold">{customer?.length}</p>
            <h3 className="text-2xl font-bold">Konsumen</h3>
          </Link>
          <Link
            to="/admin/sales-report"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaFileInvoiceDollar className="text-7xl" />
            <p className="text-4xl font-bold">{salesReport?.length}</p>
            <h3 className="text-2xl font-bold">Penjualan</h3>
          </Link>
        </div>
        <div>
          <p>Top Sales</p>
          {bestProducts?.map((b) => (
            <div key={b.id} className="flex">
              <img src={b.image} alt="" />
              <div className="flex flex-col">
                <p>{b.name}</p>
                <p>{b.price}</p>
              </div>
              <div className="flex flex-col">
                <p>{b.total_sales}</p>
                <p>{b.total_sales}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
