import { type PlaygroundProps } from '../components/Playground';

const api: PlaygroundProps[] = [
  {
    method: 'allNetworkGetAddress',

    presupposes: [
      {
        title: 'Batch Get Address',
        value: {
          bundle: [
            {
              network: 'btc',
              path: "m/44'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'tbtc',
              path: "m/44'/1'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/44'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/49'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/84'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'bch',
              path: "m/44'/145'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'doge',
              path: "m/44'/3'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'doge',
              path: "m/48'/3'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'bitcoin',
              path: "m/44'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'testnet',
              path: "m/44'/1'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'litecoin',
              path: "m/44'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'bcash',
              path: "m/44'/145'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'dogecoin',
              path: "m/44'/3'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'evm',
              path: "m/44'/60'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'evm',
              path: "m/44'/60'/0'/0/0",
              chainName: '20',
              showOnUnionKey: false,
            },

            {
              network: 'algo',
              path: "m/44'/283'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'aptos',
              path: "m/44'/637'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'ada',
              path: "m/1852'/1815'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'cfx',
              path: "m/44'/503'/0'/0/0",
              chainName: '1029',
              showOnUnionKey: false,
            },
            {
              network: 'cfx',
              path: "m/44'/503'/0'/0/0",
              chainName: '1',
              showOnUnionKey: false,
            },
            {
              network: 'cosmos',
              path: "m/44'/118'/0'/0/0",
              prefix: 'cosmos',
              showOnUnionKey: false,
            },
            {
              network: 'cosmos',
              path: "m/44'/118'/0'/0/0",
              prefix: 'osmosis',
              showOnUnionKey: false,
            },
            {
              network: 'dynex',
              path: "m/44'/29538'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'fil',
              path: "m/44'/461'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'kaspa',
              path: "m/44'/111111'/0'/0/0",
              prefix: 'kaspa',
              showOnUnionKey: false,
            },
            {
              network: 'near',
              path: "m/44'/397'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'nexa',
              path: "m/44'/29223'/0'/0/0",
              prefix: 'nexa',
              showOnUnionKey: false,
            },
            {
              network: 'nervos',
              path: "m/44'/309'/0'/0/0",
              chainName: 'ckb',
              showOnUnionKey: false,
            },
            {
              network: 'dot',
              path: "m/44'/354'/0'/0'/0'",
              prefix: '0',
              chainName: 'polkadot',
              showOnUnionKey: false,
            },
            {
              network: 'xrp',
              path: "m/44'/144'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'sol',
              path: "m/44'/501'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'stc',
              path: "m/44'/101010'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'sui',
              path: "m/44'/784'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'benfen',
              path: "m/44'/728'/0'/0'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'tron',
              path: "m/44'/195'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'scdo',
              path: "m/44'/541'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ton',
              path: "m/44'/607'/0'",
              showOnUnionKey: false,
              // https://github.com/trustwallet/wallet-core/issues/3387
              // ton chain has a different derivation path
            },
            {
              network: 'alph',
              path: "m/44'/1234'/0'/0/0",
              includePublicKey: true,
              showOnUnionKey: false,
              group: 0,
            },
            {
              network: 'nostr',
              path: "m/44'/1237'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'neo',
              path: "m/44'/888'/0'/0/0",
              showOnUnionKey: false,
            },
          ],
        },
      },
      {
        title: 'Batch ADA Get Address',
        value: {
          bundle: [
            {
              network: 'ada',
              path: "m/1852'/1815'/0'",
              showOnUnionKey: false,
            },
            {
              network: 'dynex',
              path: "m/44'/29538'/0'/0'/0'",
              showOnUnionKey: false,
            },
          ],
        },
      },
      {
        title: 'Batch Bitcoin Variant Get Address',
        value: {
          bundle: [
            {
              network: 'btc',
              path: "m/44'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'tbtc',
              path: "m/44'/1'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/44'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'bch',
              path: "m/44'/145'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'doge',
              path: "m/44'/3'/0'/0/0",
              showOnUnionKey: false,
            },

            {
              network: 'btc',
              chainName: 'bitcoin',
              path: "m/44'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'testnet',
              path: "m/44'/1'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'litecoin',
              path: "m/44'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'bcash',
              path: "m/44'/145'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              chainName: 'dogecoin',
              path: "m/44'/3'/0'/0/0",
              showOnUnionKey: false,
            },
          ],
        },
      },
      {
        title: 'Batch Bitcoin Get Address',
        value: {
          bundle: [
            ...Array.from({ length: 10 }, (_, i) => ({
              network: 'btc',
              path: `m/44'/0'/0'/0/${i}`,
              showOnUnionKey: false,
            })),
          ],
        },
      },
      {
        title: 'Batch Ethereum Get Address',
        value: {
          bundle: [
            ...Array.from({ length: 10 }, (_, i) => ({
              network: 'evm',
              path: `m/44'/60'/0'/0/${i}`,
              showOnUnionKey: false,
            })),
          ],
        },
      },
      {
        title: 'Batch Get Address For Soft Gen Xpub',
        value: {
          bundle: [
            {
              network: 'btc',
              path: "m/44'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              path: "m/48'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              path: "m/49'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              path: "m/84'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'btc',
              path: "m/86'/0'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/44'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/48'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/49'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'ltc',
              path: "m/84'/2'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'doge',
              path: "m/44'/3'/0'/0/0",
              showOnUnionKey: false,
            },
            {
              network: 'doge',
              path: "m/48'/3'/0'/0/0",
              showOnUnionKey: false,
            },
          ],
        },
      },
    ],
  },
];

api.push({
  method: 'allNetworkGetAddressByLoop',
  description: 'Get addresses with real-time callback for each generated address',
  presupposes: api[0].presupposes?.map(item => ({
    ...item,
  })),
});

export default api;
