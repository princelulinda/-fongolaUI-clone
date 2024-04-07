import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-row w-full h-10 rounded-lg shadow-sm border justify-center items-center p-4 border-gray-300">
      <input
        type="text"
        placeholder="Rechercher..."
        className="w-full h-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
        value={searchQuery}
        onChange={handleSearch}
      />
      <i class="bi bi-search"></i>
      
    </div>
  );
};

export default SearchBar;
