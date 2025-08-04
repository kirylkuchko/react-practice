
import AppNavigation from '../app-navigation/app-navigation';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import AppInfo from '../app-info/app-info';
import './app.css';

export default function App() {
    return (
        <div className="app">
            <AppInfo/>
            <AppNavigation/>
            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    );
}