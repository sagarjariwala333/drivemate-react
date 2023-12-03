import React, {useEffect, useState} from "react"
import "./style.css"
import {test, signupRequest} from '../../redux/signup/actions';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import img from "../../assets/british_pm.jpg";
import {useParams} from "react-router-dom";
import {fetchCustomerByIdRequest} from "../../redux/viewcustomer/actions";
import LoadingPage from "../Loading";


function Profile() {

    const {id} = useParams();

    const [profileUrl, setProfileUrl] = useState("")

    console.log(id)

    useEffect(() => {
        dispatch(fetchCustomerByIdRequest(id));
    }, [])

    const res = useSelector(state => state.ViewCustomer);

    console.log(res)


    useEffect(() => {
        const url = `data:image/png;base64, ${res?.data?.data}`
        setProfileUrl(url)

    }, [res])

    const [state, setState] = useState(
        {
            FirstName: res?.data?.firstName || "",
            LastName: res?.data?.lastName || "",
            Email: res?.data?.email || "",
            PhoneNo: res?.data?.phoneNo || ""
        }
    );


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const handleChangeImage = (e) => {
        setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="container top-level">
            {res?.loading ? (
                <LoadingPage/>
            ) : (
                <div className="profile-container mt-0">
                    <div className="profile-image mt-5 mb-2">
                        <img src={profileUrl || img} alt="Profile" className="profile-img" />
                        <p>{res?.data?.firstName}{" "}{res?.data?.lastName}</p>
                        <p>{res?.data?.role?.toString().toLowerCase() === "c" ? "Customer" : "Driver"}</p>
                    </div>
                    <div className="profile-info">
                        <p>
                            <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-car-front" viewBox="0 0 16 16">
                                <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
                                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
                            </svg> Trips:</strong> {res?.data?.totalTrips || 0}
                        </p>
                        {res?.data?.role?.toString().toLowerCase() === "d" && (
                            <p>
                                <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg> Customers:</strong> {res?.data?.totalCustomers || 0}
                            </p>
                        )}


                        <p>
                            <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                            </svg> {res?.data?.role?.toString().toLowerCase() === "c" ? "Spending" : "Earnings"}:</strong>{" "}

                             ₹  {res?.data?.totalAmount || 0}
                        </p>


                        <p>
                            <strong>Distance:</strong> {res?.data?.totalDistance?.toString().substring(0, 5) + " KM"}
                        </p>
                    </div>
                    <div className="personal-info">
                        <h4>Personal Information:</h4>
                        <div className="input-group mt-3">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        name="FirstName"
                                        onChange={handleChange}
                                        value={state?.firstName || res?.data?.firstName}
                                        className=""
                                        id="firstName"
                                        disabled
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        name="LastName"
                                        onChange={handleChange}
                                        value={res?.data?.lastName}
                                        className=""
                                        id="lastName"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="phoneNo">Mobile Number</label>
                                    <input
                                        type="text"
                                        name="PhoneNo"
                                        onChange={handleChange}
                                        value={res?.data?.phoneNo}
                                        className=""
                                        id="phoneNo"
                                        placeholder="Enter your phone number"
                                        disabled
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        onChange={handleChange}
                                        value={res?.data?.email}
                                        className=""
                                        id="email"
                                        placeholder="Enter your email address"
                                        disabled
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;