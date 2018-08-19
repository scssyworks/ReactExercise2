import React, { Component } from "react";
import Search from "./Search";
import IssueItem from "./IssueItem";

class Issues extends Component {
    renderList = () => {
        return this.props.issues.list.map((issue, index) => (
            <IssueItem {...issue} key={index} index={index} />
        ));
    }
    renderDetails = () => {
        if (this.props.issues && this.props.issues.total) {
            return (
                <React.Fragment>
                    <Search />
                    <div className="issues-summary">
                        <span>Total issues:</span><span>{this.props.issues.total}</span>
                    </div>
                    <div className="issues-list">
                        {this.renderList()}
                    </div>
                </React.Fragment>
            );
        }
        return <div className="loading-el">Loading...</div>
    }
    sendRequest = async ({ page, user, repo }) => {
        this.props.fetchIssues(user, repo, page);
    }
    componentDidMount() {
        // Once the component has mounted send a request to server
        this.sendRequest(this.props.match.params);
    }
    render() {
        return (
            <div className="issues-container">
                {this.renderDetails()}
            </div>
        );
    }
}

export default Issues;