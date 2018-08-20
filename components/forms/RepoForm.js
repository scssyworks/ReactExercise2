import React, { Component } from "react";

class RepoForm extends Component {
    repoUser = React.createRef();
    repoName = React.createRef();
    submitUserForm = (e) => {
        e.preventDefault();
        const user = this.repoUser.current.value.trim();
        const repo = this.repoName.current.value.trim();
        if (user && repo) {
            this.props.history.push(`/list/${user}/${repo}/1`);
        }
    }
    render() {
        return (
            <form className="repo-form" onSubmit={this.submitUserForm}>
                <div className="form-group">
                    <label htmlFor="repoUser">GitHub User:</label>
                    <input ref={this.repoUser} type="text" id="repoUser" className="repo-user form-control" name="repoUser" placeholder="e.g. Microsoft" aria-label="Github user name" />
                </div>
                <div className="form-group">
                    <label htmlFor="repoUser">GitHub Repository:</label>
                    <input ref={this.repoName} type="text" id="repoName" className="repo-name form-control" name="repoName" placeholder="e.g. vscode" aria-label="Repository for github user" />
                </div>
                <button type="submit" className="repo-detail-submit btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default RepoForm;