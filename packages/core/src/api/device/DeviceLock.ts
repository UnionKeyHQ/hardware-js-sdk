import { BaseMethod } from '../BaseMethod';

import type { LockDevice } from '@unionkeyhq/hd-transport';

export default class DeviceLock extends BaseMethod<LockDevice> {
  init() {
    this.useDevicePassphraseState = false;
  }

  async run() {
    const res = await this.device.commands.typedCall('LockDevice', 'Success');

    return Promise.resolve(res.message);
  }
}
