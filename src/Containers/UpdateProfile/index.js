import React, { useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { test, signupRequest } from '../../redux/signup/actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/british_pm.jpg";


function UpdateProfile() {    
    
    const [state,setState]=useState(
        {
            FirstName:"",
            LastName:"",
            Email:"",
            PhoneNo:"",
            Password:"",
            Status:false,
            Role:'C',
            AadharNo:"123",
            LicenceNo:"123",
            IsEmailConfirmed:false,
            IsPhoneConfirmed:false
        }
    );

    const dispatch=useDispatch();

    const handleSubmit=(e)=>
    {
        e.preventDefault();
    }

    const customStyles = getCustomStyles();


    const handleChangeImage = (e) => {
        setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) })
    }

    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
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

                            <h1 className="h3 mb-3 fw-normal">Please Update</h1>

                            <div className="container">


                                <div className="row" style={{ width: "700px" }}>

                                    {/* <div>
                                        
                                        <img src={img} alt="img" className="profile" />
                                        <input type="file" id="img" name="profilepic" accept="image/*" className="w-100" onChange={handleChangeImage} />

                                    </div> */}

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
                                            <input type="text" name="PhoneNo" onChange={handleChange} size="10" className="form-control" id="floatingPassword" placeholder="Password" disabled/>
                                            <label htmlFor="floatingPassword">Mobile Number</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="email" name="Email" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" disabled/>
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                    </div>
                                </div>



                                {/* <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="AadharNo" onChange={handleChange} className="form-control" id="adhar" placeholder="Aadhar Number" />
                                            <label htmlFor="aadhar">Aadhar Number</label>
                                            <input type="file" />
                                        </div>

                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="LicenceNo" onChange={handleChange} className="form-control" id="licenese" placeholder="License Number" />
                                            <label htmlFor="licenese">Licenese Number</label>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">Update</button>
                            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>


                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile;
