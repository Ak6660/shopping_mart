/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Search = ({
  handleSubmit,
  searchedValue: search,
  changeSearch: setSearch,
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" hidden sm:flex items-center justify-center bg-gray-100 p-2 rounded-full"
      >
        <input
          className="rounded-full py-2 px-4 text-gray-800 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button className="ml-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full">
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;

Search.proptypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchedValue: PropTypes.string,
  changeSearch: PropTypes.func,
};
