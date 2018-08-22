import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VisibleRepoForm from "./visible/VisibleRepoForm";
import VisibleIssues from "./visible/VisibleIssues";
import IssueDetail from "./base/IssueDetail";
import Error from "./errors/Error";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>
                        <Link to="/">GitHub Issues</Link>
                    </h1>
                    <Switch>
                        <Route path="/" exact component={VisibleRepoForm} />
                        <Route path="/list/:user/:repo/:page" component={VisibleIssues} />
                        <Route path="/detail/:user/:repo/:issueId" component={IssueDetail} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;