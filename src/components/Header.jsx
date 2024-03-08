/* eslint-disable react/display-name */
// src/components/Header.js
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../userSlice/userSlice";

const Header = memo(({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem("userData");
    navigate("/home");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          WalMart
        </Link>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              {user.userName ? (
                <button onClick={handleSignOut} className="hover:text-gray-300">
                  Signout
                </button>
              ) : (
                <Link to="/sign-in" className="hover:text-gray-300">
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

// function arePropsEqual(oldProps, newProps) {
//   return false;
// }

Header.propTypes = {
  user: PropTypes.object,
};
export default Header;
