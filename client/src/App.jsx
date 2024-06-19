import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { api } from "./utils.js";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [register, setRegister] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
    api
      .get(`/cart/get/${localStorage.getItem("id")}`)
      .then((response) => setCart(response));
  }, [user?.id]);
  return (
    <AllContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        register,
        setRegister,
      }}
    >
      <Header />
      <Outlet context={[user, setUser]} />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
