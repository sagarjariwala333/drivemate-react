import React, { useEffect, useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { test, signupRequest } from '../../redux/signup/actions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import img from "../../assets/british_pm.jpg";
import { useParams } from "react-router-dom";
import { fetchCustomerByIdRequest } from "../../redux/viewcustomer/actions";


function Profile() {

    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchCustomerByIdRequest(id));
    },[])

    const res = useSelector(state => state.ViewCustomer);

    const [state, setState] = useState(
        {
            FirstName: res.data.firstName || "",
            LastName: res.data.lastName || "",
            Email: res.data.email || "",
            PhoneNo:res.data.phoneNo || ""
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
                                            <input type="text" name="FirstName" onChange={handleChange} value={state.firstName || res.data.firstName} className="form-control" id="floatingInput" placeholder="name@example.com" disabled/>
                                            <label htmlFor="floatingInput">First Name</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="LastName" onChange={handleChange} value={res.data.lastName} className="form-control" id="floatingPassword" placeholder="Password" disabled/>
                                            <label htmlFor="floatingPassword">Last Name</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="text" name="PhoneNo" onChange={handleChange} value={res.data.phoneNo} size="10" className="form-control" id="floatingPassword" placeholder="Password" disabled/>
                                            <label htmlFor="floatingPassword">Mobile Number</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="email" name="Email" onChange={handleChange} value={res.data.email} className="form-control" id="floatingInput" placeholder="name@example.com" disabled/>
                                            <label htmlFor="floatingInput">Email address</label>
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
