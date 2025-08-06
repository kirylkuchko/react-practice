import './app-info.css';

const AppInfo = (props) => {
    const { getNumberOfEmployees, getNumberOfRisedEmployees } = props;

    return (
        <div className="app-info">
            <h1>Employee accounting in the company</h1>
            <h2>Total number of employees: {getNumberOfEmployees()}</h2>
            <h2>Will get a bonus: {getNumberOfRisedEmployees()}</h2>
        </div>
    );
}

export default AppInfo;