require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0xd0a9f8bda6ef1aab447c6422fd5abcadaf145329f6e10c1bb3711c95a09b569a",
      ],
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
