import { SetBusy } from '@onekeyfe/hd-transport';
import { BaseMethod } from '../BaseMethod';

export default class DeviceSetBusy extends BaseMethod<SetBusy> {
  init() {
    this.useDevicePassphraseState = false;
  }

  async run() {
    const res = await this.device.commands.typedCall('SetBusy', 'Success');

    return Promise.resolve(res.message);
  }
}
