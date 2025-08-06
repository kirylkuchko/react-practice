import { Component } from "react";
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...EmployeesAddForm.DEFAULT_STATE_VALUE
        }
    }

    static DEFAULT_STATE_VALUE = {
        name: '',
        salary: ''
    }


    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    resetForm = () => {
        this.setState({
            ...EmployeesAddForm.DEFAULT_STATE_VALUE
        });
    }

    onAddClick = (e) => {
        if (!this.state.name.trim()) {
            return;
        }

        this.props.onAddEmployee(this.state.name, this.state.salary);
        this.resetForm();
        e.preventDefault();
    }

    render () {
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex">
                    <input name='name' value={this.state.name} onChange={this.onChangeValue} type="text" className="form-control new-post-label" placeholder="What's his name?" />
                    <input name='salary' value={this.state.salary} onChange={this.onChangeValue} type="number"className="form-control new-post-label"placeholder="Salary in $?" />
                    <button onClick={this.onAddClick} type="submit" className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}