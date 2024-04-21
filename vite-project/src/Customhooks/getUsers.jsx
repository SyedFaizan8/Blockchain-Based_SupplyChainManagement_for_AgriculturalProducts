import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useGetusers = () => {
    const userContract = useSelector(state => state.addContract.userContract);
    const navigate = useNavigate();

    async function getCustomer(password) {
        try {
            const data = await userContract.getCustomer(password);
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    async function getFarmer(password) {
        try {
            const data = await userContract.getFarmer(password)
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/farmer");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    async function getAuthority(password) {
        try {
            const data = await userContract.getAuthority(password)
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/authority/crop-validation");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    async function getCourier(password) {
        try {
            const data = await userContract.getCourier(password)
            window.localStorage.setItem("userData", JSON.stringify({ name: data["name"], email: data["email"], role: data["role"] }));
            toast.success("Login success");
            navigate("/courier");
        } catch (error) {
            if (error.reason === null) {
                toast.error("An Error occured");
            } else {
                toast.error(error.reason);
            }
        }
    }

    return [getCustomer, getFarmer, getAuthority, getCourier];
}


export default useGetusers;