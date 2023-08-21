import React from "react"
import { getCustomStyles } from './style';


function Signup() {
    const customStyles = getCustomStyles();

    return (
        <>
            <style>
                {customStyles}
            </style>

            <div className="d-flex align-items-center py-4 bg-body-tertiary">

                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                        <div className="container">

                            <div className="row" style={{ width: "700px" }}>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">First Name</label>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Last Name</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row" style={{ width: "700px" }}>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="text" size="10" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Mobile Number</label>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ width: "700px" }}>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="password" className="form-control" id="floatingRePassword" placeholder="Retype Password" />
                                        <label htmlFor="floatingRePassword">Retype Password</label>
                                    </div>
                                </div>

                            </div>

                            <div className="row" style={{ width: "700px" }}>
                                <div className="col">
                                    <div className="form-floating m-2">
                                        <select id="role" name="role" className="form-control" placeholder="Role">
                                            <option value="none">--Select Role--</option>
                                            <option value="volvo">Driver</option>
                                            <option value="saab">Customer</option>
                                        </select>
                                        <label htmlFor="role">Role</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ width: "700px" }}>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="text" className="form-control" id="adhar" placeholder="Aadhar Number" />
                                        <label htmlFor="aadhar">Aadhar Number</label>
                                        <input type="file" />
                                    </div>
                                    
                                </div>

                                <div className="col">
                                    <div className="form-floating m-2">
                                        <input type="text" className="form-control" id="licenese" placeholder="License Number" />
                                        <label htmlFor="licenese">Licenese Number</label>
                                        <input type="file" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>


                    </form>
                </main>
            </div>
        </>
    )
}

export default Signup;
