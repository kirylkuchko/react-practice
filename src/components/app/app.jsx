
import AppNavigation from '../app-navigation/app-navigation';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import AppInfo from '../app-info/app-info';
import './app.css';
import { Component } from 'react';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Samuel Akers', salary: 1200, id: 1, isPropmoted: false, isRised: false},
                {name: 'Marlyn Headley', salary: 3500, id: 2, isPropmoted: true, isRised: true},
                {name: 'Tamika West', salary: 2000, id: 3, isPropmoted: false, isRised: false},
            ]
        }
        this.idCounter = 4;
    }

    onRemoveEmployee = (employeeId) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((employee) => employee.id !== employeeId)
            }
        });
    }

    onAddEmployee = (name, salary) => {
        this.setState(({ data }) => {
            return {
                data: [...data, this.getNewEmployee(name, salary)]
            }
        });
    }

    getNewEmployee = (name, salary) => {
        const employee = {name, salary, isPropmoted: false, isRised: false};
        employee.id = this.getNewEmployeeId();
        return employee;
    }

    getNewEmployeeId = () => {
        this.idCounter++;
        return this.idCounter - 1;
    }

    onPromotionToogle = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.map((employee) => {
                    return { ...employee, isPropmoted: employee.id === id ? !employee.isPropmoted : employee.isPropmoted }
                })
            }
        });
    }

    onRiseToogle = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.map((employee) => {
                    return { ...employee, isRised: employee.id === id ? !employee.isRised : employee.isRised }
                })
            }
        });
    }

    render () {
        return (
            <div className="app">
                <AppInfo employeesNumber={this.state.data.length} />
                <AppNavigation/>
                <EmployeesList 
                    employees={this.state.data} 
                    onRemoveEmployee={this.onRemoveEmployee}
                    onPromotionToogle={this.onPromotionToogle}
                    onRiseToogle={this.onRiseToogle}/>
                <EmployeesAddForm onAddEmployee={this.onAddEmployee}/>
            </div>
        )
    }
}