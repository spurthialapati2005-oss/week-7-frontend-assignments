import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const timerRef = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  }

  return (
    <div className="relative w-full md:w-72">
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}

export default SearchBar;