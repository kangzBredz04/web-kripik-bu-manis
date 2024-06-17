/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { GoBookmark } from "react-icons/go";
import { MdOutlineLanguage } from "react-icons/md";
import { FiUser, FiMoon } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { useState } from "react";
// import { useContext } from "react";
// import { AllContext } from "../App";

export default function Header() {
  // const { wishlist, cart } = useContext(AllContext);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <header className="bg-brown-dark text-white border  sticky top-0 z-50 font-poppins">
      <div className="container mx-auto  py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold tracking-widest">
            KRIPIK BU MANIS
          </Link>
        </div>
        <nav className="grow flex justify-evenly ">
          <Link to="/" className="font-bold hover:text-gray-200 text-sm">
            BERANDA
          </Link>
          <Link to="/shop" className="font-bold hover:text-gray-200 text-sm">
            PRODUK
          </Link>
          <Link
            to="/about-us"
            className="font-bold hover:text-gray-200 text-sm"
          >
            TENTANG KAMI
          </Link>
        </nav>
        <div className="flex justify-evenly  w-1/6">
          <Link to="/cart" className="text-white hover:text-gray-200 relative">
            <div className="absolute -right-2 -top-2 text-brown-dark px-[5px] bg-white rounded-full text-xs font-semibold">
              1
            </div>
            <SlBag className="text-xl" />
          </Link>
          {localStorage.getItem("id") ? (
            <Link
              // to="/login"
              onClick={togglePopup}
              className="text-white hover:text-gray-200"
            >
              <FiUser className="text-xl" />
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="font-semibold tracking-wider cursor-pointer"
            >
              LOGIN
            </Link>
          )}
          {showPopup && (
            <div className="absolute right-1 mt-11 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
              <IoClose
                size={25}
                onClick={togglePopup}
                className="absolute text-brown-dark cursor-pointer right-1"
              />
              <div className="p-4 flex flex-col items-center">
                <FaUserCircle size={50} className="text-brown-dark mb-4" />
                <div className="text-center">
                  <p className="text-sm text-brown-dark font-semibold">
                    Customer Code: 12345
                  </p>
                  <p className="text-sm text-brown-dark font-semibold">
                    Name: John Doe
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
