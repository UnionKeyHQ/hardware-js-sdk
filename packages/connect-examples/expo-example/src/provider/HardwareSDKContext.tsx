import { createContext } from 'react';

import type { CoreApi } from '@unionkeyhq/hd-core';
import type { LowLevelCoreApi } from '@unionkeyhq/hd-core/dist/lowLevelInject';

export default createContext<{
  type: 'Bluetooth' | 'USB';
  sdk: CoreApi | undefined;
  lowLevelSDK: LowLevelCoreApi | undefined;
}>({
  sdk: undefined,
  type: 'USB',
  lowLevelSDK: undefined,
});
