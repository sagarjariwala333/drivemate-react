import axios from "axios"
import { API_ENDPOINT } from "../assets/environment"
import { getToken } from "./authservice";

export const Signup = async (data) => {

    console.log("dbservice 1");

    const URL = API_ENDPOINT + "User/SignUp"
    console.log(URL);
    let { profilepic, aadhar, licence } = data;

    const formData = new FormData();
    formData.append("profilepic", profilepic);

    (aadhar !== null) && formData.append("aadhar", aadhar);
    (licence !== null) && formData.append("licence", licence);

    formData.append("text", JSON.stringify(data));

    try {
        console.log("dbservice 1");
        const res = await axios.post(URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        //console.log(res);
        return res;
    }
    catch (err) {
        console.log("dbservice 2");
        console.log("Error", err);
        throw err
    }
}

export const signIn=(data)=>{
    const url = API_ENDPOINT + "User/SignIn";
    try
    {
        const res = axios.post(url,data);
        return res;
    }
    catch(error)
    {
        throw error
    }
}

export const insertTrip=(data,token)=>{
    const url = API_ENDPOINT + "Trip/InserTrip";
    try
    {
        const res = axios.post(url,data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const viewRemainTrips=(token)=>{
    const url = API_ENDPOINT + "Trip/GetRemainTrips";
    try
    {
        const res = axios.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const driverAcceptTrip=(token,data)=>{
    const url = API_ENDPOINT + "Trip/AcceptTrip";
    try
    {
        const res = axios.post(url,data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const viewBookedTrips=(token)=>{
    const url = API_ENDPOINT + "Trip/ViewBookedTrip";
    try
    {
        const res = axios.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const customerViewBookedTrips=(token)=>{
    const url = API_ENDPOINT + "Trip/CustomerViewBookedTrip";
    try
    {
        const res = axios.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const startTrip= async (id)=>{
    const token = await getToken();
    const url = API_ENDPOINT + "Trip/StartTrip";
    try
    {
        const res = axios.post(url,{id},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const endTrip= async (id)=>{
    const token = await getToken();
    const url = API_ENDPOINT + "Trip/EndTrip";
    try
    {
        const res = axios.post(url,{id},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const getAllTrips= async ()=>{
    const token = await getToken();
    const url = API_ENDPOINT + "Admin/GetAllTrips";
    try
    {
        const res = axios.get(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const getTripById= async (id)=>{
    const token = await getToken();
    const url = API_ENDPOINT + "Admin/GetTripById";
    try
    {
        const res = axios.post(url,{id},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const getAllUsers= async (role)=>{
    const token = await getToken();
    const url = API_ENDPOINT + "Admin/GetAllUsers";
    try
    {
        const res = axios.post(url,role,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}

export const getUserById = async (id)=>{
    const token = await getToken();

    let url;

    if(id)
    {
        url = API_ENDPOINT + "Admin/GetUserById";
    }
    else
    {
        url = API_ENDPOINT + "Admin/GetUserByIdProfile"
    }
    try
    {
        const res = axios.post(url,{id},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res;
    }
    catch(err)
    {
        throw err;
    }
}
