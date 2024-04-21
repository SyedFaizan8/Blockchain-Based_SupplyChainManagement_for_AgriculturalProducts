// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

contract PaymentContract {
    enum OrderStatus { Ordered, Picked, Delivered }

    struct Item{
        OrderStatus status;
        string productId;
        string productName;
        address farmer;
        uint totalPrice;
        uint totalQuantity;
        string timeofPicked;
        string timeofDelivered;
    }

    struct Order{
        Item[] items;
        string orderId;
        string timeofOrdered;
        address customer;
        uint totalAmount;
    }

    mapping (address => Order) orders;
    Order[] orderList;
    event orderProductEvent();
    event productDeliveredEvent();
    event orderPickedEvent();

    function orderProduct(Item[] memory items,string memory time,uint totalAmount,string memory orderId) public payable {
        require(msg.value == totalAmount,"Payment failed");
        orders[msg.sender].timeofOrdered = time;
        orders[msg.sender].customer = msg.sender;
        orders[msg.sender].totalAmount = totalAmount ;
        orders[msg.sender].orderId = orderId;

         for(uint i = 0; i < items.length; i++) {
            orders[msg.sender].items.push(items[i]);
            orders[msg.sender].items[i].status = OrderStatus.Ordered;
        }
        orderList.push(orders[msg.sender]);

        for (uint i=0;i<items.length;i++){
            payable (items[i].farmer).transfer(items[i].totalPrice);
        }
        emit orderProductEvent();
    }

    function getAllOrderIds() public view returns (string[] memory) {
        string[] memory orderIds = new string[](orderList.length);
        for (uint256 i = 0; i < orderList.length; i++) {
            orderIds[i] = orderList[i].orderId;
        }
        return orderIds;
    }

    function orderPicked( string memory pid, string memory oid, string memory time ) public {
        for (uint i = 0; i < orderList.length; i++) {
            if (keccak256(abi.encodePacked(orderList[i].orderId)) ==keccak256(abi.encodePacked(oid))) {
                for (uint j = 0; j < orderList[i].items.length; j++) {
                    if (keccak256(abi.encodePacked(orderList[i].items[j].productId)) == keccak256(abi.encodePacked(pid))) {
                        orderList[i].items[j].status = OrderStatus.Picked;
                        orderList[i].items[j].timeofPicked = time;
                        break;
                    }
                }
            }
        }
        emit orderPickedEvent();
    }

    function productDelivered(string memory pid,string memory oid,string memory time) public {
        for (uint i = 0; i < orderList.length; i++) {
            if (keccak256(abi.encodePacked(orderList[i].orderId)) == keccak256(abi.encodePacked(oid))) {
                for (uint j = 0; j < orderList[i].items.length; j++) {
                    if (keccak256(abi.encodePacked(orderList[i].items[j].productId)) == keccak256(abi.encodePacked(pid))) {
                        orderList[i].items[j].status = OrderStatus.Delivered;
                        orderList[i].items[j].timeofDelivered = time;
                        break;
                    }
                }
            }
        }
        emit productDeliveredEvent();
    }

    function getOrders() public view returns (Order[] memory) {
        return orderList;
    }

}