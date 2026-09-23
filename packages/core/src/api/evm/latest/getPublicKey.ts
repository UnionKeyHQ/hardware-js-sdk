import type {
  EthereumGetPublicKeyOneKey,
  MessageResponse,
  TypedCall,
} from '@unionkeyhq/hd-transport';

export default async function ({
  typedCall,
  param,
}: {
  typedCall: TypedCall;
  param: EthereumGetPublicKeyOneKey;
}): Promise<MessageResponse<'EthereumPublicKeyOneKey'>> {
  return typedCall('EthereumGetPublicKeyOneKey', 'EthereumPublicKeyOneKey', {
    ...param,
  });
}
