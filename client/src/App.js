import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import AssignmentList from "./components/AssignmentList";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/assignments" element={<AssignmentList/>}/>
            </Routes>
        </Router>

    );
};

export default App;