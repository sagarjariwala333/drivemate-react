import { toast } from "react-toastify";

export const login = (profile) => {
    let data = null;
    data = localStorage.getItem("profile")
    if (data === null) {
        localStorage.setItem("profile", JSON.stringify(profile));
        return true;
    }
    else
    {
        return false;
    }
}

export const autherize = () => {
    var data = null;
    data = localStorage.getItem("profile");
    return (data === null) ? false : true;
}

export const signout = async (navigate) => {
    await localStorage.removeItem("profile");
    await navigate("/login");
    await toast.success("Logged out successful");
}

export const getToken = async () => {
    var str = await localStorage.getItem("profile");
    var obj = await JSON.parse(str);
    return obj.token;
}