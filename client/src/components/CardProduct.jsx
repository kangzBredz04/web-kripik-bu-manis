/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function CardProduct({
  id,
  name,
  image,
  description,
  price,
  stock,
}) {
  return (
    <div className="bg-white flex flex-col justify-between font-poppins rounded-md">
      <div className="rounded-md">
        <img src={image} alt="" className="rounded-md" />
        <div className="p-5 flex flex-col gap-3 ">
          <div className="flex flex-col gap-1">
            <p className="text-xl text-brown-dark font-bold">{name}</p>
            <p className="text-base font-bold">
              Rp{parseInt(price).toLocaleString("id-ID")}
            </p>
            <p className="text-xs font-medium">{description}</p>
          </div>
          <div>
            <button className="py-2 px-5 bg-brown-dark rounded-3xl text-white text-xs  font-bold">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
