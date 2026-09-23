import type { StellarAddress as HardwareStellarAddress } from '@unionkeyhq/hd-transport';
import type { CommonParams, Response } from '../params';

export type StellarAddress = {
  path: string;
} & HardwareStellarAddress;

export type StellarGetAddressParams = {
  path: string | number[];
  showOnOneKey?: boolean;
};

export declare function stellarGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & StellarGetAddressParams
): Response<StellarAddress>;

export declare function stellarGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: StellarGetAddressParams[] }
): Response<Array<StellarAddress>>;
