import App from '../app/app';
import './app-filter.css';

const AppFilter = (props) => {
    const { onFilterChange, filterState } = props;

    const buttonsProperties = [
        { name: App.FILTER_ALL, text: 'All employees'},
        { name: App.FILTER_PROMOTION, text: 'On promotion'},
        { name: App.FILTER_SALARY, text: 'Salary more than 1000$'}
    ];

    const getButtonsElements = () => {
        return buttonsProperties.map((buttonProperties) => {
            const className = filterState === buttonProperties.name ? 'btn btn-light' : 'btn btn-outline-light';
            return (
                <button
                    key={buttonProperties.name}
                    onClick={() => onFilterChange(buttonProperties.name)} 
                    className={className} 
                    type="button">
                        {buttonProperties.text}
                </button>
            )
        })
    }

    return (
        <div className='app-filter btn-group' role="tab" aria-label="Basic example">
            {getButtonsElements()}
        </div>
    );
}

export default AppFilter;