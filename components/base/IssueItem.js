import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatusIcon from "../icons/StatusIcon";
import CommentIcon from "../icons/CommentIcon";

class IssueItem extends Component {
    render() {
        const {
            username,
            repository,
            issueId,
            title,
            created,
            user,
            iconClass,
            commentCount
        } = this.props;
        const routeLink = `/detail/${username}/${repository}/${issueId}`;
        return (
            <div className="issue-item">
                <Link to={routeLink} className="issue-info">
                    <div className="issue-title">
                        <StatusIcon iconClass={iconClass} />
                        {title}
                    </div>
                    <div className="issue-props">
                        <span className="issue-id">#{issueId}: </span>
                        <span className="issue-openedon">Issue opened on: <span>{created}</span></span>
                        <span className="issue-by">By: <span>{user}</span></span>
                    </div>
                    <div className="issue-comments">
                        <CommentIcon iconClass="icon-comment" />
                        <span className="issue-commentcount">{commentCount}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default IssueItem;