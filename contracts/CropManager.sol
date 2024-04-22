// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

contract CropManager {
    
    struct Crop {
        string id;
        string cropName;
        address ETHAddress;
        string location;
        string acre;
        string months;
        uint yieldperacre;
        string timeofApplied;
        string timeofVerified;
        bool isApproved;
        bool isDisapproved;
    }

    Crop[] crops;
    event cropRegisterEvent(string id);

    function cropRegister(string memory id,string memory cropName,string memory location,string memory acre,string memory months,uint yieldperacre,string memory timeofApplied) public {
        crops.push(Crop(id,cropName,msg.sender,location,acre,months,yieldperacre,timeofApplied,timeofApplied,false,false));
        emit cropRegisterEvent(id);
    }

    function getCrops() view public returns(Crop[] memory){
        return crops;
    }

    function getCropNameById(string memory _id) internal view returns (string memory) {
        for (uint i = 0; i < crops.length; i++) {
            if (keccak256(abi.encodePacked(crops[i].id)) == keccak256(abi.encodePacked(_id))) {
                return crops[i].cropName;
            }
        }
        revert("Crop with given id not found");
    }

    function getCropById(string memory id) internal view returns (bool) {
        for (uint i = 0; i < crops.length; i++) {
            if (keccak256(abi.encodePacked(crops[i].id)) == keccak256(abi.encodePacked(id))) {
                return true;
            }
        }
        return false;
    }

    function getAllCropIds() public view returns (string[] memory) {
        string[] memory cropIds = new string[](crops.length);
        for (uint256 i = 0; i < crops.length; i++) {
            cropIds[i] = crops[i].id;
        }
        return cropIds;
    }

    struct MidTerm {
        string id;
        string cropName;
        string progress;
        string months;
        string timeofApplied;
        string timeofVerified;
        bool isApproved;
        bool isDisapproved;
    }

    MidTerm[] midterm;
    event midTermRegisterEvent(string id);

    modifier checkMidtermRegistration(string memory id) {
        bool isCropPresent = false;
        bool isOwner = false;
        bool isCropApproved = false;
        bool isMidtermApproved = false;

        for (uint i = 0; i < crops.length; i++) {
            if (keccak256(abi.encodePacked(crops[i].id)) == keccak256(abi.encodePacked(id))) {
                isCropPresent = true;
                if (crops[i].isApproved) {
                    isCropApproved = true;
                    for(uint j=0;j<midterm.length;j++){
                        if (keccak256(abi.encodePacked(midterm[j].id)) == keccak256(abi.encodePacked(id))) {
                            if (midterm[j].isApproved) {
                                isMidtermApproved = true;
                            }
                        }
                    }
                }
                if (crops[i].ETHAddress == msg.sender) {
                    isOwner = true;
                }
                break;
            }
        }
        require(isCropPresent, "Crop ID not found");
        require(isOwner, "Sender is not the owner of the crop");
        require(isCropApproved, "Crop is not approved");
        require(!isMidtermApproved, "Midterm is already approved");
        _;
    }


    function midTermRegister(string memory id,string memory progress,string memory months,string memory timeofApplied) public checkMidtermRegistration(id) {
        string memory name = getCropNameById(id);
        midterm.push(MidTerm(id,name,progress,months,timeofApplied,timeofApplied,false,false));
        emit midTermRegisterEvent(id);
    }

    function getMidTerm() view public returns(MidTerm[] memory){
        return midterm;
    }
}
