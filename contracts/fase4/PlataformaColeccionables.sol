// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PlataformaColeccionables is Ownable {
    IERC20 public tokenERC20;
    IERC721 public coleccionablesERC721;
    IERC1155 public coleccionablesERC1155;

    event ColeccionableComprado(address comprador, uint256 tokenId, uint256 amount, uint256 precio);

    constructor(address _tokenERC20, address _coleccionablesERC721, address _coleccionablesERC1155) {
        tokenERC20 = IERC20(_tokenERC20);
        coleccionablesERC721 = IERC721(_coleccionablesERC721);
        coleccionablesERC1155 = IERC1155(_coleccionablesERC1155);
    }

    function comprarColeccionableERC721(uint256 _tokenId, uint256 _precio) external {
        require(_precio > 0, "Precio debe ser mayor a cero");

        tokenERC20.transferFrom(msg.sender, address(this), _precio);
        coleccionablesERC721.safeTransferFrom(address(this), msg.sender, _tokenId);

        emit ColeccionableComprado(msg.sender, _tokenId, 0, _precio);
    }

    function comprarColeccionableERC1155(uint256 _id, uint256 _amount, uint256 _precio) external {
        require(_precio > 0, "Precio debe ser mayor a cero");

        tokenERC20.transferFrom(msg.sender, address(this), _precio);
        coleccionablesERC1155.safeTransferFrom(address(this), msg.sender, _id, _amount, "");

        emit ColeccionableComprado(msg.sender, _id, _amount, _precio);
    }

    function transferirPropiedad(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "DirecciOn invalida");
        transferOwnership(_newOwner);
    }
}
