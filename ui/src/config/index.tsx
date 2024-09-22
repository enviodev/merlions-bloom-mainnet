import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum  } from '@reown/appkit/networks'

export const flowTestnet = {
  id: "eip155:545" as const,
  chainId: 545,
  chainNamespace: 'eip155' as const,
  name: "flow testnet",
  currency: "Flow",
  explorerUrl: "https://evm-testnet.flowscan.io",
  rpcUrl: "https://testnet.evm.nodes.onflow.org",  
};

export const flowMainnet = {
  id: "eip155:747" as const,
  chainId: 747,
  chainNamespace: 'eip155' as const,
  name: "flow mainnet",
  currency: "Flow",
  explorerUrl: "https://evm.flowscan.io/",
  rpcUrl: "https://mainnet.evm.nodes.onflow.org",  
};


// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, flowTestnet, flowMainnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig