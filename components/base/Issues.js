import React, { Component } from "react";
import IssueItem from "./IssueItem";
import Loader from "./Loader";
import IssuesList from "./IssuesList";
import IssuesSummary from "./IssuesSummary";
import Search from "../forms/Search";

class Issues extends Component {
    renderList = () => {
        const { issues } = this.props;
        return issues.map((issue, index) => (
            <IssueItem {...issue} key={index} index={index} />
        ));
    }
    renderDetails = () => {
        const { count } = this.props;
        if (count) {
            return (
                <React.Fragment>
                    <Search />
                    <IssuesSummary total={count} />
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