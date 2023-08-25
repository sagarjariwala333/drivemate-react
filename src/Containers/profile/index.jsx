import React, { useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { test, signupRequest } from '../../redux/signup/actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/british_pm.jpg";


function Profile() {

    const [state, setState] = useState(
        {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNo: "",
            Password: "",
            Status: false,
            Role: 'C',
            AadharNo: "123",
            LicenceNo: "123",
            IsEmailConfirmed: false,
            IsPhoneConfirmed: false
        }
    );

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const customStyles = getCustomStyles();


    const handleChangeImage = (e) => {
        setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) })
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
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

                            <h1 className="h3 mb-3 fw-normal">View Profile</h1>

                            <div className="container">

                                <div className="row" style={{ width: "700px" }}>



                                    <div className="col">
                                        <div>

                                            <img src={img} alt="img" className="profile" />

                                        </div>
                                    </div>

                                    <div className="col">
                                        <h3>Trips: 20</h3>
                                        <h3>Customers: 20</h3>
                                        <h3>Earnings: 20</h3>
                                    </div>
                                </div>



                                <div className="row" style={{ width: "700px" }}>



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
                                            <input type="text" name="AadharNo" onChange={handleChange} className="form-control" id="adhar" placeholder="Aadhar Number" />
                                            <label htmlFor="aadhar">Aadhar Number</label>
                                            <a href="#" class="stretched-link">Download</a>
                                        </div>

                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="LicenceNo" onChange={handleChange} className="form-control" id="licenese" placeholder="License Number" />
                                            <label htmlFor="licenese">Licenese Number</label>
                                            <a href="#" class="stretched-link">Download</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Profile;
