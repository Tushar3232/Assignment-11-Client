
import React, { useContext, } from 'react';
import { useLoaderData, } from 'react-router';

import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateFood = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData()
  console.log(foodData)


  // handle update form submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedFood = Object.fromEntries(formData.entries());
    console.log(updatedFood)

    // update and send data in data base
    try {
      const res = await axios.put(
        `http://localhost:3000/updated-food/${foodData._id}`,
        updatedFood,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Food data updated successfully.", "success");
      } else {
        Swal.fire("No Changes", "Nothing was updated.", "info");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }

  };

  // loading UI


  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="w-full max-w-xl bg-base-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Food</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="label"><span className="label-text">Food Name</span></label>
            <input type="text" name="foodName" defaultValue={foodData?.foodName} className="input input-bordered w-full" required />
          </div>

          {/* Image URL */}
          <div>
            <label className="label"><span className="label-text">Image URL</span></label>
            <input type="url" name="image" defaultValue={foodData?.image} className="input input-bordered w-full" required />
          </div>

          {/* Quantity */}
          <div>
            <label className="label"><span className="label-text">Quantity</span></label>
            <input type="number" name="quantity" defaultValue={foodData?.quantity} className="input input-bordered w-full" required min="1" />
          </div>

          {/* Location */}
          <div>
            <label className="label"><span className="label-text">Location</span></label>
            <input type="text" name="location" defaultValue={foodData?.location} className="input input-bordered w-full" required />
          </div>

          {/* Expire Date */}
          <div>
            <label className="label"><span className="label-text">Expire Date</span></label>
            <input type="date" name="expireDate" defaultValue={foodData?.expireDate?.slice(0, 10)} className="input input-bordered w-full" required />
          </div>

          {/* Notes */}
          <div>
            <label className="label"><span className="label-text">Notes</span></label>
            <textarea name="notes" defaultValue={foodData?.notes} className="textarea textarea-bordered w-full" rows="3"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">Update Food</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
