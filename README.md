# ERC1155_NFT_COLLECTION
📕 Implementation of NFT Collections (ERC-1155 tokens) and NFT minting.

NFT collections are based on South Park characters (Kyle, Stan, Cartman and Kenny).

Address of deployed contract (rinkeby): 0x8A1f127e9c7dc43EdaB424a1b6819B80C365dd69

# Dependencies
Navigate to your project directory and run the following commands 1 by 1:
```bash
 npm init --yes
```
```bash
 npm install --save-dev hardhat
```
```bash
 npx hardhat
```
>Create a new empty hardhat.config.js
```bash
 npm install dotenv --save
```
```bash
npm install @openzeppelin/contracts
```
```bash
 npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0
```
```bash
  npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai
```

# QuickStart
1) Deploy the contract NFT_COLLECTION.sol to one of the networks (e.g. rinkeby) using Hardhat. To do that run in project directory: 
```bash
 npx hardhat --network rinkeby run scripts/deploy.js
```
2) Go to Etherscan and check contract's address
> P.s. don't forget to put your Private Key and Alchemy/Infura key in .env file (NEVER UPLOAD THEM TO GITHUB)


# Congratulations!
