require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
RINKEBY_PRIVATE_KEY=process.env.RINKEBY_PRIVATE_KEY;

//To deploy to ganache network first run:
//ganache-cli -f https://cloudflare-eth.com/  -m "clutch captain shoe salt awake harvest setup primary inmate ugly among become" -i 999 -u 0x9759A6Ac90977b93B58547b4A71c78317f391A28 -p 7545
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    rinkeby: {
      networkCheckTimeout: 10000,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    },
    ganache: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
    }
  }
};
