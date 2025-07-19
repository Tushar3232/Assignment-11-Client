import React, { use } from 'react';
import { AuthContext } from '../Constexts/AuthContext';

const Login = () => {

    const { SigninUser } = use(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;

        console.log({  email, password });

        // Create user firebase 
        SigninUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage })
                // ..
            });


    }

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
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;