import React, { Component } from "react";
import IssueItem from "./IssueItem";
import Loader from "./Loader";
import IssuesList from "./IssuesList";
import IssuesSummary from "./IssuesSummary";
import Search from "../forms/Search";
import Paginator from "./Paginator";

class Issues extends Component {
    renderList = () => {
        const { issues, username, repository } = this.props;
        return issues.map((issue, index) => (
            <IssueItem {...issue} username={username} repository={repository} key={index} index={index} />
        ));
    }
    renderDetails = () => {
        const { count, isFetched, pageNumber, totalPages } = this.props;
        if (isFetched) {
            return (
                <React.Fragment>
                    <Search />
                    <IssuesSummary total={count} />
                    <IssuesList renderList={this.renderList} />
                    <Paginator pageNumber={pageNumber} totalPages={totalPages} />
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