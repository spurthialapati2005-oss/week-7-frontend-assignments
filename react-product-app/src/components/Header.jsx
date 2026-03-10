import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    navigate("/products");
    setMenuOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white px-6 py-4">

      <div className="flex items-center justify-between">

        <img
          className="w-32 sm:w-36 md:w-40 h-16 object-contain"
          src="https://cdn.dribbble.com/userupload/14653856/file/original-f7d73ab86bf30c427b1330b1d1f248a0.jpg?resize=400x0"
          alt="logo"
        />

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop View*/}
        <div className="hidden md:flex items-center gap-8">

          <form onSubmit={handleSearch} className="flex items-center gap-2">

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products..."
              className="
                bg-gray-700
                text-white
                placeholder-gray-300
                px-4 py-2
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Search
            </button>

          </form>

          <ul className="flex gap-8 text-lg">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="contactus">Contact</NavLink>
            </li>
          </ul>

        </div>
      </div>

      {/* Mobile View */}
      {menuOpen && (
        <div className="flex flex-col gap-6 mt-6 md:hidden">

          <form onSubmit={handleSearch} className="flex gap-2">

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products..."
              className="
                w-full
                bg-gray-700
                text-white
                placeholder-gray-300
                px-4 py-2
                rounded-lg
              "
            />

            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Search
            </button>

          </form>

          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <NavLink to="" onClick={()=>setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="products" onClick={()=>setMenuOpen(false)}>Products</NavLink>
            </li>
            <li>
              <NavLink to="contactus" onClick={()=>setMenuOpen(false)}>Contact</NavLink>
            </li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default Header;