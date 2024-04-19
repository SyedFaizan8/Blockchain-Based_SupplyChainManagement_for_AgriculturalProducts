const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ProductModule", (m) => {
  const product = m.contract("ProductManager");

  return { product };
});
