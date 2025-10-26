import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const GuestLinks = ({ handleScroll }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveClass = ({ isActive }) =>
    isActive ? "text-white font-bold underline" : "text-gray-900 hover:text-white";

  // ✅ Scroll handler with route check
  const scrollOrNavigate = (id) => {
    if (location.pathname !== "/") {
      // যদি home page এ না থাকি, আগে home এ পাঠাও
      navigate("/");
      // তারপর সামান্য delay দিয়ে scroll করো (page render হবার পর)
      setTimeout(() => handleScroll(id), 400);
    } else {
      // home page এ থাকলে সরাসরি scroll করো
      handleScroll(id);
    }
  };

  return (
    <>
      <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/availableFoods" className={getActiveClass}>
        Available Foods
      </NavLink>
      <NavLink to="/register" className={getActiveClass}>
        Register
      </NavLink>

      {/* ✅ Fixed scroll buttons */}
      <button
        onClick={() => scrollOrNavigate("about-section")}
        className={`hover:text-white ${
          location.hash === "#about-section" ? "text-white font-bold underline" : "text-gray-900"
        }`}
      >
        About Us
      </button>
      <button
        onClick={() => scrollOrNavigate("contact-section")}
        className={`hover:text-white ${
          location.hash === "#contact-section" ? "text-white font-bold underline" : "text-gray-900"
        }`}
      >
        Contact Us
      </button>

       <NavLink to="/bogs" className={getActiveClass}>
        Blogs
      </NavLink>
    </>
  );
};

export default GuestLinks;
