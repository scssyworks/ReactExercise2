import React, { Component } from "react";
import Loader from "./Loader";
import StatusIcon from "../icons/StatusIcon";
import Comments from "./Comments";

class IssueDetail extends Component {
    renderIssueDetail = () => {
        const { isFetched, issueDetail } = this.props;
        if (!isFetched || !issueDetail.success) {
            return <Loader />
        }
        const { title, issueId, status, comments } = issueDetail;
        const { userId } = comments.find(comment => comment.def);

        return (
            <div className="issue-detail-block">
                <div className="issue-detail-title">
                    <span className="title">{title}</span>
                    <span className="issue-id">#{issueId}</span>
                </div>
                <div className="issue-detail-summary">
                    <span className={`status-info ${status}`}>
                        <StatusIcon iconClass={`icon-${status}`} />
                        <span>{status}</span>
                    </span>
                    <span className="user">Created by: <span>{userId}</span></span>
                </div>
                <Comments comments={comments} />
            </div>
        );
    }
    render() {
        return (
            <div className="issues-container">
                {this.renderIssueDetail()}
            </div>
        );
    }
    componentDidMount() {
        this.props.fetchIssueDetail(this.props.match.params);
    }
}

export default IssueDetail;