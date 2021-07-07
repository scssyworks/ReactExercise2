import React from "react";

const IssuesSummary = (props) => (
    <div className="issues-summary">
        <span>Total issues:</span>
        <span>{props.total}</span>
        <div className="issue-summary-inner">
            <span>Viewing:</span>
            <span>Page {props.pageNumber} of {props.totalPages}</span>
        </div>
    </div>
);

export default IssuesSummary;