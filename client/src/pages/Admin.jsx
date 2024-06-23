import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useEffect, useState } from "react";
import { api } from "../utils";
// import UnauthorizedPage from "./UnauthorizedPage";

export const AdminContext = createContext();

export default function Admin() {
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [editedProduct, setEditedProduct] = useState();
  const [editedUser, setEditedUser] = useState();
  const [editedStock, setEditedStock] = useState();
  const [editedStatus, setEditedStatus] = useState();
  const [editedSize, setEditedSize] = useState();
  const [admin, setAdmin] = useState({});
  const [idAdmin, setIdAdmin] = useState(0);
  const [stocks, setStocks] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data produk
    setTimeout(() => {
      api.get("/product/get-all").then((res) => setProducts(res));
      api.get("/auth/get-all").then((res) => setUser(res));
      api.get("/auth/my-account").then((res) => {
        setAdmin(res.data);
        setIdAdmin(res.data.id);
      });
      // api.get("/stock/get-all").then((res) => setStocks(res));
      // api.get("/size/get-all").then((res) => setSizes(res));
      // api.get("/order/get-all").then((res) => setOrders(res));
      setLoading(false);
    }, 500);
  }, [products?.id]);

  // useEffect(() => {
  //   console.log(
  //     `${
  //       theme === "light"
  //         ? "Berhasil mengubah tema menjadi terang"
  //         : "Berhasil mengubah tema menjadi gelap"
  //     }`
  //   );
  // }, [theme]);

  if (localStorage.getItem("role") == "admin") {
    return (
      <AdminContext.Provider
        value={{
          products,
          setProducts,
          popUp,
          setPopUp,
          popUp2,
          setPopUp2,
          editedProduct,
          setEditedProduct,
          loading,
          setLoading,
          user,
          setUser,
          editedUser,
          setEditedUser,
          stocks,
          setStocks,
          editedStock,
          setEditedStock,
          sizes,
          setSizes,
          editedSize,
          setEditedSize,
          orders,
          setOrders,
          editedStatus,
          setEditedStatus,
        }}
      >
        <div className="flex h-screen overflow-hidden font-KumbhSans  bg-white text-black">
          {/* Sidebar */}
          <SideBar />
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <Outlet context={[admin, setAdmin, idAdmin]} />
            <Footer />
          </div>
        </div>
      </AdminContext.Provider>
    );
  } else {
    // return <UnauthorizedPage />;
  }
}
