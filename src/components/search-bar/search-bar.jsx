import './search-bar.css';

const SearchBar = (props) => {
    const { onSearchQueryChange } = props;

    const onSearchBarChange = (e) => {
        onSearchQueryChange(e.target.value); 
    }

    return (
        <input onChange={onSearchBarChange} className="form-control search-input" type="text" placeholder="Find employee"/>
    );
}

export default SearchBar;