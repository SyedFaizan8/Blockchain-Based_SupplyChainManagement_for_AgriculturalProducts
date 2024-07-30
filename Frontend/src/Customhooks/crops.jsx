import { useSelector } from "react-redux";
import selecctId from "./generateId";
import { toast } from "react-toastify";

const useCrop = () => {
    const productContract = useSelector(state => state.addContract.productContract);
    const generateIdentifier = selecctId();

    async function cropRegister(cropname, category, area, cultivation, timeforharvest, yieldperacre) {
        try {
            const identifiers = [];
            const data = await productContract.getAllCropIds();
            if (data.length !== 0) {
                data.map((element) => {
                    identifiers.push(element);
                });
            }
            const id = generateIdentifier(identifiers);
            const date = new Date();
            const applied = date.toLocaleString();
            await productContract.cropRegister(id, cropname, category, area, cultivation, timeforharvest, yieldperacre, applied);
            productContract.once("cropRegisterEvent", (id) => {
                toast.success(`Your crop registered successfully of Crop ID ${id}`);
            });
        } catch (e) {
            toast.error(e);
        }
    }

    async function getCrops() {
        const cropList = await productContract.getCrops();
        let cropsArray = []
        cropList.map(item => {
            let obj = {
                id: item.id,
                cropName: item.cropName,
                ETHAddress: item.ETHAddress,
                location: item.location,
                acre: item.acre,
                months: item.months,
                yieldperacre: item.yieldperacre,
                timofApplied: item.timeofApplied,
                timeofVerified: item.timeofVerified,
                isApproved: item.isApproved,
                isDisapproved: item.isDisapproved
            }
            cropsArray.push(obj);
        });
        const reversedCropsArray = cropsArray.reverse();
        return reversedCropsArray;
    }

    return { cropRegister, getCrops };
}

export default useCrop;