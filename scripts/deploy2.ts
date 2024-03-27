import { ethers } from "hardhat";
async function main() {
    const MiTokenERC20 = await ethers.getContractFactory("Money");
    const miToken = await MiTokenERC20.deploy("MyMoney", "MY", ethers.utils.parseEther("1000000"));
  
    console.log("MiTokenERC20 deployed to:", miToken.address);
  
    const ICO = await ethers.getContractFactory("ICO");
    const ico = await ICO.deploy(miToken.address);
  
    console.log("ICO deployed to:", ico.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });