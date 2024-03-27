
# PROYECTO FINAL

Fase 1: Desarrollar un Smart Contract de Introducción y Lectura de Datos

En esta fase, se desarrolla un contrato inteligente básico que permite almacenar y recuperar datos en la cadena de bloques. El contrato consta de dos funciones principales: setInformacion para introducir nueva información en la cadena de bloques y getInformacion para leer la información almacenada. Este contrato puede servir como una introducción al desarrollo de contratos inteligentes y proporciona una base para proyectos más complejos.

tx: https://sepolia.etherscan.io/tx/0x80b908035c999d0f69e8bec4c5d0d6ac30c835ac0418d824db5f37966c048142

address :https://sepolia.etherscan.io/address/0x45c3f35ee4c26debb67385c35ee566b1818baabf


Fase 2: Desarrollar y Desplegar una Criptomoneda ERC-20 y un Contrato de ICO

En esta fase, se desarrolla un contrato inteligente para una criptomoneda basada en el estándar ERC-20. Este contrato permite la emisión de nuevos tokens y la transferencia de tokens entre direcciones. Además, se desarrolla un contrato de oferta inicial de monedas (ICO) que permite a los participantes intercambiar tokens nativos de Ethereum (ETH) por tokens de la criptomoneda ERC-20 recién creada. El contrato de ICO garantiza que los fondos ETH se transfieran al propietario de la ICO y que los tokens ERC-20 se distribuyan correctamente a los participantes.

tx: https://sepolia.etherscan.io/tx/0x80b908035c999d0f69e8bec4c5d0d6ac30c835ac0418d824db5f37966c048142

address :https://sepolia.etherscan.io/address/0x45c3f35ee4c26debb67385c35ee566b1818baabf


Fase 3: Desarrollar y Desplegar Contratos Base de NFTs (ERC-721 y ERC-1155)

En esta fase, se desarrollan dos contratos inteligentes para la creación y gestión de tokens no fungibles (NFTs) en la cadena de bloques Ethereum. El primero es un contrato ERC-721, que permite la creación de NFTs únicos y su transferencia entre direcciones. El segundo es un contrato ERC-1155, que permite la creación de NFTs fungibles y no fungibles en lotes. Ambos contratos proporcionan una forma estándar y segura de crear y gestionar activos digitales únicos en la cadena de bloques.

tx:https://sepolia.etherscan.io/tx/0xe932464f9c17185039d693fe5fc0a251c9f2879ef6705df69975e39119f72b52
address :https://sepolia.etherscan.io/address/0xb8fddb1815d1e1c7c262b2fff4ab3f2bc0f634fb

tx:https://sepolia.etherscan.io/tx/0xe231fb9094292871e725640d68cb23c5c6fe46580e4f5276a66391b2e9242cdd
address: https://sepolia.etherscan.io/address/0x72464fd19754f777c84541287ae39b44bd367aa9


Fase 4: Desarrollar y desplegar un Smart Contract que permita comprar NFTs, del Smart Contract ERC-721 o ERC-1155 de la Fase 3, pagando con el token ERC-20 creado en la Fase 2

Nombre del caso de uso: Plataforma coleccionables

Descripción:
Una plataforma que permite a los usuarios coleccionar y comerciar activos digitales, como cartas coleccionables y artículos de deporte, utilizando los estándares ERC-721 y ERC-1155. Los usuarios pueden comprar, vender e intercambiar estos activos.

Actores:

    Usuarios: Usuarios que interactúan con la plataforma y coleccionables.
    Desarrolladores del coleccion: Dueño de las coleccion.

Funcionalidades:

    Compra y venta de activos:
        Los usuarios pueden comprar activos digitales únicos (ERC-721) directamente desde la plataforma utilizando monedas  o tokens ERC-20.
        Pueden comprar activos digitales fungibles (ERC-1155) a través de la plataforma o en mercados externos utilizando tokens ERC-20.

    Intercambio de activos:
        Los usuarios pueden intercambiar activos digitales con otros usuarios dentro de la plataforma.
        También pueden realizar intercambios en mercados externos utilizando funcionalidades de interoperabilidad.


    Propiedad y autenticidad:
        Los tokens ERC-721 garantizan la propiedad y autenticidad únicas de los activos digitales, lo que permite a los usuarios demostrar su posesión exclusiva de elementos raros.
        Los tokens ERC-1155 permiten la flexibilidad en la emisión de múltiples instancias de activos fungibles, lo que facilita la distribución y gestión de artículos del juego.

    Economía del juego:
        Los activos digitales pueden ser utilizados como moneda, permitiendo a los usuarios realizar transacciones en el mundo virtual.
        

Beneficios:

    Interoperabilidad: Los estándares ERC-721 y ERC-1155 permiten la interoperabilidad de los activos digitales entre diferentes juegos y plataformas.
    Propiedad y escasez: Los usuarios pueden poseer y comercializar activos digitales de manera segura gracias a la tecnología blockchain, lo que proporciona autenticidad y escasez.
    Economía del coleccionable: Los activos digitales pueden impulsar una economía interna dentro del de la coleccion, ofreciendo a los dueños nuevas oportunidades de monetización y compromiso del usuario.



tx:https://sepolia.etherscan.io/tx/0xd49c68fba398d683d13d62b731e70bfe19d3c76827c5e2afd9037fa006d971d1
address :https://sepolia.etherscan.io/address/0xfC54d85C718466558F47441a019a8000a274757C



tx:https://sepolia.etherscan.io/tx/0xd49c68fba398d683d13d62b731e70bfe19d3c76827c5e2afd9037fa006d971d1
address :https://sepolia.etherscan.io/address/0xfC54d85C718466558F47441a019a8000a274757C



tx:https://sepolia.etherscan.io/tx/0x71b3a1d509d40f179784cd92b3ab4c3fa96b58771291f2d3c95953689367f89d
address :https://sepolia.etherscan.io/address/0x320d07AD9BE2918B951d4737aF14ad7165D447D6




problemas encontrados : se logra verificar de forma programaticamente al desplegarlos, lo cual no se ve reflejado en el scan, se realiza de forma manual generando errores.



## GUIA DE INICIO

#### instalacion
```sh
npm install
```

#### Deployment
```sh
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/deploy.ts --network DESIRED_NETWORK
```


#### Example with Goerli Network
```sh
npx hardhat run ./scripts/deploy.ts --network ethereum_goerli_testnet
npx hardhat verify --network ethereum_goerli_testnet 0x...

```

#### Lista script deploy
```sh
deploy.ts
deploy2.ts
deploy3.ts
deploy4.ts

```
