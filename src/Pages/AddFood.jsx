import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Constexts/AuthContext';


const AddFood = () => {

    const {user} = useContext(AuthContext)
   

    const [formData, setFormData] = useState({
        foodName: "",
        image: "",
        quantity: "",
        location: "",
        expireDate: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Data = {...formData, ownerEmail: user.email , status: "available"}

        try {
            const res = await axios.post("http://localhost:3000/add-food", Data);
            console.log("Successfully submitted:", res.data);
            // Optional: Reset form
            setFormData({
                foodName: "",
                image: "",
                quantity: "",
                location: "",
                expireDate: "",
                notes: "",
            });
            //   alert("Food added successfully!");
            Swal.fire({
                
                icon: "success",
                title: "Food added successfully!",
                showConfirmButton: false,
                timer: 1500
            });


        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
            <div className="w-full max-w-xl bg-base-100 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Food</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Food Name */}
                    <div>
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={formData.foodName}
                            onChange={handleChange}
                            placeholder="Enter food name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Enter quantity (e.g., 5 plates)"
                            className="input input-bordered w-full"
                            required
                            min="1"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Expire Date */}
                    <div>
                        <label className="label">
                            <span className="label-text">Expire Date</span>
                        </label>
                        <input
                            type="date"
                            name="expireDate"
                            value={formData.expireDate}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="label">
                            <span className="label-text">Notes</span>
                        </label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Additional information..."
                            className="textarea textarea-bordered w-full"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Submit Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;