// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const priceFeedAddress = "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526";
  const unsTokenAddress = "0xEcf99aB23C11ddc6520252105308C251001AEfBB";

  // We get the contract to deploy
  const UnsIco = await hre.ethers.getContractFactory("UnsIco");
  const unsIco = await UnsIco.deploy(unsTokenAddress, priceFeedAddress);

  await unsIco.deployed();

  console.log("UnsIco deployed to:", unsIco.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
