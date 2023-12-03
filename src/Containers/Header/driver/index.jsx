import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../../services/authservice";
import '../style.css';
import { useSelector } from "react-redux";
import img from "../../../assets/british_pm.jpg";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCustomerByIdRequest } from "../../../redux/viewcustomer/actions";

function DriverHeader() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [profileUrl, setProfileUrl] = useState("");
    const dispatch = useDispatch();
    const res = useSelector(state => state.ViewCustomer);

    useEffect(() => {
        dispatch(fetchCustomerByIdRequest(id));
    }, []);

    useEffect(() => {
        const url = `data:image/png;base64, ${res?.data?.data}`;
        setProfileUrl(url);
    }, [res]);

    const handleLogout = () => {
        signout(navigate);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="#">Drivemate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/driver/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/driver/trips">Trips</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/driver/profile">Profile</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/driver/update">Update</Link>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profileUrl || img} alt="img" className="prfl" />

                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default DriverHeader;
