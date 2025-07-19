import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyfoodCard = ({food,setFoods}) => {
    
       const {
    foodName,
    image,
    location,
    quantity,
    expireDate,
    notes,
    _id,
    status,
  } = food;

  // Delet my food
 const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this food?");
  if (!confirm) return;

  try {
    const response = await axios.delete(`http://localhost:3000/my-foodsdata/${_id}`);
    
    if (response.data.deletedCount > 0) {
      Swal.fire("Deleted!", "Your food has been deleted.", "success");

      // Update UI (assuming setMyFoods is your state updater)
      setFoods((prevFoods) => prevFoods.filter(food => food._id !== id));
    }
  } catch (error) {
    console.error("Delete failed:", error);
    Swal.fire("Error", "Failed to delete the food item", "error");
  }
};

  return (
     <div
      className="card bg-base-100 shadow-md hover:shadow-2xl transition duration-300 w-full max-w-3xl mx-auto 
                 hover:scale-[1.02] border border-transparent hover:border-primary rounded-xl"
    
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
          <h2 className="card-title text-2xl font-bold text-primary mb-2">{foodName}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <p><span className="font-semibold">📍 Location:</span> {location}</p>
            <p><span className="font-semibold">🗓️ Expire Date:</span> {expireDate}</p>
            <p><span className="font-semibold">📦 Quantity:</span> {quantity}</p>
            
           
          </div>

          {/* ---------- Notes Section ---------- */}
          {notes && (
            <p className="mt-2 text-sm"><span className="font-semibold">📝 Notes:</span> {notes}</p>
          )}

          {/* ---------- Status & Button ---------- */}
          <div className="card-actions justify-between items-center mt-4">
            <div
              className={`badge text-white px-4 py-1 text-sm rounded 
              ${status === "available" ? "bg-green-500" : "bg-red-500"}`}
              
            >
              {status}
            </div>

            {/* handle delet food */}

            <button onClick={()=>handleDelete(_id)} className='btn btn-xs'>Delet</button>

            <Link to={`/updateFood/${_id}`} className='btn btn-soft btn-primary btn-xs'>update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyfoodCard;