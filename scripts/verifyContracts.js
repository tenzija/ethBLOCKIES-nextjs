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

  await hre.run("verify:verify", {
    address: '0x8AA6A202E5591d44D7cC5de573565FaBAe18e5C7',
    constructorArguments: [
        BASE_URI,
        root,
        proxyRegistryAddressGoerli
    ]
  })
  
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })