import { BaseMethod } from '../BaseMethod';

import type { LockDevice } from '@unionkeyfe/hd-transport';

export default class DeviceUnlock extends BaseMethod<LockDevice> {
  init() {
    this.useDevicePassphraseState = false;
  }

  async run() {
    return this.device.unlockDevice();
  }
}
