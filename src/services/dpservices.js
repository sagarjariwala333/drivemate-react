import axios from "axios"
import { API_ENDPOINT } from "../assets/environment"

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
        const res = axios.post(url,{
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
