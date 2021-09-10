import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function SearchForm({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === "") {
      toast.info("Please, enter query!");
      return;
    }
    onSearch(e.target.elements.searchQuery.value.toLowerCase().trim());
    e.target.elements.searchQuery.value = "";
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <button type="submit">
          <span>Search</span>
          <input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          ></input>
        </button>
      </form>
    </>
  );
}
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
