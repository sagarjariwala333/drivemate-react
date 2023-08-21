import React from "react"
import { getCustomStyles } from './style';


function UploadDocumnets() {
    const customStyles = getCustomStyles();

    return (
        <>
            <style>
                {customStyles}
            </style>

            <div className="d-flex align-items-center py-4 bg-body-tertiary">

                <main className="form-signin m-auto">

                    <h1 className="h3 mb-3 fw-normal">Please Upload Documents</h1>

                    <div>
                        <form>
                            <div className="p-2">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="adhar" placeholder="Aadhar Number" />
                                    <label htmlFor="aadhar">Aadhar Number</label>
                                </div>
                                <div>
                                    <input type="file" />
                                </div>
                            </div>

                            <div className="p-2">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="licenese" placeholder="License Number" />
                                    <label htmlFor="licenese">Licenese Number</label>
                                </div>
                                <div>
                                    <input type="file" />
                                </div>
                            </div>

                            <button className="btn btn-primary w-100 py-2" type="submit">Save</button>
                        

                        </form>
                    </div>

                </main>



            </div>
        </>
    )
}

export default UploadDocumnets;
