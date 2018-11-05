import  React from 'react';
import PropTypes from 'prop-types';

const Search = ({
    searchQuery,
    onSearchSubmit,
    onSearchChange})=>(
  <form action="/" className="Search" onSubmit={onSearchSubmit}>
    <input type="search" className="Search-input" onChange={onSearchChange} value={searchQuery}/>
    <button type="submit" className="Search-submit">Search</button>
  </form>
);

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
export default Search;