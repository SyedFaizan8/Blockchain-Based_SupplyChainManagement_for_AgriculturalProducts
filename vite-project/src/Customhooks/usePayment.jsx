import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import selectId from "./generateId";
import FinalProduct from "./finalProducts";

function usePayment() {
    const generateIdentifier = selectId();
    const userContract = useSelector(state => state.addContract.userContract);
    const { reduceQuantity } = FinalProduct();

    async function orderProduct(items, totalAmount) {
        try {
            const identifiers = [];
            const data = await userContract.getAllOrderIds();

            if (data.length !== 0) {
                data.map((element) => {
                    identifiers.push(element);
                });
            }
            totalAmount = BigInt(totalAmount * 1e18);
            const oid = generateIdentifier(identifiers);
            const time = new Date().toLocaleString();
            let orders = [];

            let reduceQuantity = [];

            items.map((item) => {
                const price = BigInt(item.price * 1e18);
                orders.push({
                    status: 0,
                    productId: item.id,
                    productName: item.productName,
                    farmer: item.ETHAddress,
                    totalPrice: price * BigInt(item.requantity),
                    totalQuantity: item.requantity,
                    timeofPicked: time,
                    timeofDelivered: time,
                });

                reduceQuantity.push({ id: item.id, reduce: item.requantity });
            });

            await userContract.orderProduct(orders, time, totalAmount, oid, { value: totalAmount });
            userContract.once("orderProductEvent", async () => {
                toast.success("Payment success");
            });

            await reduceQuantity(reduceQuantity);

        } catch (error) {
            console.log(error);
        }
    }

    async function getOrders() {
        const orders = await userContract.getOrders();
        let orderList = [];
        let j = 0;
        for (let i = 0; i < orders.length; i++) {
            const items = orders[i].items;
            items.map((item) => {
                let status = "NOthin";
                if (item.status == 0) {
                    status = "Ordered"
                } else if (item.status == 1) {
                    status = "Picked"
                } else {
                    status = "Delivered"
                }
                let obj = {
                    key: j++,
                    orderId: orders[i].orderId,
                    timeofOrdered: orders[i].timeofOrdered,
                    customer: orders[i].customer,
                    totalAmount: orders[i].totalAmount,
                    status: status,
                    productId: item.productId,
                    productName: item.productName,
                    farmer: item.farmer,
                    price: item.totalPrice,
                    quantity: item.totalQuantity,
                    timeofPicked: item.timeofPicked,
                    timeofDelivered: item.timeofDelivered,
                }
                orderList.push(obj);
            })
        }
        return orderList;
    }

    async function orderPicked(productId, orderId) {
        const time = new Date().toLocaleString();
        await userContract.orderPicked(productId, orderId, time);
        userContract.once("orderPickedEvent", () => {
            toast.success("Order Picked")
        });
    }

    async function productDelivered(productId, orderId) {
        const time = new Date().toLocaleString();
        await userContract.productDelivered(productId, orderId, time);
        userContract.once("productDeliveredEvent", () => {
            toast.success("Order Delivered")
        });
    }


    return { orderProduct, getOrders, orderPicked, productDelivered };
}

export default usePayment;