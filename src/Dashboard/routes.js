import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./login";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}