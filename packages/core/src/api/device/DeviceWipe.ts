import { BaseMethod } from '../BaseMethod';

import type { WipeDevice } from '@unionkeyhq/hd-transport';

export default class DeviceWipe extends BaseMethod<WipeDevice> {
  init() {
    this.useDevicePassphraseState = false;
  }

  async run() {
    const res = await this.device.commands.typedCall('WipeDevice', 'Success');

    return Promise.resolve(res.message);
  }
}
