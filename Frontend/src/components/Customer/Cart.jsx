import React, { useEffect } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { adjustQuantity } from "../../store/cartSlice.js";
import usePayment from "../../Customhooks/usePayment.jsx";
import { removeItem } from "../../store/cartSlice.js";


// FIXME: Total Quantity

const Cart = () => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { orderProduct } = usePayment();

  const handleIncrementQuantity = (id) => {
    dispatch(adjustQuantity({ id, increment: true }));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(adjustQuantity({ id, increment: false }));
  };

  const handleDeleteCart =  (item) => {
    dispatch(removeItem(item));
  };

  const totalQuantity = items.reduce(
    (total, item) => total + Number(item.requantity),
    0
  );

  const totalAmount = items.reduce(
    (total, item) => total + Number(item.price) * Number(item.requantity),
    0
  );

  const handleCheckout = async () => {
    await orderProduct(items,totalAmount);
  }

  if (items.length === 0)
    return (
      <>
        <Header />
        <div className="h-3/4 overflow-y-hidden z-10 relative shadow-sm shadow-black">
          <img
            src="images/Products.jpg"
            alt="BG"
            className="z-10 absolute blur-sm"
          />
          <div className="absolute z-30 font-bold text-8xl flex w-full h-full justify-center items-center text-white">
            Your Cart is empty
          </div>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Header />

      <div className="min-h-52 overflow-y-hidden z-10 relative shadow-sm shadow-black">
        <img
          src="images/Products.jpg"
          alt="BG"
          className="z-10 absolute blur-sm"
        />
        <div className="absolute z-30 font-bold text-9xl flex w-full h-full justify-center items-center text-white">
          Cart
        </div>
      </div>

      <div className="h-fit w-full bg-[#D8F3DC] ">
        <div className="grid grid-cols-8 gap-4 px-10 p-6">
          <div className="col-span-6 bg-white rounded-lg">
            <div className="text-lg shadow-lg w-full drop-shadow-sm shadow-black-100 p-3 font-medium">
              Cart - {items.length} items
            </div>
            <div className="grid text-center font-medium text-xl grid-cols-6 px-2 py-3 border-b-2">
              <div className="col-span-3 ">Description</div>
              <div className="col-span-1 ">Quantity</div>
              <div className="col-span-1 ">Remove</div>
              <div className="col-span-1 ">Price</div>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-6 p-2 border-b-2 text-center place-items-center"
              >
                <div className="col-span-3 h-fit">
                  <div className="flex">
                    <img
                      src={`/crops/${item.productName}.jpg`}
                      alt="fruit"
                      className="w-2/5"
                    />
                    <div className="text-left mx-2">
                      <div>{item.productName}</div>
                      <div>{item.description}</div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-3">
                    <button
                      className="bg-[#D8F3DC] p-2 h-full w-full font-bold  rounded-l-sm"
                      onClick={() => handleDecrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <div className="flex h-full font-bold w-full place-content-center py-2 border-t-2 border-b-2 border-[#D8F3DC]">
                      {item.requantity}
                    </div>
                    <button
                      className="bg-[#D8F3DC] p-2 h-full w-full font-bold rounded-r-sm"
                      onClick={() => handleIncrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="col-span-1 gap-1 p-2">
                  <button
                    className=" text-xl bg-[#D8F3DC] rounded-md  p-2"
                    onClick={() => handleDeleteCart(item)}
                  >
                    <MdDelete />
                  </button>
                </div>

                <div className="p-2 text-start flex font-medium">
                  <div className="text-lg">{(item.price * item.requantity).toString()} ETH</div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2 bg-white rounded-lg h-fit pb-1">
            <div className="text-lg shadow-lg w-full drop-shadow-sm font-medium shadow-black-100 p-3">
              Summary
            </div>
            <div className="grid grid-cols-2 mt-2">
              <div className="text-md text-center  col-span-1">
                Total Quantity
              </div>
              <div className="text-md text-center col-span-1 ">
                {totalQuantity}
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 mb-2">
              <div className="text-md text-center font-semibold col-span-1 ">
                Total Amount
              </div>
              <div className="text-md text-center col-span-1 font-semibold ">
                {totalAmount}
              </div>
            </div>
            <div className="w-full mt-2 mb-2 px-5">
              <button className="w-full bg-[#D8F3DC] rounded-lg p-1 font-semibold" onClick={handleCheckout}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Cart;