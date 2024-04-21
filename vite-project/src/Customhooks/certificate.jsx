import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Certificate() {
    const productContract = useSelector(state => state.addContract.productContract);

    async function reqCertificate(id, quality, quantity, category, price, description) {
        try {
            const parsedPrice = parseFloat(price);
            if (isNaN(parsedPrice) || parsedPrice <= 0) {
                throw new Error("Invalid price value");
            }

            const ETHPRICE = BigInt(parsedPrice * 1e18);
            const date = new Date();
            const timeofApplied = date.toLocaleString();
            await productContract.reqCertificate(id, quality, quantity, category, ETHPRICE, description, timeofApplied);
            productContract.once("reqCertificateEvent", () => {
                toast.success(`Your request of issue for Certificate has submitted successfully`);
            });
        } catch (error) {
            toast.error("An error occured")
        }
    }

    async function getCertificate() {
        const certificateList = await productContract.getCertificate();
        let certList = [];
        certificateList.map((certificate) => {
            certList.push({
                id: certificate.id,
                cropName: certificate.cropName,
                ETHAddress: certificate.ETHAddress,
                quality: certificate.quality,
                quantity: certificate.quantity,
                category: certificate.category,
                price: Number(certificate.price) / 1e18,
                description: certificate.description,
                timeofApplied: certificate.timeofApplied,
                timeofVerified: certificate.timeofVerified,
                isApproved: certificate.isApproved,
                isDisapproved: certificate.isDisapproved
            });
        })
        return certList;
    }

    return { reqCertificate, getCertificate };
}

export default Certificate;