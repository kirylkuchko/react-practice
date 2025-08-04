import { Component } from "react";
import './search-bar.css';

export default class SearchBar extends Component {
    render () {
        return (
            <input className="form-control search-input" type="text" placeholder="Find employee"/>
        );
    }
}