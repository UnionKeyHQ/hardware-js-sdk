import type { EthereumGetAddressOneKey, MessageResponse, TypedCall } from '@unionkeyhq/hd-transport';

export default async function ({
  typedCall,
  param,
}: {
  typedCall: TypedCall;
  param: EthereumGetAddressOneKey;
}): Promise<MessageResponse<'EthereumAddressOneKey'>> {
  return typedCall('EthereumGetAddressOneKey', 'EthereumAddressOneKey', {
    ...param,
  });
}
