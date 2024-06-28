import { useContext, useEffect, useState } from "react";
import { AdminContext } from "./Admin";

export default function SalesReport() {
  const { salesReport } = useContext(AdminContext);
  // const [subTotal, setSubtotal] = useState(0);
  // const [dikson, setDiskon] = useState(0);
  // const [totalSale, setTotalSale] = useState(0);

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

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const calculateSubTotal = () =>
    salesReport.reduce((acc, curr) => acc + parseInt(curr.sub_total), 0);

  const calculateTotalSale = () =>
    salesReport.reduce((acc, curr) => acc + parseInt(curr.total_sale), 0);

  const calculateDiscount = () =>
    salesReport.reduce((acc, curr) => acc + parseInt(curr.discount), 0);

  return (
    <div className="py-5 px-5 bg-warm-gray text-teal">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold tracking-wider">Laporan Penjualan</p>
        <p className="text-2xl font-bold tracking-wider">Kripik Bu Manis</p>
        <p className="text-2xl font-bold tracking-wider">Per {currentDate}</p>
      </div>
      <div>
        {
          <table className="w-full border-collapse border border-gray-300 my-5">
            <thead>
              <tr className="bg-gray-300 font-bold tracking-wider">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Kode Konsumen
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tipe Pembayaran
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Sub Total
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Diskon
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Penjualan
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Data rows */}
              {salesReport?.map((s, index) => (
                <tr key={s.id}>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    {formatDate(s.sale_date)}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    {s.customer_code}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    {s.type_of_payment}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    Rp{parseInt(s.sub_total).toLocaleString("id-ID")}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    Rp{parseInt(s.discount).toLocaleString("id-ID")}
                  </td>
                  <td className="border-[1px] border-teal px-4 py-2 text-center">
                    Rp{parseInt(s.total_sale).toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-300 font-bold tracking-wider">
                <td
                  colSpan={4}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  TOTAL
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Rp{parseInt(calculateSubTotal()).toLocaleString("id-ID")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Rp{parseInt(calculateDiscount()).toLocaleString("id-ID")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  Rp{parseInt(calculateTotalSale()).toLocaleString("id-ID")}
                </td>
              </tr>
            </tfoot>
          </table>
        }
      </div>
    </div>
  );
}
