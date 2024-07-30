# React configuration guide

> [!NOTE]
> run these below commands at ` .../Blockchain/vite-project ` directry.

#### Installing node modules

```
npm i
```

> [!CAUTION]
> Make sure to replace the deployed address in ` /vite-project/src/Customhooks/connectWallet.jsx ` at ` const userContract = new Contract("REPLACE WITH DEPLOYED userContract ADDRESS", abi, signer); ` and ` const productContract = new Contract("REPLACE WITH DEPLOYED productContract ADDRESS", abi, signer); `.

> [!IMPORTANT]
> Before running below command make sure that ganache is running in the background.

#### Run react

```
npm run dev
```