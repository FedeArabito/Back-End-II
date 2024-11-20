import React from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center bg-[#1c1c1c]">
      <div className="container flex flex-grow-1 justify-between items-center py-5 px-3">
        <div className="logo text-white">
          <Link>
          Spot ON
          </Link>
        </div>
        <div className="search-bar flex justify-center items-center gap-2">
          <SearchBar />
        </div>
        <div className="icons flex justify-center items-center gap-4 text-[#989898]">
          <div className="user-logo">
            <Link to={'/login'}>
              <FaRegUser className="w-5/5 h-6" />
            </Link>

          </div>
          <div className="cart-logo">
            <Link to={'/cart'}>
              <FaShoppingCart className="w-5/5 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default NavBar;
