import React, { useContext, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { SigninUser ,GoogleSignin} = useContext(AuthContext);
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

  // Google login 
   const handleGoogleSignin = () => {
    GoogleSignin()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Google Sign-In Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Sign-In Failed',
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
          <button onClick={handleGoogleSignin} className="btn w-full mt-5 bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

          <div className=' mt-5'>
            If you have not account click to <Link to={"/register"} className=' text-blue-600 hover:underline'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
