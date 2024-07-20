import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    // [localhost.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),

  },
})