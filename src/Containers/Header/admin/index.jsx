import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../../../services/authservice";


function AdminHeader() {

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
                                <Link className="nav-link" to="/admin/customers">Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/drivers">Drivers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/trips">Trips</Link>
                            </li>
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

export default AdminHeader;