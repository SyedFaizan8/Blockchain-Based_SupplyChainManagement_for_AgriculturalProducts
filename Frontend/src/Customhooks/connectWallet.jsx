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
      let fsigner = null;
      let provider;
      let freeProvider;
      if (window.ethereum === null) {
        toast.warn("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
        reject();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        freeProvider = new ethers.JsonRpcProvider("http://localhost:7545");
        let users;
        let product;
        freeProvider
          .getSigner()
          .then((response) => {
            fsigner = response;
            users = new Contract(
              "GENERATED USER ADDRESS HERE",
              userAbi,
              fsigner
            );
            product = new Contract(
              "GENERATED PRODUCT ADDRESS HERE",
              productAbi,
              fsigner
            );
          })
          .then(() => {
            provider.getSigner().then((data) => {
              signer = data;
              const userContract = new Contract(
                "GENERATED USER ADDRESS HERE",
                userAbi,
                signer
              );
              const productContract = new Contract(
                "GENERATED PRODUCT ADDRESS HERE",
                productAbi,
                signer
              );
              const address = signer.address;
              dispatch(
                setWallet({
                  userContract,
                  productContract,
                  address,
                  users,
                  product,
                })
              );
              resolve();
            });
          });
      }
    });
  }

  return connectWallet;
}

export default useWallet;
