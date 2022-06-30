import React from "react";
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import FileUpload from "./components/FileUpload";
import AssignmentList from "./components/AssignmentList";

const App = () => {
    return (
        <Router >
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" >
                        <Landing/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/login" >
                        <Login/>
                    </Route>
                    {/*<Router exact path="/profile" component={Profile}/>*/}
                    {/*<Router exact path="/uploads" component={FileUpload}/>*/}
                    {/*<Router exact path="/assignments" component={AssignmentList}/>*/}
                </Switch>
            </div>
        </Router>
    )
}

export default App;