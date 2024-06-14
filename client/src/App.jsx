import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AllContext = createContext();

function App() {
  return (
    <AllContext.Provider value={{}}>
      <Header />
      <Outlet />
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
