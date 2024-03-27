import { ethers } from "hardhat";
const hre = require("hardhat");
async function main() {
    const MiTokenERC20 = await ethers.getContractFactory("Money");
    const miToken = await MiTokenERC20.deploy("MyMoney", "MY", ethers.utils.parseEther("1000000"));


    await hre.run("verify:verify", {
      contract: '../contracts/fase2/Money.sol',
      address: miToken.address,
      constructorArguments: ["MyMoney", "MY", ethers.utils.parseEther("1000000")]
    });


    
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });