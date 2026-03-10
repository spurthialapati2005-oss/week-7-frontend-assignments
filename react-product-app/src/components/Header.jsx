import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

function Header({ setSearchTerm }) {

  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchTerm(inputValue)
    navigate('/products')
  }

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-800">
      <div>
        <img
  className="w-40 h-20 object-contain"
  src="https://cdn.dribbble.com/userupload/14653856/file/original-f7d73ab86bf30c427b1330b1d1f248a0.jpg?resize=400x0"
  alt="logo"
/>
      </div>
      <div className="flex items-center gap-8">
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
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>

        </form>

        <ul className="flex gap-8 text-lg text-white">
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
  )
}

export default Header