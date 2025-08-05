import { Component } from 'react';
import './employees-list-item.css';

export default class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.salary = this.props.salary;
        this.state = {
            promotion: this.props.promotion,
            like: false
        }
    }

    tooglePromotion = () => {
        this.setState(({promotion}) => ({ promotion : !promotion}));
    }

    toogleLike = () => {
        this.setState(({like}) => ({ like : !like}));
    }

    getlistItemClassName = () => {
        let listItemClassName = 'employees-list-item list-group-item d-flex justify-content-between';
        if (this.state.promotion) {
            listItemClassName += ' promotion';
        }

        if (this.state.like) {
            listItemClassName += ' like';
        }

        return listItemClassName;
    }

    render() {
        return (
            <li className={ this.getlistItemClassName() }>
                <span onClick={ this.toogleLike } className="list-group-item-label">{ this.name }</span>
                <input type="text" className="list-group-item-input" defaultValue={ this.salary }/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={ this.tooglePromotion } type="button" className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
    )};
}