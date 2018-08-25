import React, { Component } from "react";
import Loader from "./Loader";
import StatusIcon from "../icons/StatusIcon";

class IssueDetail extends Component {
    renderIssueDetail = () => {
        const { isFetched, issueDetail } = this.props;
        if (!isFetched || !issueDetail.success) {
            return <Loader />
        }
        const { title, issueId, desc, created, updated, userId, status } = issueDetail;
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
                    <span className="created-on">Created on: <span>{created}</span></span>
                    <span className="user">By: <span>{userId}</span></span>
                </div>
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