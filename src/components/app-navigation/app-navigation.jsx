import './app-navigation.css';
import AppFilter from '../app-filter/app-filter';
import SearchBar from '../search-bar/search-bar';

const AppNavigation = () => {
    return (
        <div className="app-navigation">
            <SearchBar/>
            <AppFilter/>
        </div>
    );
}

export default AppNavigation;