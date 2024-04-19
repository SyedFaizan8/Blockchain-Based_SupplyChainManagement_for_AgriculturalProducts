import { useSelector } from "react-redux";
import selecctId from "./generateId";
import { toast } from "react-toastify";

const useProduct = () => {
    const productContract = useSelector(state => state.addContract.productContract);
    const generateIdentifier = selecctId();

    async function productRegister(name, desc, price, category) {
        try {
            const identifiers = [];
            const data = await productContract.getAllProductIds();
            if (data.length !== 0) {
                data.map((element) => {
                    identifiers.push(element);
                });
            }
            const id = generateIdentifier(identifiers);
            await productContract.createProduct(id, name, price, desc, category);
            productContract.once("createProductEvent", (id) => {
                toast.success(`Your product registered successfully of Product ID ${id}`);
            });
        } catch (e) {
            toast.error(e);
        }
    }

    async function getProducts() {
        const productList = await productContract.getProducts();
        let products = [];
        productList.map((element) => {
            let product = {
                id: element.id,
                name: element.name,
                price: element.price,
                desc: element.desc,
                category: element.category,
            }
            products.push(product);
        });
        return products;
    }

    return { productRegister, getProducts };
}

export default useProduct;