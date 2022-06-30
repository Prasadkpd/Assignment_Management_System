import React, {useEffect, useState} from 'react';
import {login} from "./UserFunctions";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const initialState = {
        email: '',
        password: ''
    }

    const [loginState, setLoginState] = useState(initialState);
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        console.log(loginState);
        setLoginState({...loginState, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: loginState.email,
            password: loginState.password
        }

        login(user).then(res => {
            if (res) {
                navigate("/profile")
            }
        })
    }

    return (
        <div className="container">
            <h2>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={handleSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                <p align="center">Student Login</p>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={loginState.email}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={loginState.password}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">Sign In</button >
                            </h1>
                        </form>
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default Login;