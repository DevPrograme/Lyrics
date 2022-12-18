import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { FiSearch } from 'react-icons/fi'

function Searchbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="seach-field" className="sr-only">
        Search all Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="h-5 w-5 ml-4"/>
        <input 
        name="search-flied"
        autoComplete="off"
        id="search-feild"
        placeholder="Search"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
}

export default Searchbar