import PropTypes from 'prop-types';
import css from './searchContact.module.css';

const SearchContact = ({value, onSearch}) => (
<div className={css.searchContainer}>
    <label className={css.searchLabel} htmlFor="">Find contacts by name</label>
    <input 
    className={css.searchInput} 
    type="text" value={value}
    name="search"
    onChange={onSearch}/>
    
    
</div>
);


SearchContact.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  export default SearchContact;