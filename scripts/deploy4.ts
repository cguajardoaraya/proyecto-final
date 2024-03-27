import { ethers } from "hardhat";
const hre = require("hardhat");


// scripts/deploy.js
async function main() {
  const MiTokenERC20 = await ethers.getContractFactory("Money");
  const miToken = await MiTokenERC20.deploy("MyMoney", "MY", ethers.utils.parseEther("1000000"));

  console.log("MyMoney:", miToken.address);

  const ColeccionablesERC721 = await ethers.getContractFactory("ColeccionablesERC721");
  const coleccionablesERC721 = await ColeccionablesERC721.deploy("Coleccionables Deportivos ERC721", "COLECCTION");

  console.log("ColeccionablesDeportivosERC721 deployed to:", coleccionablesERC721.address);

  const ColeccionablesERC1155 = await ethers.getContractFactory("ColeccionablesERC1155");
  const coleccionablesERC1155 = await ColeccionablesERC1155.deploy("https://example.com/api/token/{id}.json");

  console.log("ColeccionablessERC1155 deployed to:", coleccionablesERC1155.address);

  const PlataformaColeccionablesDeportivos = await ethers.getContractFactory("PlataformaColeccionables");
  const plataforma = await PlataformaColeccionablesDeportivos.deploy(miToken.address, coleccionablesERC721.address, coleccionablesERC1155.address);

  console.log("ColeccionablessERC1155:", plataforma.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
