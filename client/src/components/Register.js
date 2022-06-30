import React, {useState} from 'react';
import {register} from "./UserFunctions";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    const [registerState, setRegisterState] = useState(initialState);
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        setRegisterState({...registerState, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            first_name: registerState.first_name,
            last_name: registerState.last_name,
            email: registerState.email,
            password: registerState.password
        }

        register(user).then(res => {
            if (res) {
                navigate("/login")
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
                                <p align="center">Student Enroll Form</p>
                                <div className="form-group">
                                    <label htmlFor="email">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        placeholder="Enter First Name"
                                        value={registerState.first_name}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="last_name"
                                        placeholder="Enter Last Name"
                                        value={registerState.last_name}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={registerState.email}
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
                                        value={registerState.password}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <button type='submit' className="btn btn-lg btn-primary btn-block">Register</button>
                            </h1>
                        </form>
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default Register;