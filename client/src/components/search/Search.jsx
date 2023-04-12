import React, { useState } from "react";
import "./search.css";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search by Country"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Search by Job name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
