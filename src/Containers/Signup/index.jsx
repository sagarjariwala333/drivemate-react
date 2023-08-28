import React, { useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { test, signupRequest } from '../../redux/signup/actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/british_pm.jpg";


function Signup() {

    const [state, setState] = useState(
        {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNo: "",
            Password: "",
            Status: true,
            Role: "",
            AadharNo: "123",
            LicenceNo: "123",
            IsEmailConfirmed: false,
            IsPhoneConfirmed: false,
            aadhar: null,
            licence: null,
            profilepic: null
        }
    );

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log("Form submitted", state);
        e.preventDefault();
        dispatch(signupRequest(state));
    }

    const customStyles = getCustomStyles();


    const handleChangeImage = (e) => {
        setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleRoleChange = (e) => {
        setState({
            ...state,
            Role: e.target.value
        })
    }

    const handleBinaryChange = (e) => {
        e.preventDefault();

        setState({
            ...state,
            [e.target.name]: URL.createObjectURL(e.target.files[0])
        })
    }


    return (
        <>
            <style>
                {customStyles}
            </style>



            <div className="center-horizontal">
                <div className="container">

                    <main className="form-signin w-100">
                        <form onSubmit={handleSubmit}>

                            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                            <div className="container">


                                <div className="row" style={{ width: "700px" }}>

                                    <div>

                                        <img src={state.profilepic} alt="img" className="profile" />
                                        <input type="file" id="img" onChange={handleBinaryChange} name="profilepic" accept="image/*" className="w-100" />

                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="FirstName" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">First Name</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="LastName" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Last Name</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="PhoneNo" onChange={handleChange} size="10" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Mobile Number</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="email" name="Email" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" name="Password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" className="form-control" id="floatingRePassword" placeholder="Retype Password" />
                                            <label htmlFor="floatingRePassword">Retype Password</label>
                                        </div>
                                    </div>

                                </div>

                                <div className="row" style={{ width: "700px" }}>
                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <select id="role" name="role" value={state.Role} onChange={handleRoleChange} className="form-control" placeholder="Role">
                                                <option value="">--Select Role--</option>
                                                <option value="customer">Customer</option>
                                                <option value="driver">Driver</option>
                                            </select>
                                            <label htmlFor="role">Role</label>
                                        </div>
                                    </div>
                                </div>

                                {
                                    (state.Role === "driver") &&
                                    <>
                                        <div className="row" style={{ width: "700px" }}>

                                            <div className="col">
                                                <div className="form-floating m-2">
                                                    <input type="text" name="AadharNo" onChange={handleChange} className="form-control" id="adhar" placeholder="Aadhar Number" />
                                                    <label htmlFor="aadhar">Aadhar Number</label>
                                                    <input type="file" name="aadhar" onChange={handleBinaryChange} />
                                                </div>

                                            </div>

                                            <div className="col">
                                                <div className="form-floating m-2">
                                                    <input type="text" name="LicenceNo" onChange={handleChange} className="form-control" id="licenese" placeholder="License Number" />
                                                    <label htmlFor="licenese">Licenese Number</label>
                                                    <input type="file" name="licence" onChange={handleBinaryChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>

                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Signup;
