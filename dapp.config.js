const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
    title: "ethBLOCKIES // Dapp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus neque, non dignissim ipsum. Quisque ac elit fringilla, sollicitudin diam id, dictum velit. Praesent volutpat urna mauris, eget auctor risus tristique fringilla.",
    contractAddress: '0x45c53A0B7fdFe6115c6D9C6590d33EC48E1FABd0'
}

const onboardOptions = {
    dappId: process.env.NEXT_PUBLIC_DAPP_ID,
    networkId: 5, // Görli Testnet
  darkMode: true,
  walletSelect: {
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'ethBLOCKIES // Dapp'
      },
      {
        walletName: 'fortmatic',
        apiKey: FORTMATIC_KEY,
        preferred: true
      },
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis', preferred: true },
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'ethBLOCKIES // Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }