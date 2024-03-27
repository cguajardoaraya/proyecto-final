// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT1155 is ERC1155, Ownable {
    constructor(string memory _uri) ERC1155(_uri) {}

    function mint(address _to, uint256 _id, uint256 _amount, bytes memory _data) external onlyOwner {
        _mint(_to, _id, _amount, _data);
    }

    function mintBatch(address _to, uint256[] memory _ids, uint256[] memory _amounts, bytes memory _data) external onlyOwner {
        _mintBatch(_to, _ids, _amounts, _data);
    }
}