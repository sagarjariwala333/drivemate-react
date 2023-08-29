import React, { useState } from "react"
import { getCustomStyles } from './style';
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from '../../redux/login/actions'
import { useNavigate } from "react-router-dom";
import LoadingPage from '../Loading';

function Login()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state,setState]=useState({
        email:"",
        password:""
    });

    const result = useSelector(state => state.Login)

    const handleFormChange=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log("form submit",state);
        dispatch(loginRequest(state,navigate))
    }

    const customStyles = getCustomStyles();

    return (
        result.loading ? <LoadingPage/> :
        <>
        <style>
            {customStyles}
        </style>

        <div className="d-flex align-items-center py-4 bg-body-tertiary">

            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleFormSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" name="email" onChange={handleFormChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" onChange={handleFormChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                
                </form>
            </main>
        </div>
        </>
    )
}

export default Login;
