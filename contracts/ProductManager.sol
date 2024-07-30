// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

import "./CropManager.sol";

contract ProductManager is CropManager {
    struct Certificate {
        string id;
        string cropName;
        address ETHAddress;
        string quality;
        uint quantity;
        uint price;
        string description;
        string timeofApplied;
        string timeofVerified;
        bool isApproved;
        bool isDisapproved;
    }

    Certificate[] certificates;
    event reqCertificateEvent(
        string id,
        string quality,
        uint quantity,
        uint price,
        string description,
        string timeofApplied
    );

    function reqCertificate(
        string memory id,
        string memory quality,
        uint quantity,
        uint price,
        string memory description,
        string memory timeofApplied
    ) public {
        string memory name = getCropNameById(id);
        certificates.push(
            Certificate(
                id,
                name,
                msg.sender,
                quality,
                quantity,
                price,
                description,
                timeofApplied,
                timeofApplied,
                false,
                false
            )
        );
        emit reqCertificateEvent(
            id,
            quality,
            quantity,
            price,
            description,
            timeofApplied
        );
    }

    function getCertificate() public view returns (Certificate[] memory) {
        return certificates;
    }

    struct Product {
        string id;
        string productName;
        uint price;
        uint quantity;
        address ETHAddress;
        string description;
        string cropRegistered;
        string cropApproved;
        string midTermRegistered;
        string midTermApproved;
        string certRegistered;
        string certApproved;
        bool show;
    }

    Product[] products;

    event CropEvent(string id, string time);
    event MidTermEvent(string id, string time);
    event CertificateEvent(string id, string time);

    function approveCrop(string memory id, string memory time) public {
        for (uint i = 0; i < crops.length; i++) {
            if (
                keccak256(abi.encodePacked(crops[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                crops[i].isApproved = true;
                crops[i].timeofVerified = time;
                emit CropEvent(id, time);
            }
        }
    }

    function rejectCrop(string memory id, string memory time) public {
        for (uint i = 0; i < crops.length; i++) {
            if (
                keccak256(abi.encodePacked(crops[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                crops[i].isDisapproved = true;
                crops[i].isApproved = false;
                crops[i].timeofVerified = time;
                emit CropEvent(id, time);
            }
        }
    }

    function rejectFarmerCrop(address ETHAddress, string memory time) public {
        for (uint i = 0; i < crops.length; i++) {
            if (crops[i].ETHAddress == ETHAddress && !crops[i].isApproved) {
                crops[i].isDisapproved = true;
                crops[i].isApproved = false;
                crops[i].timeofVerified = time;
            }
        }
    }

    function approveMidTerm(string memory id, string memory time) public {
        for (uint i = 0; i < midterm.length; i++) {
            if (
                keccak256(abi.encodePacked(midterm[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                midterm[i].isApproved = true;
                midterm[i].timeofVerified = time;
                emit MidTermEvent(id, time);
            }
        }
    }

    function rejectMidTerm(string memory id, string memory time) public {
        for (uint i = 0; i < midterm.length; i++) {
            if (
                keccak256(abi.encodePacked(midterm[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                midterm[i].isDisapproved = true;
                midterm[i].isApproved = false;
                midterm[i].timeofVerified = time;
                emit MidTermEvent(id, time);
            }
        }
    }

    function rejectFarmerMidTerm(
        address ETHAddress,
        string memory time
    ) public {
        for (uint i = 0; i < midterm.length; i++) {
            if (midterm[i].ETHAddress == ETHAddress && !midterm[i].isApproved) {
                midterm[i].isDisapproved = true;
                midterm[i].isApproved = false;
                midterm[i].timeofVerified = time;
            }
        }
    }

    function approveCertificate(string memory id, string memory time) public {
        for (uint i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encodePacked(certificates[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                certificates[i].isApproved = true;
                certificates[i].timeofVerified = time;

                string memory cropRegistered;
                string memory cropApproved;
                string memory midTermRegistered;
                string memory midTermApproved;

                for (uint j = 0; j < crops.length; j++) {
                    if (
                        keccak256(abi.encodePacked(crops[j].id)) ==
                        keccak256(abi.encodePacked(id))
                    ) {
                        cropRegistered = crops[j].timeofApplied;
                        cropApproved = crops[j].timeofVerified;
                        break;
                    }
                }

                for (uint k = 0; k < midterm.length; k++) {
                    if (
                        keccak256(abi.encodePacked(midterm[k].id)) ==
                        keccak256(abi.encodePacked(id))
                    ) {
                        midTermRegistered = midterm[k].timeofApplied;
                        midTermApproved = midterm[k].timeofVerified;
                        break;
                    }
                }
                products.push(
                    Product(
                        id,
                        certificates[i].cropName,
                        certificates[i].price,
                        certificates[i].quantity,
                        certificates[i].ETHAddress,
                        certificates[i].description,
                        cropRegistered,
                        cropApproved,
                        midTermRegistered,
                        midTermApproved,
                        certificates[i].timeofApplied,
                        time,
                        true
                    )
                );
                break;
            }
        }
        emit CertificateEvent(id, time);
    }

    function rejectCertificate(string memory id, string memory time) public {
        for (uint i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encodePacked(certificates[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                certificates[i].isDisapproved = true;
                certificates[i].isApproved = false;
                certificates[i].timeofVerified = time;
                emit CertificateEvent(id, time);
                break;
            }
        }
    }

    function rejectFarmerCertificate(address ETHAddress, string memory time) public {
        for (uint i=0;i<certificates.length;i++){
            if(certificates[i].ETHAddress == ETHAddress && !certificates[i].isApproved){
                certificates[i].isDisapproved = true;
                certificates[i].isApproved = false;
                certificates[i].timeofVerified = time;
            }
        }
    }

    function fetchProduct() public view returns (Product[] memory) {
        return products;
    }

    function hideProduct(address ETHAddress) public {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].ETHAddress == ETHAddress) {
                products[i].show = false;
                break;
            }
        }
    }

    struct Item {
        string id;
        uint reduce;
    }

    function reduceQuantity(Item[] calldata items) public {
        for (uint i = 0; i < products.length; i++) {
            for (uint j = 0; j < items.length; j++) {
                if (
                    keccak256(abi.encodePacked(items[j].id)) ==
                    keccak256(abi.encodePacked(products[i].id))
                ) {
                    products[i].quantity =
                        products[i].quantity -
                        items[j].reduce;
                }
            }
        }
    }
}
