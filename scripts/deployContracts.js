const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist')

const BASE_URI = 'ipfs://QmRYbcYhfhmvJDdPaXjazxTzQnumRJj4Fg9MJPcqkJ27F7/'
const proxyRegistryAddressGoerli = '0xAB43bA48c9edF4C2C4bB01237348D1D7B28ef168'
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {
  // Calculate merkle root from the whitelist array
  const leafNode = whitelist.map(addr => keccak256(addr))
  const merkleTree = new MerkleTree(leafNode, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const ethBLOCKIES = await hre.ethers.getContractFactory('ethBLOCKIE')
  const ethBLOCKIE = await ethBLOCKIES.deploy(BASE_URI, root, proxyRegistryAddressGoerli)

  await ethBLOCKIE.deployed()

  console.log('ethBLOCKIE deployed to: ', ethBLOCKIE.address)
  // ethBLOCKIES goerli address: 0x8cB18Fd417c8CcA256D227B594e0a2E20947B272
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })