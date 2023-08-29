import React from "react";
import { Route } from "react-router-dom";
import CustomerHome from "../Containers/Customer/home";

const CustomerRouting = () => {
    return (
        <Route path="/customer/" Component={CustomerHome} />
    )
}

export default CustomerRouting;