const { expect } = require("chai");

let UserManager;

before(async function () {
  UserManager = await ethers.deployContract("UserManager");
});

describe("Users and Payment testing", function () {
  it("createCustomer", async function () {
    const eventPromise = new Promise((resolve, reject) => {
      UserManager.once("createCustomerEvent", (name, email, password, role) => {
        try {
          expect("customer").to.equal(role);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
    await UserManager.createCustomer("Devendra", "dev@gmail.com", "pass", "customer");
    await eventPromise;
  });

  it("createFarmer", async function () {
    const eventPromise = new Promise((resolve, reject) => {
      UserManager.once("createFarmerEvent", (name, email, password, role) => {
        try {
          expect("farmer").to.equal(role);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
    await UserManager.createFarmer("Devendra", "dev@gmail.com", "pass", "farmer");
    await eventPromise;
  });

  it("createAuthority", async function () {
    const eventPromise = new Promise((resolve, reject) => {
      UserManager.once("createAuthorityEvent", (name, email, password, role) => {
        try {
          expect("authority").to.equal(role);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
    await UserManager.createAuthority("Devendra", "dev@gmail.com", "pass", "authority");
    await eventPromise;
  });

  it("createCourier", async function () {
    const eventPromise = new Promise((resolve, reject) => {
      UserManager.once("createCourierEvent", (name, email, password, role) => {
        try {
          expect("courier").to.equal(role);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
    await UserManager.createCourier("Devendra", "dev@gmail.com", "pass", "courier");
    await eventPromise;
  });

  it("getCustomer", async function () {
    await UserManager.getCustomer("pass");
  });

  it("getFarmer", async function () {
    await UserManager.getFarmer("pass");
  });

  it("getAuthority", async function () {
    await UserManager.getAuthority("pass");
  });

  it("getCourier", async function () {
    await UserManager.getCourier("pass");
  });

  // Payment Contract

  it("orderProduct", async function () {
    const items = [
      {
        status: 0,
        productId: "123",
        productName: "Product 1",
        farmer: "0x02B9D37A7fe1140946AeAc61C123e91eE2Fa8518",
        totalPrice: 54000,
        totalQuantity: 1,
        timeofPicked: "time",
        timeofDelivered: "time",
      },
    ];
    const orderId = "ABC123";
    const timeofOrdered = "2022-04-12";
    const totalPrice = 5400000000000; 
    await UserManager.orderProduct(items, timeofOrdered, totalPrice, orderId, { value: totalPrice });
  });

  it("getAllOrderIds", async function () {
    await UserManager.getAllOrderIds();
  });

  it("orderPicked", async function () {
    await UserManager.orderPicked("PID", "OID", "time");
  });

  it("productDelivered", async function () {
    const eventPromise = new Promise((resolve, reject) => {
      try {
        UserManager.once("productDeliveredEvent", () => { });
        resolve();
      } catch (error) {
        reject(error);
      }
    })
    await UserManager.productDelivered("0x447185547f73d4b3780e28cE0B55Aaf4F0405469", "OID", "time");
    await eventPromise;
  });

  it("getOrders", async function () {
    await UserManager.getOrders();
  });

});