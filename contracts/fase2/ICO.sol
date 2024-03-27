// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract ICO {
    using SafeMath for uint256;

    address public tokenAddress;
    uint256 public tokenPrecio;
    address payable public beneficiario;
    uint256 public montoRecaudado;

    event TokensComprados(address comprador, uint256 cantidad, uint256 monto);

    constructor(address _tokenAddress, uint256 _tokenPrecio, address payable _beneficiario) {
        tokenAddress = _tokenAddress;
        tokenPrecio = _tokenPrecio;
        beneficiario = _beneficiario;
    }

    function comprarTokens() external payable {
        require(msg.value > 0, "Debes enviar ETH para comprar tokens");
        
        uint256 cantidadTokens = msg.value.mul(10**18).div(tokenPrecio); // Suponiendo que 1 token = 1 ETH / tokenPrecio
        require(IERC20(tokenAddress).balanceOf(address(this)) >= cantidadTokens, "Fondos insuficientes en la ICO");

        montoRecaudado = montoRecaudado.add(msg.value);
        IERC20(tokenAddress).transfer(msg.sender, cantidadTokens);

        emit TokensComprados(msg.sender, cantidadTokens, msg.value);
    }

    function retirarFondos() external {
        require(msg.sender == beneficiario, "Solo el beneficiario puede retirar los fondos");
        require(address(this).balance > 0, "No hay fondos para retirar");

        beneficiario.transfer(address(this).balance);
    }
}
