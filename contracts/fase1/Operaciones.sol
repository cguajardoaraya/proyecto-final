// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Operaciones {
    // Variable para almacenar el dato
    string public dato;

    // Evento que se emite cuando se actualiza el dato
    event DatoActualizado(string nuevoDato);

    // Función para actualizar el dato
    function actualizarDato(string memory _nuevoDato) public {
        dato = _nuevoDato;
        emit DatoActualizado(_nuevoDato);
    }

    // Función para obtener el dato almacenado
    function obtenerDato() public view returns (string memory) {
        return dato;
    }
}