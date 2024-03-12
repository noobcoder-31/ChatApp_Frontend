import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useAuthContext } from "./Context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const authUser = useAuthContext();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-xl font-semibold">Chat App</span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-gray-300"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
            <a
              href="https://www.linkedin.com/in/raj-karan-singh-tomar-a2a376236/"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              href="https://twitter.com/sabRaajiKhushi"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            {authUser.authUser ? (
              <Link to="/profile" className="text-white hover:text-gray-300">
                Profile
              </Link>
            ) : currentPath === "/login" ? (
              <Link to="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link>
            ) : (
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
