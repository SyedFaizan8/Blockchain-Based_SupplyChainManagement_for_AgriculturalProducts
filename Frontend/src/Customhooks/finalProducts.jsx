import { useSelector } from "react-redux";

function FinalProduct() {

    const productContract = useSelector(state => state.addContract.productContract);
    const productCon = useSelector(state => state.addContract.product);

    async function fetchProducts() {
        const products = await productContract.fetchProduct();
        let Items = [];
        products.map((product) => {
            Items.push({
                id: product.id,
                productName: product.productName,
                price: Number(product.price) / 1e18,
                quantity: product.quantity,
                ETHAddress: product.ETHAddress,
                description: product.description,
                cropRegistered: product.cropRegistered,
                cropApproved: product.cropApproved,
                midTermRegistered: product.midTermRegistered,
                midTermApproved: product.midTermApproved,
                certRegistered: product.certRegistered,
                certApproved: product.certApproved,
                show:product.show
            });
        })
        return Items;
    }

    async function reduceQuantity(items) {
        await productCon.reduceQuantity(items);
    }

    return { fetchProducts, reduceQuantity };
}

export default FinalProduct;