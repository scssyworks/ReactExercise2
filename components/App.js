import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/githubStore";
import VisibleRepoForm from "./visible/VisibleRepoForm";
import VisibleIssues from "./visible/VisibleIssues";

class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <h1>
                        <Link to="/">Github Issues</Link>
                    </h1>
                    <Switch>
                        <Route path="/" exact component={VisibleRepoForm} />
                        <Route path="/list/:user/:repo/:page" component={VisibleIssues} />} />
                        {/* <Route path="/detail/:user/:repo:/:issueId" component={IssueDetail} /> */}
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default App;