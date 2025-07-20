import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';


const Navber = () => {
    const { user, SignOutUser } = useContext(AuthContext);
    const [profil, setProfil] = useState(null);
    console.log(profil)

    useEffect(() => {
        const fetchProfile = async () => {
            // Check if user exists and has accessToken
            if (user?.accessToken) {
                try {
                    const res = await axios.get(`https://assignment-11-server-bay-psi.vercel.app/my-profile`, {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`
                        }
                    });
                    setProfil(res.data);
                } catch (err) {
                    console.error("❌ Error fetching profile:", err);
                }
            }
        };

        fetchProfile();
    }, [user]); // Depend on accessToken specifically

    const handleSignOut = () => {
        SignOutUser()
            .then(() => alert("Sign out successful"))
            .catch((error) => alert(error.message));
    };

    const getActiveClass = ({ isActive }) =>
        isActive ? "text-orange-500 font-bold underline" : "text-gray-600";

    const navLinks = (
        <>
            <NavLink to="/" className={getActiveClass}>Home</NavLink>
            <NavLink to="/addfood" className={getActiveClass}>Add Food</NavLink>
            <NavLink to="/availableFoods" className={getActiveClass}>Available Foods</NavLink>
            <NavLink to="/myfoods" className={getActiveClass}>My Foods</NavLink>
            <NavLink to="/myfoddrequsted" className={getActiveClass}>My Requested Foods</NavLink>
        </>
    );

    return (
        <div className="navbar bg-slate-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className=" font-bold text-2xl ml-1.5">Share Food Bite</a>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-1.5">

                {user ?
                    <button onClick={handleSignOut} className='btn btn-primary btn-xs'>Sign Out</button>

                    :
                    <Link to="/login" className="btn btn-primary btn-xs">Login</Link>
                }

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-hover dropdown-end mr-2 ">
                    <div className="w-16 h-16 rounded-full border overflow-hidden">
                        {
                            user && profil?.photoURL ? (
                                <img
                                    src={profil.photoURL}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Default"
                                    className="w-full h-full object-cover"
                                />
                            )
                        }
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 gap-3 p-2 shadow">
                        <div className=' border-b border-dashed'>
                            <h3 className=' text-center text-2xl font-medium'>Name: {profil?.name} </h3>
                            <h4>{profil?.email}</h4>
                        </div>

                        <li>  {user ?
                            <button onClick={handleSignOut} className='btn btn-xs text-white bg-blue-600'>Sign Out</button>

                            :
                            <Link to="/login" className="btn btn-xs text-white bg-blue-600">Login</Link>
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;
