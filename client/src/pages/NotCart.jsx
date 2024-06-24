import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function NotCart() {
  return (
    <div className="flex flex-col items-center py-4 gap-5">
      <div className="relative">
        <div className="absolute -right-4 -top-2 text-white px-3 py-1 bg-brown-dark rounded-full text-5xl">
          0
        </div>
        <SlBag className="text-9xl text-brown-dark" />
      </div>
      <h1 className="text-2xl font-semibold text-brown-dark">
        Your Cart Is Currently Empty
      </h1>
      <Link
        to="/shop"
        className="bg-brown-dark text-white hover:bg-transparent hover:text-brown-dark py-3 px-7 outline"
      >
        RETURN TO SHOP
      </Link>
    </div>
  );
}
