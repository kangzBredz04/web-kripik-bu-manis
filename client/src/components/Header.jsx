/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { GoBookmark } from "react-icons/go";
import { MdOutlineLanguage } from "react-icons/md";
import { FiUser, FiMoon } from "react-icons/fi";
import { SlBag } from "react-icons/sl";
// import { useContext } from "react";
// import { AllContext } from "../App";

export default function Header() {
  // const { wishlist, cart } = useContext(AllContext);
  return (
    <header className="bg-brown-dark text-white border  sticky top-0 z-50 font-poppins">
      <div className="container mx-auto  py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold tracking-widest">
            KERIPIK BU MANIS
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
            {/* {cart.length < 1 ? (
              ""
            ) : (
              <div className="absolute -right-2 -top-2 text-white px-1 bg-red-600 rounded-full text-xs">
                {cart?.length}
              </div>
            )} */}

            <div className="absolute -right-2 -top-2 text-brown-dark px-[5px] bg-white rounded-full text-xs font-semibold">
              1
            </div>
            <SlBag className="text-xl" />
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-200 ">
            <FiUser className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}
