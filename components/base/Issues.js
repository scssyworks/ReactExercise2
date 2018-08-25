import React, { PureComponent } from "react";
import IssueItem from "./IssueItem";
import Loader from "./Loader";
import IssuesList from "./IssuesList";
import IssuesSummary from "./IssuesSummary";
import Search from "../forms/Search";
import VisiblePaginator from "../visible/VisiblePaginator";

class Issues extends PureComponent {
    renderList = () => {
        const { issues, username, repository } = this.props;
        return issues.map((issue, index) => (
            <IssueItem {...issue} username={username} repository={repository} key={index} index={index} />
        ));
    }
    renderDetails = () => {
        const { count, isFetched } = this.props;
        if (isFetched) {
            return (
                <React.Fragment>
                    <Search />
                    <IssuesSummary total={count} />
                    <IssuesList renderList={this.renderList} />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <Loader />
            </React.Fragment>
        );
    }
    sendRequest = ({ page, user, repo }) => {
        this.props.fetchIssues({ user, repo, page });
    }
    componentDidMount() {
        // Once the component has mounted send a request to server
        this.sendRequest(this.props.match.params);
    }
    componentDidUpdate(prevProps) {
        const { pathname: currentPath } = this.props.location;
        const { pathname: prevPath } = prevProps.location;
        if (currentPath !== prevPath) {
            console.log("Route change has triggered");
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="issues-container">
                    {this.renderDetails()}
                </div>
                <VisiblePaginator />
            </React.Fragment>
        );
    }
}

export default Issues;