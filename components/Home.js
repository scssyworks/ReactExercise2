import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import RepoForm from "./RepoForm";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Github Issues</Link>
                </h1>
                <Switch>
                    <Route path="/" exact component={RepoForm} />
                </Switch>
            </div>
        );
    }
}

export default Home;