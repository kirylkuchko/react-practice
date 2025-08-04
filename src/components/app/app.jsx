
import AppNavigation from '../app-navigation/app-navigation';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import AppInfo from '../app-info/app-info';
import './app.css';

export default function App() {
    const data = [
        {name: 'Samuel Akers', salary: 1200, promotion: false, id: 1},
        {name: 'Marlyn Headley', salary: 3500, promotion: true, id: 2},
        {name: 'Tamika West', salary: 2000, promotion: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <AppNavigation/>
            <EmployeesList employees={data}/>
            <EmployeesAddForm/>
        </div>
    );
}