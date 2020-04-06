import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard/dashboard";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}