import React, { Component } from "react";
import { Link } from "react-router-dom";

class IssueItem extends Component {
    render() {
        const { username, repository, issueId, title } = this.props;
        const routeLink = `/detail/${username}/${repository}/${issueId}`;
        return (
            <div className="issue-item">
                <Link to={routeLink} className="issue-info">
                    <div className="issue-title">{title}</div>
                </Link>
            </div>
        );
    }
}

export default IssueItem;