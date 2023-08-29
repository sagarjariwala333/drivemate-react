import React, { useEffect } from "react";
import { autherize } from "../services/authservice";

const ProtectedRouting=()=>{
    let isAuthenticated = false;
    useEffect(()=>{
       isAuthenticated = autherize();
    },[])
}

export default ProtectedRouting;