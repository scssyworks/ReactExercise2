import React, { Component } from "react";

class RepoForm extends Component {
    render() {
        return (
            <form className="repo-form">
                <input type="text" className="repo-user" name="repoUser" placeholder="e.g. Microsoft" aria-label="Github user name" />
                <input type="text" className="repo-name" name="repoName" placeholder="e.g. vscode" aria-label="Repository for github user" />
                <button type="submit" className="repo-detail-submit">Submit</button>
            </form>
        );
    }
}

export default RepoForm;