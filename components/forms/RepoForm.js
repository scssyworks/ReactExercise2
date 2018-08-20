import React, { Component } from "react";
import FormControl from "./FormControl";
import SubmitControl from "./SubmitControl";

class RepoForm extends Component {
    submitUserForm = (e) => {
        e.preventDefault();
        const { username, repository } = this.props;
        if (username && repository) {
            this.props.history.push(`/list/${username}/${repository}/1`);
        }
    }
    updateUsername = (e) => {
        const { updateUser } = this.props;
        updateUser(e.target.value);
    };
    updateRepoName = (e) => {
        const { updateRepository } = this.props;
        updateRepository(e.target.value);
    }
    render() {
        return (
            <form className="repo-form" onSubmit={this.submitUserForm}>
                <FormControl
                    name="repoUser"
                    onChangeMethod={this.updateUsername}
                    placeholder="e.g. Microsoft"
                    label="GitHub Username"
                />
                <FormControl
                    name="repoName"
                    onChangeMethod={this.updateRepoName}
                    placeholder="e.g. vscode"
                    label="Github Username"
                />
                <SubmitControl
                    classList={["repo-detail-submit"]} />
            </form>
        );
    }
}

export default RepoForm;