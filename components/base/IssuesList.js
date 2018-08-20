import React from "react";

const IssuesList = (props) => (
    <div className="issues-list">
        {props.renderList()}
    </div>
);

export default IssuesList;