import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ManageUsers() {
    const userContract = useSelector(state => state.addContract.userContract);

    async function getAllCustomers() {
        try {
            const data = await userContract.customerList();
            let customers = [];
            let j = 0;
            data.map((customer) => {
                let obj = {
                    key: j++,
                    name: customer.name,
                    email: customer.email,
                    ETHAddress: customer.ETHAddress
                }
                customers.push(obj);
            })
            return customers;
        } catch (error) {
            toast.error("An error occured");
        }
    }

    async function getAllFarmers() {
        try {
            const data = await userContract.farmerList();
            let farmers = [];
            let j = 0;
            data.map((farmer) => {
                let obj = {
                    key: j++,
                    name: farmer.name,
                    email: farmer.email,
                    ETHAddress: farmer.ETHAddress
                }
                farmers.push(obj);
            })
            return farmers;
        } catch (error) {
            toast.error("An error occured");
        }
    }

    return { getAllCustomers, getAllFarmers }
}

export default ManageUsers;