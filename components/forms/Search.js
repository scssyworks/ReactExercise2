import React, { Component } from "react";
import ButtonControl from "./ButtonControl";
import InputControl from "./InputControl";

class Search extends Component {
    submitOnSearch = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <ButtonControl innerJSX="Filter" />
                </div>
                <InputControl type="search" placeholder="Search" ariaLabel="Search issues" />
            </div>
        );
    };
}

export default Search;