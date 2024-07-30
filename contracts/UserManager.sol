// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

import "./PaymentContract.sol";

contract UserManager is PaymentContract {
    
    // USERS FUNCTIONS AND EVENTS
    struct Customer {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    struct Details{
        address ETHAddress;
        string FullName;
        uint contact;
        string house;
        string street;
        uint pincode;
        string city;
        string state;
    }

    mapping (address => Details) details;
    Customer[] customers;
    event createCustomerEvent(string name,string email,string password,string role);
    event deleteCustomerEvent();
    event fillDetailsEvent();

    function fillDetails(string memory name,uint contact,string memory house,string memory street,uint pincode,string memory city,string memory state) public {
        details[msg.sender].ETHAddress = msg.sender;
        details[msg.sender].FullName = name;
        details[msg.sender].contact = contact;
        details[msg.sender].house = house;
        details[msg.sender].street = street;
        details[msg.sender].pincode = pincode;
        details[msg.sender].city = city;
        details[msg.sender].state = state;
        emit fillDetailsEvent();
    }  

    function getDetails() public view returns(Details memory){
        return details[msg.sender];
    }

    // CUSTOMER 
    
    function createCustomer(string memory name,string memory email,string memory password,string memory role) public {
        bool isNotExist = true;
        for (uint i=0;i<customers.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(customers[i].ETHAddress))){
                isNotExist = false;
                break;
            }
        }
        require(isNotExist,"customer already exist!");
        customers.push(Customer(name,email,password,role,msg.sender));
        emit createCustomerEvent(name,email,password,role);
    }

    function getCustomer(string memory password) public view returns (Customer memory) {
        bool isExist = false;
        Customer memory customer;
        for (uint i=0;i<customers.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(customers[i].ETHAddress))){
                isExist = true;
                customer = customers[i];
                break;
            }
        }
        require(isExist,"Customer doesn't exist!");
        require(keccak256(abi.encodePacked(customer.password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return customer;
    }

    function customerList() view public returns(Customer[] memory) {
        return customers;
    }

    function deleteCustomer(address ETHAddress) public {
        for (uint i=0;i<customers.length;i++){
            if (customers[i].ETHAddress == ETHAddress) {
                for (uint j = i; j < customers.length - 1; j++) {
                    customers[j] = customers[j + 1];
                }
                customers.pop();
                emit deleteCustomerEvent();
                break; 
            }
        }
    }

    // FARMERS FUNCTIONS AND EVENTS (Similarly for Authorities)

    struct Farmer {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    Farmer[] farmers;
    event createFarmerEvent(string name,string email,string password,string role);
    event deleteFarmerEvent();

    function createFarmer(string memory name,string memory email,string memory password,string memory role) public {
        bool isNotExist = true;
        for (uint i=0;i<farmers.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(farmers[i].ETHAddress))){
                isNotExist = false;
                break;
            }
        }
        require(isNotExist,"Farmer already exist!");
        farmers.push(Farmer(name,email,password,role,msg.sender));
        emit createFarmerEvent(name,email,password,role);
    }

    function getFarmer(string memory password) public view returns (Farmer memory) {
        bool isExist = false;
        Farmer memory farmer;
        for (uint i=0;i<farmers.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(farmers[i].ETHAddress))){
                isExist = true;
                farmer = farmers[i];
                break;
            }
        }
        require(isExist,"Farmer doesn't exist!");
        require(keccak256(abi.encodePacked(farmer.password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return farmer;
    }

    function farmerList() view public returns(Farmer[] memory) {
        return farmers;
    }

    function deleteFarmer(address ETHAddress) public {
        for (uint i=0;i<farmers.length;i++){
            if (farmers[i].ETHAddress == ETHAddress) {
                for (uint j = i; j < farmers.length - 1; j++) {
                    farmers[j] = farmers[j + 1];
                }
                farmers.pop();
                emit deleteFarmerEvent();
                break; 
            }
        }
    }

    // AUTHORITIES FUNCTIONS AND EVENTS

    struct Authority {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    Authority[] authority;
    event createAuthorityEvent(string name,string email,string password,string role);

    function createAuthority(string memory name,string memory email,string memory password,string memory role) public {
        bool isNotExist = true;
        for (uint i=0;i<authority.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(authority[i].ETHAddress))){
                isNotExist = false;
                break;
            }
        }
        require(isNotExist,"Authority already exist!");
        authority.push(Authority(name,email,password,role,msg.sender));
        emit createAuthorityEvent(name,email,password,role);
    }

    function getAuthority(string memory password) public view returns (Authority memory) {
        bool isExist = false;
        Authority memory authorityData;
        for (uint i=0;i<authority.length;i++){
            if(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(authority[i].ETHAddress))){
                isExist = true;
                authorityData = authority[i];
                break;
            }
        }
        require(isExist,"Authority doesn't exist!");
        require(keccak256(abi.encodePacked(authorityData.password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return authorityData;
    }

    // COURIER FUNCTIONS AND EVENTS

    struct Courier {
        string name;
        string email;
        string password;
        string role;
        address ETHAddress;
    }

    mapping(address => Courier) couriers;
    event createCourierEvent(string name,string email,string password,string role);

    function createCourier(string memory name,string memory email,string memory password,string memory role) public {
        require(keccak256(abi.encodePacked(couriers[msg.sender].ETHAddress)) != keccak256(abi.encodePacked(msg.sender)),"Authority already exist!");
        couriers[msg.sender] = Courier(name,email,password,role,msg.sender);
        emit createCourierEvent(name, email, password, role);
    }

    function getCourier(string memory password) public view returns (Courier memory) {
        require(keccak256(abi.encodePacked(couriers[msg.sender].ETHAddress)) == keccak256(abi.encodePacked(msg.sender)),"Courier Not exist!");
        require(keccak256(abi.encodePacked(couriers[msg.sender].password)) == keccak256(abi.encodePacked(password)),"Wrong password,Please Try Again!");
        return couriers[msg.sender];
    }
}