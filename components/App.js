import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VisibleRepoForm from "./visible/VisibleRepoForm";
import VisibleIssues from "./visible/VisibleIssues";
import Error from "./errors/Error";
import VisibleIssueDetail from "./visible/VisibleIssueDetail";

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
                        <Route path="/detail/:user/:repo/:issueId" component={VisibleIssueDetail} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;