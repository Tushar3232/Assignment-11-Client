import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../Constexts/AuthContext';

const Navber = () => {
    const { user,SignOutUser } = use(AuthContext)
    console.log(user)
    // handle sign Out user 
    const handleSignOut= ()=>{
        SignOutUser()
        .then(()=>{
            alert("sign Out user")
        })
        .catch(error=>{
            alert(error)
        })
        
    }
    

    const getActiveClass = ({ isActive }) =>
  isActive ? "text-orange-500 font-bold underline" : "text-gray-600";


    const link = <>
    <NavLink to="/" className={getActiveClass} >Home</NavLink>
    <NavLink to="/addfood" className={getActiveClass}>Add Food</NavLink>
    <NavLink to="/availableFoods" className={getActiveClass}>Available Foods</NavLink>
    <NavLink to="/myfoods" className={getActiveClass}>My foods</NavLink>
    <NavLink to="/myfoddrequsted" className={getActiveClass}>My Requsted Foods</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Share Food Bite</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                       {
                        link
                       }
                       
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <button onClick={handleSignOut} className='btn'>signOut</button> :
                            <Link to="/login" className="btn">login</Link>
                    }
                    <div className="dropdown dropdown-end dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 w-16 h-16 rounded-full ">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover"
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box  w-52 p-4 shadow-sm gap-1">
                            <h1>My name: Tushar</h1>
                            <Link to="/register" className='btn' >SignUp</Link>
                            <Link to="/login" className='btn'>login</Link>
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;