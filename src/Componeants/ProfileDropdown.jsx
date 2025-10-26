import { User } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ user, profil, handleSignOut }) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end mr-2">
      {/* 🔹 Navbar এ Profile Icon/Image */}
      <div
        tabIndex={0}
        role="button"
        className="w-12 h-12 rounded-full border-2 border-green-400 overflow-hidden cursor-pointer flex items-center justify-center bg-gray-800"
      >
        {user && profil?.photoURL ? (
          <img
            src={profil.photoURL}
            alt="User"
            className="w-full h-full object-cover"
          />
        ) : (
          <User size={26} className="text-green-400" />
        )}
      </div>

      {/* 🔹 Dropdown Menu */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-[1] mt-3 gap-3 p-3 shadow-lg w-64 border border-green-500/30"
      >
        {/* 🔸 User Info Section */}
        <div className="flex flex-col items-center border-b border-green-500/40 pb-3">
          <div className="w-16 h-16 rounded-full border border-green-500 mb-2 flex items-center justify-center overflow-hidden bg-gray-800">
            {user && profil?.photoURL ? (
              <img
                src={profil.photoURL}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={35} className="text-green-400" />
            )}
          </div>

          <h3 className="text-lg font-semibold text-center text-green-300">
            {profil?.name || "Guest User"}
          </h3>
          <p className="text-sm text-gray-400 text-center">
            {profil?.email || "No email available"}
          </p>
        </div>

        {/* 🔸 Action Button */}
        <li className="mt-2 text-center">
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-700 border-none"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-700 border-none"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
