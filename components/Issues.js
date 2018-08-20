import React, { Component } from "react";
import Search from "./Search";
import IssueItem from "./IssueItem";
import Loader from "./Loader";
import IssuesList from "./IssuesList";
import IssuesSummary from "./IssuesSummary";

class Issues extends Component {
    renderList = () => {
        return this.props.issues.list.map((issue, index) => (
            <IssueItem {...issue} key={index} index={index} />
        ));
    }
    renderDetails = () => {
        const { total } = this.props.issues;
        if (total) {
            return (
                <React.Fragment>
                    <Search />
                    <IssuesSummary total={total} />
                    <IssuesList renderList={this.renderList} />
                </React.Fragment>
            );
        }
        return <Loader />
    }
    sendRequest = ({ page, user, repo }) => {
        this.props.fetchIssues({ user, repo, page });
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