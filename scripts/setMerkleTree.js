const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('ethBLOCKIE')
  const nftContract = await nftFactory.attach(
    '0x8cB18Fd417c8CcA256D227B594e0a2E20947B272' // Deployed contract address
  )

  // Re-calculate merkle root from the whitelist array.
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Set the re-calculated merkle root to the contract.
  await nftContract.setMerkleRoot(root)

  console.log('Whitelist root set to:', root)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })