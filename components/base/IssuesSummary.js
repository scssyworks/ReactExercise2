import React from "react";

const IssuesSummary = (props) => (
    <div className="issues-summary">
        <span>Total issues:</span>
        <span>{props.total}</span>
    </div>
);

export default IssuesSummary;