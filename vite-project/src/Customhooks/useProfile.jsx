import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function useProfile() {
    const userContract = useSelector(state => state.addContract.userContract);

    async function fillDetails(profileData) {
        const pd = profileData;
        await userContract.fillDetails(pd.full_name,pd.contact,pd.house,pd.street,pd.pincode,pd.city,pd.state);
        userContract.once("fillDetailsEvent", () => {
            toast.success("User Profile updated successfully");
        });
    }

    async function getDetails() {
        const data = await userContract.getDetails();
        return data;
    }

    return { fillDetails, getDetails }
}

export default useProfile;