import React from 'react';

const RequestedFoodCard = ({ food }) => {
  const {
    ownerEmail,
    location,
    expireDate,
    requestDate,
    foodName,
    image
  } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md  hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">

      {/* Food Image */}
      <div className="h-52 w-full">
        <img
          src={image}
          alt={foodName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">

        {/* Title & Food Info Badge */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-green-700">{foodName}</h3>
          <span className="text-xs bg-green-100 text-green-600 font-medium px-2 py-1 rounded-lg">🥗 Food Item</span>
        </div>

        {/* Donor Info Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">👤 Donor:</span> {ownerEmail}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">📍 Location:</span> {location}
          </p>
        </div>

        {/* Dates Section */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><span className="font-semibold">⏰ Expire Date:</span> <span className="text-red-500">{expireDate}</span></p>
          <p><span className="font-semibold">📅 Request Date:</span> {new Date(requestDate).toLocaleString()}</p>
        </div>

        {/* Status Badge */}
        <div className="mt-4">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
            ✅ Requested Successfully
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequestedFoodCard;


