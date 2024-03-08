/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchProducts } from "../productSlice/productSlice";

const Filter = ({ ...otherProps }) => {
  const { sort, sortingChange, filter, categories, categoryChange } =
    otherProps;

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(search));
    console.log(search);
    navigate("/products");
    setSearch("");
  };
  return (
    <div className="w-full mb-8 bg-gray-100 py-5 px-5 flex flex-col sm:flex-row sm:gap-10 items-center justify-between rounded-[0px_0px_10px_10px] shadow-md">
      {/* Sorting */}
      <div className="flex items-center">
        <label className="mr-4">Sort:</label>

        <select
          className="h-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
          value={sort}
          onChange={sortingChange}
        >
          <option value="">Not Selected</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Low-High">Low-High</option>
          <option value="High-Low">High-Low</option>
        </select>
      </div>

      {/* Search */}
      <Search
        handleSubmit={handleSearch}
        searchedValue={search}
        changeSearch={setSearch}
      />

      {/* filter */}
      <div className="flex items-center">
        <label className="mr-4">Category:</label>
        <select
          className="h-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
          value={filter}
          onChange={categoryChange}
        >
          <option value="">Not Selected</option>
          {categories?.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
