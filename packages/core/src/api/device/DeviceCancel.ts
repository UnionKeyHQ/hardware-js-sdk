import { BaseMethod } from '../BaseMethod';

import type { Cancel } from '@unionkeyfe/hd-transport';

export default class DeviceCancel extends BaseMethod<Cancel> {
  init() {
    this.useDevicePassphraseState = false;
  }

  async run() {
    const res = await this.device.commands.typedCall('Cancel', 'Success');

    return Promise.resolve(res.message);
  }
}
