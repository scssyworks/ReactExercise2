import React, { Component } from "react";
import Loader from "./Loader";

class IssueDetail extends Component {
    renderIssueDetail = () => {
        const { isFetched, issueDetail } = this.props;
        if (!isFetched || !issueDetail.success) {
            return <Loader />
        }
        return <div className="issue-detail-block">This issue issue detail block</div>;
    }
    render() {
        return (
            <div className="issues-container">
                {this.renderIssueDetail()}
            </div>
        );
    }
    componentDidMount() {
        console.log("MOUNTED!!!");
        this.props.fetchIssueDetail(this.props.match.params);
    }
}

export default IssueDetail;