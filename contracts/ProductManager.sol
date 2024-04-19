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
        string category;
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
        string category,
        uint price,
        string description,
        string timeofApplied
    );

    modifier checkCertificate(string memory id) {
        bool isCropPresent = false;
        bool isOwner = false;
        bool isMidApproved = false;
        bool isCertificateApproved = false;

        for (uint i = 0; i < crops.length; i++) {
            if (
                keccak256(abi.encodePacked(crops[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                isCropPresent = true;
            }
            if (crops[i].ETHAddress == msg.sender) {
                isOwner = true;
            }
        }

        for (uint j = 0; j < midterm.length; j++) {
            if (
                keccak256(abi.encodePacked(midterm[j].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                if (midterm[j].isApproved) {
                    isMidApproved = true;
                }
            }
        }

        for (uint k = 0; k < certificates.length; k++) {
            if (
                keccak256(abi.encodePacked(certificates[k].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                if (certificates[k].isApproved) {
                    isCertificateApproved = true;
                }
            }
        }

        require(isCropPresent, "Crop ID not found");
        require(isOwner, "Sender is not the owner of the crop");
        require(isMidApproved, "MidTerm is not approved");
        require(!isCertificateApproved, "Certificate is already approved");
        _;
    }

    function reqCertificate(
        string memory id,
        string memory quality,
        uint quantity,
        string memory category,
        uint price,
        string memory description,
        string memory timeofApplied
    ) public checkCertificate(id) {
        string memory name = getCropNameById(id);
        certificates.push(
            Certificate(
                id,
                name,
                msg.sender,
                quality,
                quantity,
                category,
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
            category,
            price,
            description,
            timeofApplied
        );
    }

    function getCertificate() public view returns (Certificate[] memory) {
        return certificates;
    }

    modifier cropApprovalStatus(string memory id) {
        bool isApproved = false;

        for (uint i = 0; i < crops.length; i++) {
            if (
                keccak256(abi.encodePacked(crops[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                isApproved = crops[i].isApproved;
                break;
            }
        }

        require(!isApproved, "Crop is already approved");
        _;
    }

    modifier midtermApprovalStatus(string memory id) {
        bool isApproved = false;

        for (uint i = 0; i < midterm.length; i++) {
            if (keccak256(abi.encodePacked(midterm[i].id)) ==keccak256(abi.encodePacked(id))
            ) {
                isApproved = midterm[i].isApproved;
                break;
            }
        }

        require(!isApproved, "MidTerm is already approved");
        _;
    }

    modifier certificateApprovalStatus(string memory id) {
        bool isApproved = false;

        for (uint i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encodePacked(certificates[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                isApproved = certificates[i].isApproved;
                break;
            }
        }

        require(!isApproved, "Certificate is already approved");
        _;
    }

    struct Product {
        string id;
        string productName;
        string category;
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
    }

    Product[] products;

    event approveCropEvent(string id, string time);
    event approveMidTermEvent(string id, string time);
    event approveCertificateEvent(string id, string time);

    function approveCrop(
        string memory id,
        string memory time
    ) public cropApprovalStatus(id) {
        for (uint i = 0; i < crops.length; i++) {
            if (
                keccak256(abi.encodePacked(crops[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                crops[i].isApproved = true;
                crops[i].timeofVerified = time;
                emit approveCropEvent(id, time);
            }
        }
    }

    function approveMidTerm(
        string memory id,
        string memory time
    ) public midtermApprovalStatus(id) {
        for (uint i = 0; i < midterm.length; i++) {
            if (
                keccak256(abi.encodePacked(midterm[i].id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                midterm[i].isApproved = true;
                midterm[i].timeofVerified = time;
                emit approveMidTermEvent(id, time);
            }
        }
    }

    function approveCertificate(
        string memory id,
        string memory time
    ) public certificateApprovalStatus(id) {
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
                        certificates[i].category,
                        certificates[i].price,
                        certificates[i].quantity,
                        certificates[i].ETHAddress,
                        certificates[i].description,
                        cropRegistered,
                        cropApproved,
                        midTermRegistered,
                        midTermApproved,
                        certificates[i].timeofApplied,
                        time
                    )
                );
                break;
            }
        }
        emit approveCertificateEvent(id, time);
    }

    function fetchProduct() public view returns (Product[] memory) {
        return products;
    }

    struct Item {
        string id;
        uint reduce;
    }

    function reduceQuantity(Item[] calldata items) public {
        for (uint i = 0; i < products.length; i++) {
            for (uint j=0;j<items.length;j++){
                if(keccak256(abi.encodePacked(items[j].id)) == keccak256(abi.encodePacked(products[i].id))){
                    products[i].quantity = products[i].quantity - items[j].reduce;
                }
            }
        }
    }
}
