import React, { useState } from "react";
import './login.css'; // Your custom CSS file
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from '../../redux/login/actions';
import { useNavigate } from "react-router-dom";
import LoadingPage from '../Loading';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const result = useSelector(state => state.Login);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (state.email?.length<1 || state.password?.length <1){
            toast.error("Password and email are mendatory")
        }
        else if(!emailPattern.test(state.email)){
            toast.error("invalid email!")
        }
        else{
            dispatch(loginRequest(state, navigate));
        }
    }

    return (
        result.loading ? <LoadingPage /> :
       
            <div className="d-flex align-items-center justify-content-center py-4 bg-body-tertiary" style={{ minHeight: "100vh" }}>
                        <h1 className="text-logo text-center">Drivemate</h1>
                <main className="form-signin form-container" style={{ width: '400px' }}>
                        <h3 className="h2">Login</h3>
                    <form onSubmit={handleFormSubmit}>

                        <div className="form-floating mb-3">
                            <input type="text" name="email" onChange={(e) => setState({ ...state, email: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" name="password" onChange={(e) => setState({ ...state, password: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="btn purple-button" type="submit">Sign in</button>
                        <p className="mt-3">Don't have an account? <Link className="link-tag" to="/signup/">Sign up</Link></p>
                    </form>
                </main>
            </div>
    )
}

export default Login;
