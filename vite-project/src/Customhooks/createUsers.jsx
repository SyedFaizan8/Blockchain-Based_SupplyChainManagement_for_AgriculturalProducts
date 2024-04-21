import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCreate = () => {
    const userContract = useSelector(state => state.addContract.userContract);
    const navigate = useNavigate();

    async function createCustomer(role, name, email, password) {
        try {
            await userContract.createCustomer(name, email, password, role);
            userContract.once("createCustomerEvent", (name, email, password, role) => {
                window.localStorage.setItem("userData", JSON.stringify({ name, email, role }));
                toast.success(`Customer ${name} created successfully`);
                navigate("/");
            });
        } catch (error) {
            // This is entered if the status of the receipt is failure
            toast.error("An error occured");
        }
    }

    async function createFarmer(role, name, email, password) {
        await userContract.createFarmer(name, email, password, role);
        userContract.once("createFarmerEvent", (name, email, password, role) => {
            window.localStorage.setItem("userData", JSON.stringify({ name, email, password, role }));
            toast.success(`Farmer ${name} created successfully`);
            navigate(`/${role}`);
        });
    }

    async function createAuthority(role, name, email, password) {
        await userContract.createAuthority(name, email, password, role)
        userContract.once("createAuthorityEvent", (name, email, password, role) => {
            window.localStorage.setItem("userData", JSON.stringify({ name, email, password, role }));
            toast.success(`Authority ${name} created successfully`);
            navigate(`/${role}/crop-validation`);
        });
    }

    async function createcourier(role, name, email, password) {
        await userContract.createCourier(name, email, password, role)
        userContract.once("createCourierEvent", (name, email, password, role) => {
            window.localStorage.setItem("userData", JSON.stringify({ name, email, password, role }));
            toast.success(`Courier ${name} created successfully`);
            navigate(`/${role}`);
        });
    }

    return [createCustomer, createFarmer, createAuthority, createcourier];
}


export default useCreate;