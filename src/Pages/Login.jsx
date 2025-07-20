import React, { useContext, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { SigninUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SigninUser(email, password)
      .then((result) => {
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/'); 
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
        <div className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSignin} className="space-y-4">
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

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full"
                required
                name="password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className=' mt-5'>
            If you have not account click to <Link to={"/register"} className=' text-blue-600 hover:underline'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
