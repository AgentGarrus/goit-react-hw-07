import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';
import './SearchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleSearchChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="search-box">
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder=""
      />
    </div>
  );
};

export default SearchBox;