import React from "react";
import { NavLink } from "react-router-dom";

const UserLinks = () => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "text-white font-bold underline" : "text-gray-900 hover:text-white";

  return (
    <>
     <NavLink to="/" className={getActiveClass}>
        Home
      </NavLink>
      <NavLink to="/user-dashboard" className={getActiveClass}>
        Dashboard
      </NavLink>
      <NavLink to="/availableFoods" className={getActiveClass}>
        Available Foods
      </NavLink>
      <NavLink to="/addfood" className={getActiveClass}>
        Add Food
      </NavLink>
      <NavLink to="/myfoods" className={getActiveClass}>
        My Foods
      </NavLink>
      <NavLink to="/myfoddrequsted" className={getActiveClass}>
        My Requested Foods
      </NavLink>
    </>
  );
};

export default UserLinks;
