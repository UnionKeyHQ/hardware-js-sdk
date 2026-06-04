import type { LowLevelCoreApi } from '../../lowLevelInject';
import type { LowlevelTransportSharedPlugin } from '@unionkeyfe/hd-transport';
import type { ConnectSettings } from '../settings';

export declare function init(
  settings: Partial<ConnectSettings>,
  lowLevelApi?: LowLevelCoreApi,
  pulgin?: LowlevelTransportSharedPlugin
): Promise<boolean>;

export declare function updateSettings(settings: Partial<ConnectSettings>): Promise<boolean>;
