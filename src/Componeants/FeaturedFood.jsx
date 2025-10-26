import React from 'react';
import { Link } from 'react-router';

const FeaturedFood = ({ featuredFood }) => {

  const {
    foodName,
    image,
    location,
    quantity,
    expireDate,
    
    _id,
    status,
  } = featuredFood;

  return (
    <div
      className="card bg-base-100 shadow-md hover:shadow-2xl transition duration-300 w-full max-w-3xl mx-auto 
                 hover:scale-[1.02] rounded-xl"

    >
      <div className="flex flex-col lg:flex-row">
        {/* ---------- Image Section ---------- */}
        <figure
          className="w-full lg:w-1/3 max-h-60 overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"

        >
          <img
            src={image}
            alt={foodName}
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: "240px" }}

          />
        </figure>

        {/* ---------- Info Section ---------- */}
        <div className="card-body w-full lg:w-2/3 p-5">
          <h2 className="card-title text-2xl font-bold  mb-2">{foodName}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <p><span className="font-semibold">📍 Location:</span> {location}</p>
            <p><span className="font-semibold">🗓️ Expire Date:</span> {expireDate}</p>
            <p><span className="font-semibold">📦 Quantity:</span> {quantity}</p>


          </div>

          {/* ---------- Status & Button ---------- */}
          <div className="card-actions justify-between items-center mt-4">
            <div
              className={`badge text-white px-4 py-1 text-sm rounded 
              ${status === "available" ? "bg-green-500" : "bg-red-500"}`}

            >
              {status}
            </div>

            <Link to={`/details/${_id}`} className='btn btn-soft btn-primary btn-xs'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;