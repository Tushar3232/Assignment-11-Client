import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Constexts/AuthContext';
import Swal from 'sweetalert2';

const FoodDetails = () => {
  const { user } = useContext(AuthContext)
  const data = useLoaderData();
  const {
    foodName,
    image,
    quantity,
    expireDate,
    location,
    notes,
    ownerEmail,
    status,
    _id
  } = data;

  // handle food requst 
  const handleRequest = () => {
    axios.patch(`https://assignment-11-server-bay-psi.vercel.app/requsted/${_id}`, {}, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", "Food requested successfully!", "success");
        } else {
          Swal.fire("Failed", "Could not update status", "error");
        }

      })


  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 px-4 py-10">
      <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden w-full max-w-5xl">

        {/* Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={image}
            alt={foodName}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-primary">{foodName}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
            <p><span className="font-semibold">Quantity:</span> {quantity}</p>
            <p><span className="font-semibold">Expire Date:</span> {expireDate}</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Status:</span>
              <span className={`ml-1 font-bold ${status === 'available' ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </span>
            </p>
            <p className="md:col-span-2"><span className="font-semibold">Notes:</span> {notes}</p>
            <p className="md:col-span-2"><span className="font-semibold">Owner Email:</span> {ownerEmail}</p>
          </div>

          <div className="flex justify-end pt-4">
            <button onClick={handleRequest} className="btn btn-primary btn-sm rounded-full">Request Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;