import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../../services/authservice";


function DriverHeader() {

    const navigate = useNavigate();
    
    const logout=()=>{
        signout(navigate);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Drivemate</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/driver/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/driver/trips">Trips</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/driver/profile">Profile</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/customer/update">Update</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" onClick={logout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DriverHeader;