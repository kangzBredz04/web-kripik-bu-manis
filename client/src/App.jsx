import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { api } from "./utils.js";

export const AllContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/get-all").then((response) => setProducts(response));
  }, []);
  return (
    <AllContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      <Header />
      <Outlet context={[user, setUser]} />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
