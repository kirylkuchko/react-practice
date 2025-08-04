import { Component } from "react";
import './app-filter.css';

export default class AppFilter extends Component {
    render () {
        return (
            <div className='app-filter btn-group' role="tab" aria-label="Basic example">
                <button className="btn btn-light" type="button">All employees</button>
                <button className="btn btn-outline-light" type="button">On promotion</button>
                <button className="btn btn-outline-light" type="button">Salary more than 1000$</button>
            </div>
        );
    }
}