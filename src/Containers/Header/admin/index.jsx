import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signout } from "../../../services/authservice";
import '../style.css';

function AdminHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        signout(navigate);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Drivemate</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/admin/home' ? 'active' : ''}`} to="/admin/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/admin/customers' ? 'active' : ''}`} to="/admin/customers">Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/admin/drivers' ? 'active' : ''}`} to="/admin/drivers">Drivers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/admin/trips' ? 'active' : ''}`} to="/admin/trips">Trips</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AdminHeader;
