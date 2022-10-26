const { expect } = require("chai");
const { ethers } = require("hardhat");
const priceFeedAddress = "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526";
const unsTokenAddress = "0xEcf99aB23C11ddc6520252105308C251001AEfBB";

describe("UnsIco", function () {
  it("Should return the totalSold once it's deployed", async function () {
    const UnsIco = await hre.ethers.getContractFactory("UnsIco");
    const unsIco = await UnsIco.deploy(unsTokenAddress, priceFeedAddress);
    await unsIco.deployed();

    expect(await unsIco.totalSold()).to.equal(0);
  });
});