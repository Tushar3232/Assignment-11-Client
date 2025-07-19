import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Constexts/AuthContext';

const Register = () => {
  const { CreateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // state for error message
  const [error, setError] = useState('');

  const handleFormData = (e) => {
    e.preventDefault();
    setError('');  

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const password = form.password.value;

    const capitalLetter = /[A-Z]/;
    const smallLetter = /[a-z]/;

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (!capitalLetter.test(password)) {
      setError('Password must contain at least one capital letter');
      return;
    }
    if (!smallLetter.test(password)) {
      setError('Password must contain at least one small letter');
      return;
    }

    CreateUser(email, password)
      .then(() => {
        navigate('/'); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
        <div className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleFormData} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
                name="name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full"
                required
                name="email"
              />
            </div>

            {/* Age */}
            <div>
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="number"
                placeholder="Your Age"
                className="input input-bordered w-full"
                required
                min="0"
                name="age"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
                name="password"
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm mt-1">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

           <div>
           
           </div>
        </div>
       
      </div>
    </div>
  );
};

export default Register;

