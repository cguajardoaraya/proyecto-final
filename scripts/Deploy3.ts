import {ethers} from "hardhat";
async function main() {
    const ERC721 = await ethers.getContractFactory("NFT721");
    const DataERC721 = await ERC721.deploy("Coleccion NFT", "CFF");
  
    console.log("ERC721 deployed to:", DataERC721.address);
  
    const ERC1155 = await ethers.getContractFactory("NFT1155");
    const DataERC1155 = await ERC1155.deploy("https://example.com/api/token/{id}.json");
  
    console.log("ColeccionablesDeportivosERC1155 deployed to:", DataERC1155.address);

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });