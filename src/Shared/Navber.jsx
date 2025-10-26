import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Constexts/AuthContext";
import axios from "axios";
import GuestLinks from "./NavComponent/GuestLinks";
import UserLinks from "./NavComponent/UserLinks";
import ProfileDropdown from "../Componeants/ProfileDropdown"; // ✅ নতুন component import

const Navber = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  const [profil, setProfil] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.accessToken) {
        try {
          const res = await axios.get(
            `https://assignment-11-server-bay-psi.vercel.app/my-profile`,
            { headers: { Authorization: `Bearer ${user.accessToken}` } }
          );
          setProfil(res.data);
        } catch (err) {
          console.error("❌ Error fetching profile:", err);
        }
      }
    };
    fetchProfile();
  }, [user]);

  // ✅ user login করলে dashboard এ পাঠাও
  useEffect(() => {
    if (user) {
      navigate("/user-dashboard");
    }
  }, [user, navigate]);

  // ✅ Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ SignOut function
  const handleSignOut = () => {
    SignOutUser()
      .then(() => alert("Sign out successful"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-green-600 shadow-md">
      <div className="navbar max-w-9/12 mx-auto text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {user ? (
                <UserLinks />
              ) : (
                <GuestLinks handleScroll={handleScroll} />
              )}
            </ul>
          </div>
          <a className="font-bold text-gray-950 text-3xl ml-1.5"> Share Food Bite</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {user ? (
              <UserLinks />
            ) : (
              <GuestLinks handleScroll={handleScroll} />
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {/* ✅ Profile Dropdown Component */}
          <ProfileDropdown
            user={user}
            profil={profil}
            handleSignOut={handleSignOut}
          />
        </div>
      </div>
    </div>
  );
};

export default Navber;
