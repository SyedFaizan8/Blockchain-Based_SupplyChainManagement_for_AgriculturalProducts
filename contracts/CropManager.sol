// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.2 <0.9.0;

contract CropManager {
    
    struct Crop {
        string id;
        string cropName;
        string category;
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

    function cropRegister(string memory id,string memory cropName,string memory category,string memory location,string memory acre,string memory months,uint yieldperacre,string memory timeofApplied) public {
        crops.push(Crop(id,cropName,category,msg.sender,location,acre,months,yieldperacre,timeofApplied,timeofApplied,false,false));
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
        address ETHAddress;
        string progress;
        string months;
        string timeofApplied;
        string timeofVerified;
        bool isApproved;
        bool isDisapproved;
    }

    MidTerm[] midterm;
    event midTermRegisterEvent(string id);

    function midTermRegister(string memory id,string memory progress,string memory months,string memory timeofApplied) public  {
        string memory name = getCropNameById(id);
        midterm.push(MidTerm(id,name,msg.sender,progress,months,timeofApplied,timeofApplied,false,false));
        emit midTermRegisterEvent(id);
    }

    function getMidTerm() view public returns(MidTerm[] memory){
        return midterm;
    }
}