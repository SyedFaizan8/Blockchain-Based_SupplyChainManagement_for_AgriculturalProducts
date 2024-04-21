import { useDispatch } from "react-redux";
import { ethers, Contract } from "ethers";
import { setWallet } from "../store/walletSlice";
import { abi as userAbi } from "../assets/UserManager.json";
import { abi as productAbi } from "../assets/ProductManager.json";
import { toast } from "react-toastify";

function useWallet() {
    const dispatch = useDispatch();
    window.ethereum.on("accountsChanged", connectWallet);

    function connectWallet() {
        return new Promise((resolve, reject) => {
            let signer = null;
            let provider;
            if (window.ethereum === null) {
                toast.warn("MetaMask not installed; using read-only defaults")
                provider = ethers.getDefaultProvider();
                reject();
            } else {
                provider = new ethers.BrowserProvider(window.ethereum)
                provider.getSigner().then((data) => {
                    signer = data;
                    const userContract = new Contract("0xFE97cD401C6215E3ce842e2F944090f234c1eAc4", userAbi, signer);
                    const productContract = new Contract("0xD5465153D795944Eed82643ae4a59458EF31C03e", productAbi, signer);
                    const address = signer.address;
                    dispatch(setWallet({ userContract, productContract, address, signer }));
                    resolve();
                })
            }
        });
    }

    return connectWallet;
}

export default useWallet;