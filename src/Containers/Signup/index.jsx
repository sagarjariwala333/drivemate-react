import React, { useState } from "react";
import './signup.css'; // Your custom CSS file
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from '../../redux/signup/actions';
import { useNavigate } from "react-router-dom";
import LoadingPage from '../Loading';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNo: "",
        Password: "",
        repassword:"",
        Role: '',
        AadharNo: "123",
        LicenceNo: "123",
        IsEmailConfirmed: false,
        IsPhoneConfirmed: false,
        aadhar: null,
        licence: null,
        profilepic: null
    });

    const dispatch = useDispatch();
    const result = useSelector(state => state.Signup);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordPattern.test(state.Password)) {
            toast.warning("Password must meet the following criteria:\n" +
                "- Minimum 8 characters\n" +
                "- At least one special character\n" +
                "- At least one lowercase letter\n" +
                "- At least one uppercase letter\n" +
                "- At least one digit");
        }
        else if(state.password !== state.repassword){
            toast.warning("password's are not same")
        }
        else{
            dispatch(signupRequest(state, navigate));    
        }
    }

    const handleChangeImage = (e) => {
        setState({ ...state, [e.target.name]: URL.createObjectURL(e.target.files[0]) })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleRoleChange = (e) => {
        setState({ ...state, Role: e.target.value });
    }

    const handleBinaryChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.files[0] });
    };

    return (
        result.loading ? <LoadingPage /> :
        <div className="d-flex align-items-center justify-content-center py-4 bg-body-tertiary" style={{ minHeight: "100vh" }}>
             <h1 className="text-logo text-center">Drivemate</h1>
             <main className="form-signup form-container">
             <h3 className="h3">Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="picture mb-3">
                                    <label htmlFor="profilepic" className="form-label">Profile Picture</label>
                                    <input type="file" id="profilepic" onChange={handleBinaryChange} name="profilepic" className="form-control" accept="image/*" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        
                                        <input type="text" name="FirstName" onChange={handleChange} className="form-control" placeholder="First Name" required/>
                                    </div>
                                    <div className="col">
                                        <input type="text" name="LastName" onChange={handleChange} className="form-control" placeholder="Last Name" required/>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input type="email" name="Email" onChange={handleChange} className="form-control" placeholder="Email address" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="Password" onChange={handleChange} className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="repassword" onChange={handleChange} className="form-control" placeholder="Retype Password" required/>
                                </div>
                            <div className="row">
                                <div className="col">
                                    <select id="role" name="Role" value={state.Role} onChange={handleRoleChange} className="form-select" placeholder="Role">
                                        <option value=''>--Select Role--</option>
                                        <option value='C'>Customer</option>
                                        <option value='D'>Driver</option>
                                    </select>
                                </div>
                            <div className="col">
                                <input type="text" name="PhoneNo" onChange={handleChange} className="form-control" placeholder="Mobile Number" />
                            </div>
                            </div>

                                {(state.Role === 'D') &&
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input type="text" name="AadharNo" onChange={handleChange} className="form-control" placeholder="Aadhar Number" />
                                            <input type="file" name="aadhar" onChange={handleBinaryChange} className="form-control mt-2" />
                                        </div>
                                        <div className="col">
                                            <input type="text" name="LicenceNo" onChange={handleChange} className="form-control" placeholder="License Number" />
                                            <input type="file" name="licence" onChange={handleBinaryChange} className="form-control mt-2" />
                                        </div>
                                    </div>
                                }

                            
                            <button className="btn purple-button" type="submit">Sign up</button>
                            <p className="mt-4">Already have an account? <Link className="link-tag" to="/login/">Sign in</Link></p>
                            </div>
                        </form>
                    </main>
                </div>
            
    )
}

export default Signup;
