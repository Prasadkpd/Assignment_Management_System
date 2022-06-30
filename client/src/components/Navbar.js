import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
    const [authState, setAuthState] = useState(false);

    const logout = (e) => {
        console.log("Button Clicked")
        console.log(localStorage);
        localStorage.removeItem('usertoken');
        console.log("After");
        console.log(localStorage);
        navigate("/", {replace:true})
    }

    useEffect(() => {
        return () => {
            if (localStorage.getItem('usertoken') !== null){
                setAuthState(true);
            }
            else {
                setAuthState(false);
            }
        };
    }, [localStorage.getItem('usertoken')]);


    const loginRegLink = () => {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="/login" className="nav-links">
                        <h1><img src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"/>Login</h1>
                    </a>
                </li>
                <li>
                    <a href="/register" className="nav-links">
                        <h1><img
                            src="https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-register-training-management-system-filled-outline-filled-outline-geotatah.png"/>Register
                        </h1>
                    </a>
                </li>
            </ul>
        )
    }

    const userLink = () => {
        return (<ul className="nav nav-tabs">
                <li className="nav-items">
                    <a href="/profile" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png"/>Profile
                        </h1>
                    </a>
                </li>
                <li className="nav-items">
                    <a href="/uploads" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/add-rule.png"/>Assignment Submission</h1>
                    </a>
                </li>
                <li className="nav-items">
                    <a href="/assignments" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/list.png"/>Assignment List</h1>
                    </a>
                </li>
                <li className="nav-items">
                    <button onClick={()=> logout()} className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/exit.png"/>Logout</h1>
                    </button>
                </li>
            </ul>
        )
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light rounded">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <h1><img src="https://img.icons8.com/color/48/000000/home--v1.png"/>Home</h1>
                        </a>
                    </li>
                </ul>
                {authState ?  userLink(): loginRegLink()}
            </div>
        </nav>

    );
};

export default Navbar;