import React, { useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { test, signupRequest } from '../../redux/signup/actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/british_pm.jpg";


function ViewTrip() {    
    
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

                            <h1 className="h3 mb-3 fw-normal">View Trip</h1>

                            <div className="container">


                                <div className="row" style={{ width: "700px" }}>


                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="FirstName" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Source</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="LastName" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Destination</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="PhoneNo" onChange={handleChange} size="10" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Driver</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="email" name="Email" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Customer</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" name="Password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Amount</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" className="form-control" id="floatingRePassword" placeholder="Retype Password" />
                                            <label htmlFor="floatingRePassword">Distance</label>
                                        </div>
                                    </div>

                                </div>

                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" name="Password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Transaction Type</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="password" className="form-control" id="floatingRePassword" placeholder="Retype Password" />
                                            <label htmlFor="floatingRePassword">Transaction Type</label>
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

export default ViewTrip;
