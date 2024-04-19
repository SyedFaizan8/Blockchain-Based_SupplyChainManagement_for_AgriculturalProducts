const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UserModule", (m) => {
  const user = m.contract("UserManager");

  return { user };
});
