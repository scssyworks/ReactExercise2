import React, { Component } from "react";
import IssueItem from "./IssueItem";
import Loader from "./Loader";
import IssuesList from "./IssuesList";
import IssuesSummary from "./IssuesSummary";
import Search from "../forms/Search";

class Issues extends Component {
    renderList = () => {
        const { list } = this.props.issues;
        return list.map((issue, index) => (
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