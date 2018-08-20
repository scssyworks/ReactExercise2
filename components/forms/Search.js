import React, { Component } from "react";
import FormControl from "./FormControl";
import SubmitControl from "./SubmitControl";

class Search extends Component {
    submitOnSearch = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <form className="issue-search form-inline" onSubmit={this.submitOnSearch}>
                <FormControl
                    formGroupClassList={["mg-0", "mr-4"]}
                    type="search"
                    id="issueSearch"
                    placeholder="Search"
                />
                <SubmitControl
                    innerJSX="Search"
                />
            </form>
        );
    };
}

export default Search;