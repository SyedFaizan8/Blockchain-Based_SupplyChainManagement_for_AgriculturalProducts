import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useCrop from "./crops";

function Midterm() {
    const productContract = useSelector(state => state.addContract.productContract);
    const { getCrops } = useCrop();

    async function modifier(id) {
        let obj = {
            accept: true,
            msg: "No errors"
        }

        const crops = await getCrops();
        let filterCrop = crops.find((crop) => crop.id == id);
        let midTermList = await productContract.getMidTerm();
        let filterMidterm = midTermList.find((mid) => mid.id == id);

        if (filterCrop == undefined) {
            obj.accept = false;
            obj.msg = "Invalid crop Id"
        } else if (filterCrop.isDisapproved) {
            obj.accept = false;
            obj.msg = "Your crop Rejected"
        } else if (!filterCrop.isApproved) {
            obj.accept = false;
            obj.msg = "crop is not approved";
        } else if (filterMidterm == undefined) {
            obj.accept = true;
            obj.msg = "You can apply"
        } else if (filterMidterm.isDisapproved) {
            obj.accept = false;
            obj.msg = "MidTerm Rejected"
        } else if (filterMidterm.isApproved) {
            obj.accept = false;
            obj.msg = "Already Approved"
        } else if (filterMidterm != undefined) {
            obj.accept = false;
            obj.msg = "Your Application already submited"
        }

        return obj;
    }

    async function midTermRegister(id, progress, months) {
        modifier(id).then(async (response) => {
            if (response.accept) {
                try {
                    const date = new Date();
                    const timeofApplied = date.toLocaleString();
                    await productContract.midTermRegister(id, progress, months, timeofApplied);
                    productContract.once("midTermRegisterEvent", (id) => {
                        toast.success("MidTerm Registration success");
                    })
                } catch (error) {
                    toast.error(error);
                }
            } else {
                toast.error(response.msg);
            }
        })
    }

    async function getMidTerms() {
        const midTermList = await productContract.getMidTerm();
        let listOfMid = [];
        midTermList.map((mid) => {
            listOfMid.push(
                {
                    id: mid.id,
                    cropName: mid.cropName,
                    ETHAddress: mid.ETHAddress,
                    progress: mid.progress,
                    months: mid.months,
                    timeofApplied: mid.timeofApplied,
                    timeofVerified: mid.timeofVerified,
                    isApproved: mid.isApproved,
                    isDisapproved: mid.isDisapproved
                }
            )
        })
        return listOfMid.reverse();
    }

    return { midTermRegister, getMidTerms }
}

export default Midterm;