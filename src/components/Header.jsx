import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
      .then(() => {
      
       
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div>
      <nav className="flex justify-around items-center bg-cyan-300 p-4  text-xl">
        <NavLink to="/">
          <h1 className="text-2xl font-bold cursor-pointer ">
             CHEF RECIPE 
          </h1>
        </NavLink>
        <div className="flex font-bold text-xl gap-8">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        {user ? (
          <div className="flex gap-2 items-center" >
            <label data-tip={user?.displayName} tabIndex={0} className="btn tooltip-bottom  tooltip btn-ghost btn-circle avatar">
              <div className=" rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <NavLink className='btn' onClick={handleLogout}>Logout</NavLink>
          </div>
        ) : (
          <div>
            <NavLink className='btn' to="/login">Login</NavLink>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Header
