import React, { Component } from "react";

class Search extends Component {
    submitOnSearch = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <form className="issue-search form-inline" onSubmit={this.submitOnSearch}>
                <div className="form-group mr-2">
                    <input type="search" id="issueSearch" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        );
    };
}

export default Search;