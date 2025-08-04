import EmployeesListItem from "./employees-list-item/employees-list-item";
import './employees-list.css';

export default function EmployeesList ({employees}) {
    const listItems = () => {
        return employees.map((employee) => {
            const {id, ...props} = employee;
            return <EmployeesListItem key={ id } {...props}/>}
        )
    };
    

    return (
        <ul className="app-list list-group">
            { listItems() }
        </ul>
    );
}