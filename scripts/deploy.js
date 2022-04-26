const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
const ContractFactory = await ethers.getContractFactory("NFT_COLLECTION")
const [deployer] = await ethers.getSigners();
const ContractObj = await ContractFactory.deploy();

await ContractObj.deployed();

console.log("Contract deployed to address:", ContractObj.address);
console.log('Network used:', network.name);
console.log('Deployed from account: ',  await deployer.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
})