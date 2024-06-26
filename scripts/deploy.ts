// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

// scripts/deploy.js
async function main() {
  const Operaciones = await ethers.getContractFactory("Operaciones");
  const OperacionesDeploy = await Operaciones.deploy();
  console.log("Operaciones:", OperacionesDeploy.address);

    await hre.run("verify:verify", {
      
      address: OperacionesDeploy.address,
    });

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
