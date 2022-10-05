const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
    title: "ethBLOCKIES // Dapp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus neque, non dignissim ipsum. Quisque ac elit fringilla, sollicitudin diam id, dictum velit. Praesent volutpat urna mauris, eget auctor risus tristique fringilla. Morbi fermentum non risus et porta. Duis ac enim lectus. Sed ultricies odio sodales urna imperdiet consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque erat nulla, fringilla eget convallis eu, sagittis eget turpis. Nulla justo nisl, lobortis sit amet maximus sit amet, mollis sit amet mauris."
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