import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import RepoForm from "../forms/RepoForm";
import Issues from "./Issues";
import IssueDetail from "./IssueDetail";
import { history } from "../../store/githubStore";

class Home extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <h1>
                        <Link to="/">Github Issues</Link>
                    </h1>
                    <Switch>
                        <Route path="/" exact component={RepoForm} />
                        <Route path="/list/:user/:repo/:page" render={(props) => <Issues {...props} fetchIssues={this.props.fetchIssues} issues={this.props.issues} />} />
                        <Route path="/detail/:user/:repo:/:issueId" component={IssueDetail} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default Home;