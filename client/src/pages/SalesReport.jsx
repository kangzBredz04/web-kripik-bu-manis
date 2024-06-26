import { useContext, useEffect, useState } from "react";
import { AdminContext } from "./Admin";

export default function SalesReport() {
  const { salesReport } = useContext(AdminContext);

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  // Fungsi untuk memformat tanggal
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options); // 'id-ID' untuk format tanggal Indonesia
  };

  return (
    <div className="py-5 px-5">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold tracking-wider">Laporan Penjualan</p>
        <p className="text-2xl font-bold tracking-wider">Kripik Bu Manis</p>
        <p className="text-2xl font-bold tracking-wider">Per {currentDate}</p>
      </div>
      <div>
        {
          <table className="w-full border-collapse border border-gray-300 my-5">
            <thead>
              <tr>
                <th className="border border-gray-300">No</th>
                <th className="border border-gray-300 ">Tanggal</th>
                <th className="border border-gray-300 ">Kode Konsumen</th>
                <th className="border border-gray-300 ">Sub Total</th>
                <th className="border border-gray-300 ">Diskon</th>
                <th className="border border-gray-300 ">Total Penjualan</th>
                <th className="border border-gray-300 ">Tipe Pembayaran</th>
              </tr>
            </thead>
            <tbody>
              {/* Data rows */}
              {salesReport?.map((s, index) => (
                <tr key={s.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {formatDate(s.sale_date)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {s.customer_code}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Rp{parseInt(s.sub_total).toLocaleString("id-ID")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Rp{parseInt(s.discount).toLocaleString("id-ID")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Rp{parseInt(s.total_sale).toLocaleString("id-ID")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {s.type_of_payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}
