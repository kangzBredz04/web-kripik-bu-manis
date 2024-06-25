import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav
      className={`sticky top-0 py-6 px-5 font-poppins flex justify-between items-center bg-brown-dark text-white`}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-bold tracking-widest">{`HALO SELAMAT DATANG ${localStorage
          .getItem("name")
          .toLocaleUpperCase()}`}</h1>
      </div>
      <div className="flex justify-evenly space-x-4 w-1/5">
        <Link to="/admin/profile">
          <FiUser className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
}
