import React, { useEffect, useState } from "react"
import { getCustomStyles } from './style';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';
import { reversegeoCodeRequest } from "../../../redux/reversegeolocation/actions";
import { Link } from "react-router-dom";



function CustomerHome() {


    const dispatch = useDispatch();

    const [location, setLocation] = useState(null);

    const [address, setAddress] = useState({
        source: "",
        destination: ""

    })

    let latitude, longitude;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                    console.log(latitude + " " + longitude);
                    console.log("Exact Latitude:", latitude);
                    console.log("Exact Longitude:", longitude);
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);


    let sourceAddress = "";

    const getLocation = (e) => {

        e.preventDefault();
        console.log("Get location called", location);
        var obj = {
            lattitude: location.latitude,
            longitude: location.longitude
        }
        console.log("Get location", obj);

        dispatch(reversegeoCodeRequest(obj));

        setTimeout(() => {
            // Perform any cleanup or unmount logic here
            console.log("result", res.data.result[0].formatted_address);
            setAddress({
                ...address,
                source: res.data.result[0].formatted_address
            });
        }, 3000);


    };


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

    const res = useSelector(state => state.ReverseGeoLocation);

    const handleSubmit = (e) => {
        console.log("Handle submit");
        e.preventDefault();

    }

    console.log(res);

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

                            <h1 className="h3 mb-3 fw-normal">Please Book Trip</h1>

                            <div className="container">


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col-4">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" onChange={handleChange} className="form-control transparent-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Source</label>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="form-floating m-2">
                                            <Link onClick={getLocation}>Get Location</Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col-4">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" onChange={handleChange} className="form-control transparent-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Source Address</label>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" value={address.source} onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Source Address</label>
                                        </div>
                                    </div>


                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col-4">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" onChange={handleChange} className="form-control transparent-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Destination</label>
                                        </div>
                                    </div>


                                    <div className="col-8">
                                        <div className="form-floating m-2">
                                            <input type="text" name="FirstName" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Address</label>
                                        </div>
                                    </div>

                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" onChange={handleChange} className="form-control transparent-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Date and Time</label>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="date" name="FirstName" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Date</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating m-2">
                                            <input type="time" name="LastName" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Time</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row" style={{ width: "700px" }}>

                                    <div className="col-4">
                                        <div className="form-floating m-2">
                                            <input disabled="true" type="text" name="FirstName" onChange={handleChange} className="form-control transparent-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Trip Name</label>
                                        </div>
                                    </div>


                                    <div className="col-8">
                                        <div className="form-floating m-2">
                                            <input type="text" name="FirstName" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Trip Name</label>
                                        </div>
                                    </div>


                                </div>

                                <button className="btn btn-primary w-100 py-2 ms-3 mt-3" type="submit">Book</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default CustomerHome;
