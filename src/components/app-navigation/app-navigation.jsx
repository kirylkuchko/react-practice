import './app-navigation.css';
import AppFilter from '../app-filter/app-filter';
import SearchBar from '../search-bar/search-bar';

const AppNavigation = (props) => {
    const { onSearchQueryChange, onFilterChange, filterState } = props;

    return (
        <div className="app-navigation">
            <SearchBar onSearchQueryChange={onSearchQueryChange}/>
            <AppFilter onFilterChange={onFilterChange} filterState={filterState}/>
        </div>
    );
}

export default AppNavigation;