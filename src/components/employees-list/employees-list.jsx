import { Component } from "react";
import EmployeesListItem from "./employees-list-item/employees-list-item";
import './employees-list.css';

export default class EmployeesList extends Component {

    listItems = () => {
        return this.props.employees.map((employee) => {
            const {id, ...otherProps} = employee;
            return <EmployeesListItem 
                key={id} 
                {...otherProps}
                onRemoveEmployee={() => {this.props.onRemoveEmployee(id)}}
                onPromotionToogle={() => {this.props.onPromotionToogle(id)}}
                onRiseToogle={() => {this.props.onRiseToogle(id)}}/>
        });
    };
    
    render() {
        return (
            <ul className="app-list list-group">
                {this.listItems()}
            </ul>
        )
    }
}