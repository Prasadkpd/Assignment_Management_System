import React from 'react';
import {Link, withRouter} from "react-router-dom";

const Navbar = () => {

    const logout = (e, props) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        props.history.push({pathname: "/"})
    }

    const loginRegLink = () => {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/login" className="nav-links">
                        <h1><img src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"/>Login</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="nav-links">
                        <h1><img
                            src="https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-register-training-management-system-filled-outline-filled-outline-geotatah.png"/>Register
                        </h1>
                    </Link>
                </li>
            </ul>
        )
    }

    const userLink = () => {
        return (<ul className="nav nav-tabs">
                <li className="nav-items">
                    <Link to="/profile" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png"/>Profile
                        </h1>
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/uploads" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/add-rule.png"/>Assignment Submission</h1>
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/assignments" className="nav-link">
                        <h1><img src="https://img.icons8.com/color/48/000000/list.png"/>Assignment List</h1>
                    </Link>
                </li>
                <li className="nav-items">
                    <a href="" onClick={logout()}>
                        <h1><img src="https://img.icons8.com/color/48/000000/exit.png"/>Logout</h1>
                    </a>
                </li>
            </ul>
        )
    }

    const navBarRender = () => {
        if (localStorage.userToken) {
            {
                userLink()
            }
        } else {
            {
                loginRegLink()
            }
        }
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
                        <Link to="/" className="nav-link">
                            <h1><img src="https://img.icons8.com/color/48/000000/home--v1.png"/>Home</h1>
                        </Link>
                    </li>
                </ul>
                {localStorage.userToken ? userLink() : loginRegLink()}
            </div>
        </nav>

    );
};

export default withRouter(Navbar);