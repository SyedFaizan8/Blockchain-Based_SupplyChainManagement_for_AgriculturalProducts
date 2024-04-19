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
                    const userContract = new Contract("0x8ccB35Ae18580E5D19F6703c53D3c9216459c2df", userAbi, signer);
                    const productContract = new Contract("0xD4489e328E87618417B5c472E79D87C6C2026703", productAbi, signer);
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