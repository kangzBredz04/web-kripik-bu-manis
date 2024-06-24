import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { createContext } from "react";
import UnauthorizedPage from "./UnauthorizedPage.jsx";
// import UnauthorizedPage from "./UnauthorizedPage";

export const AdminContext = createContext();

export default function Admin() {
  if (
    localStorage.getItem("role") == "Super Admin" ||
    localStorage.getItem("role") == "Admin"
  ) {
    return (
      <AdminContext.Provider value={{}}>
        <div className="flex h-screen overflow-hidden font-KumbhSans  bg-white text-black">
          {/* Sidebar */}
          <SideBar />
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </AdminContext.Provider>
    );
  } else {
    return <UnauthorizedPage />;
  }
}
