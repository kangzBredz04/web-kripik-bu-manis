/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function CashierCardProduct({
  id,
  name,
  image,
  description,
  price,
  stock,
}) {
  return (
    <div className="bg-white cursor-pointer flex flex-col justify-between font-poppins rounded-md">
      <div className="rounded-md">
        <img src={image} alt="" className="rounded-md" />
        <div className="p-1 items-center flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-md text-center text-brown-dark font-bold">
              {name}
            </p>
            <p className="text-base font-bold text-center">
              Rp{parseInt(price).toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
