import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);

  useEffect(() => {
    const fetchRequestedFoods = async () => {
      const token = localStorage.getItem("access-token");
      console.log(token)
      try {
        const res = await axios.get("http://localhost:3000/my-requests", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRequestedFoods(res.data);
      } catch (error) {
        console.error("Error fetching requested foods:", error);
      }
    };

    if (user?.email) {
      fetchRequestedFoods();
    }
  }, [user]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Requested Foods</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {requestedFoods.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>{food.donorName || "N/A"}</td>
                <td>{food.location}</td>
                <td>{new Date(food.expireDate).toLocaleDateString()}</td>
                <td>{new Date(food.requestedAt || food.updatedAt || food._id.getTimestamp()).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {requestedFoods.length === 0 && <p className="text-center mt-4">No food requests found.</p>}
      </div>
    </div>
  );
};

export default MyFoodRequest;
