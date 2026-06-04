import type { CoreApi, LowLevelCoreApi } from '@unionkeyfe/hd-core';

interface ISdkImportOptions {
  useCommonSdk?: boolean;
}

export const importSdk = async (options?: ISdkImportOptions) => {
  if (options?.useCommonSdk) {
    return (await import('@unionkeyfe/hd-common-connect-sdk')).default as unknown as CoreApi;
  }
  return (await import('@unionkeyfe/hd-web-sdk')).default.HardwareWebSdk as unknown as CoreApi;
};

export const importTopLevelSdk = async (options?: ISdkImportOptions) => {
  if (options?.useCommonSdk) {
    return (await import('@unionkeyfe/hd-common-connect-sdk')).default as unknown as CoreApi;
  }
  return (await import('@unionkeyfe/hd-web-sdk')).default.HardwareSDKTopLevel as unknown as CoreApi;
};

export const importLowLevelSDK = async () =>
  (await import('@unionkeyfe/hd-web-sdk')).default.HardwareSDKLowLevel as unknown as LowLevelCoreApi;
