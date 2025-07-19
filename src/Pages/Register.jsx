import React, { use } from 'react';
import { AuthContext } from '../Constexts/AuthContext';

const Register = () => {

    const { CreateUser } = use(AuthContext);

    const handleFormData = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const password = form.password.value;

        console.log({ name, email, age, password });

        // Create user firebase 
        CreateUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({errorCode,errorMessage})
                // ..
            });


    }

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
                                name='name'
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
                                name='email'
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
                                name='age'
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
                                name='password'
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;