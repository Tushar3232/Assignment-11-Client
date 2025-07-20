import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Constexts/AuthContext';

const Register = () => {
  const { CreateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleFormData = (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
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

    // 1️⃣ Create Firebase User
    CreateUser(email, password)
      .then((userCredential) => {
        const createdEmail = userCredential.user.email;

        // 2️⃣ Save Data to MongoDB
        const userData = {
          name,
          email: createdEmail,
          photoURL,
          age,
          role: 'user'
        };

        axios.post('https://assignment-11-server-bay-psi.vercel.app/signUp-user', userData)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          })
          .catch(() => {
            setError('Failed to save user info to database');
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleFormData} className="space-y-4">

          {/* Name */}
          <div>
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" name="name" required placeholder="Your Name" className="input input-bordered w-full" />
          </div>

          {/* Email */}
          <div>
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" name="email" required placeholder="example@mail.com" className="input input-bordered w-full" />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label"><span className="label-text">Photo URL</span></label>
            <input type="text" name="photoURL" required placeholder="https://..." className="input input-bordered w-full" />
          </div>

          {/* Age */}
          <div>
            <label className="label"><span className="label-text">Age</span></label>
            <input type="number" name="age" required placeholder="Your Age" min="0" className="input input-bordered w-full" />
          </div>

          {/* Password */}
          <div>
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" name="password" required placeholder="Password" className="input input-bordered w-full" />
          </div>

          {/* Error */}
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
        <div className=' mt-5'>
            If you have account click to <Link to={"/login"} className=' text-blue-600 hover:underline'>Register</Link>
          </div>
      </div>
    </div>
  );
};

export default Register;


