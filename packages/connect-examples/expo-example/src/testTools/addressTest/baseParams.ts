export const INDEX_MARK = '$$INDEX$$';
export const CHANGE_MARK = '$$CHANGE$$';
export const ADDRESS_INDEX_MARK = '$$ADDRESS_INDEX$$';

export const baseParams = {
  cardanoGetAddress: {
    addressParameters: {
      addressType: 0,
      path: `m/1852'/1815'/${INDEX_MARK}'/0/0`,
      stakingPath: `m/1852'/1815'/${INDEX_MARK}'/2/0`,
      stakingKeyHash: undefined,
      paymentScriptHash: undefined,
      stakingScriptHash: undefined,
    },
    protocolMagic: 764824073,
    networkId: 1,
    derivationType: 1,
    address: '',
    showOnUnionKey: false,
    isCheck: false,
  },
  alephiumGetAddress: {
    path: `m/44'/1234'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
    group: 0,
  },
  algoGetAddress: {
    path: `m/44'/283'/0'/0'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  aptosGetAddress: {
    path: `m/44'/637'/${INDEX_MARK}'/0'/0'`,
    showOnUnionKey: false,
  },
  btcGetAddress: {
    path: `m/44'/0'/${INDEX_MARK}'/${CHANGE_MARK}/${ADDRESS_INDEX_MARK}`,
    coin: 'btc',
    showOnUnionKey: false,
  },
  nervosGetAddress: {
    path: `m/44'/309'/${INDEX_MARK}'/${CHANGE_MARK}/${ADDRESS_INDEX_MARK}`,
    network: 'ckb',
    showOnUnionKey: false,
  },
  confluxGetAddress: {
    path: `m/44'/503'/0'/0/${INDEX_MARK}`,
    chainId: 1029,
    showOnUnionKey: false,
  },
  cosmosGetAddress: {
    path: `m/44'/118'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
    hrp: 'cosmos',
  },
  dnxGetAddress: {
    path: `m/44'/29538'/0'/0'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  dnxGetTrackingKey: {
    path: `m/44'/29538'/${INDEX_MARK}'/0'/0'`,
  },
  evmGetAddress: {
    path: `m/44'/60'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
  },
  filecoinGetAddress: {
    path: `m/44'/461'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
  },
  kaspaGetAddress: {
    path: `m/44'/111111'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
    prefix: 'kaspa',
    scheme: 'schnorr',
  },
  nearGetAddress: {
    path: `m/44'/397'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  nemGetAddress: {
    path: `m/44'/43'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  nexaGetAddress: {
    path: `m/44'/29223'/${INDEX_MARK}'/0/0`,
    showOnUnionKey: false,
    prefix: 'nexa',
    scheme: 'schnorr',
  },
  polkadotGetAddress: {
    path: `m/44'/354'/${INDEX_MARK}'/0'/0'`,
    prefix: '0',
    network: 'polkadot',
    showOnUnionKey: false,
  },
  xrpGetAddress: {
    path: `m/44'/144'/${INDEX_MARK}'/0/0`,
    showOnUnionKey: false,
  },
  scdoGetAddress: {
    path: `m/44'/541'/${INDEX_MARK}'/0/0`,
    showOnUnionKey: false,
  },
  solGetAddress: {
    path: `m/44'/501'/${INDEX_MARK}'/0'`,
    showOnUnionKey: false,
  },
  starcoinGetAddress: {
    path: `m/44'/101010'/0'/0'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  stellarGetAddress: {
    path: `m/44'/148'/${INDEX_MARK}'`,
    showOnUnionKey: false,
  },
  suiGetAddress: {
    path: `m/44'/784'/${INDEX_MARK}'/0'/0'`,
    showOnUnionKey: false,
  },
  tonGetAddress: {
    path: `m/44'/607'/${INDEX_MARK}'`,
    showOnUnionKey: false,
    walletVersion: 3, // V4R2
    isBounceable: false,
    isTestnetOnly: false,
    workchain: 0, // BASECHAIN
    walletId: 698983191, // 默认walletId
  },
  tronGetAddress: {
    path: `m/44'/195'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
  },
  benfenGetAddress: {
    path: `m/44'/728'/${INDEX_MARK}'/0'/0'`,
    showOnUnionKey: false,
  },
  neoGetAddress: {
    path: `m/44'/888'/0'/0/${INDEX_MARK}`,
    showOnUnionKey: false,
  },
};
