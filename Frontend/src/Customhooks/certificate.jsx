import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Certificate() {
    const productContract = useSelector(state => state.addContract.productContract);

    async function modifier(id) {
        let obj = {
            accept: true,
            msg: "No errors"
        }
        let midTermList = await productContract.getMidTerm();
        let filterMidterm = midTermList.find((mid) => mid.id == id);

        const certificateList = await getCertificate();
        let filterCertificate = certificateList.find((certificate) => certificate.id == id);

        if (filterMidterm == undefined) {
            obj.accept = false;
            obj.msg = "Invalid crop Id"
        } else if (filterMidterm.isDisapproved) {
            obj.accept = false;
            obj.msg = "Your crop Rejected"
        } else if (filterCertificate == undefined) {
            if (filterMidterm.isApproved) {
                obj.accept = true;
                obj.msg = "You can apply"
            } else {
                obj.accept = false;
                obj.msg = "Your Midterm is not Approved"
            }
        } else if (filterCertificate.isDisapproved) {
            obj.accept = false;
            obj.msg = "Certificate Rejected"
        } else if (filterCertificate.isApproved) {
            obj.accept = false;
            obj.msg = "Already Approved"
        } else if (filterCertificate != undefined) {
            obj.accept = false;
            obj.msg = "Your Application already submited"
        }

        return obj;
    }

    async function reqCertificate(id, quality, quantity, price, description) {

        modifier(id).then(async (response) => {
            if (response.accept) {
                try {
                    const parsedPrice = parseFloat(price);
                    if (isNaN(parsedPrice) || parsedPrice <= 0) {
                        throw new Error("Invalid price value");
                    }

                    const ETHPRICE = BigInt(parsedPrice * 1e18);
                    const date = new Date();
                    const timeofApplied = date.toLocaleString();
                    await productContract.reqCertificate(id, quality, quantity, ETHPRICE, description, timeofApplied);
                    productContract.once("reqCertificateEvent", () => {
                        toast.success(`Your request of issue for Certificate has submitted successfully`);
                    });
                } catch (error) {
                    toast.error("An error occured")
                }
            } else {
                toast.error(response.msg)
            }
        })

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
                price: Number(certificate.price) / 1e18,
                description: certificate.description,
                timeofApplied: certificate.timeofApplied,
                timeofVerified: certificate.timeofVerified,
                isApproved: certificate.isApproved,
                isDisapproved: certificate.isDisapproved
            });
        })
        return certList.reverse();
    }

    return { reqCertificate, getCertificate };
}

export default Certificate;