import { Component } from "react";
import EmployeesListItem from "./employees-list-item/employees-list-item";
import './employees-list.css';

export default class EmployeesList extends Component {
    render () {
        return (
            <ul className="app-list list-group">
                <EmployeesListItem/>
                <EmployeesListItem/>
                <EmployeesListItem/>
            </ul>
        );
    }
}