import type { Features } from '@unionkeyfe/hd-transport';
import type { CommonParams, Response } from '../params';

export declare function deviceUnlock(connectId: string, params?: CommonParams): Response<Features>;
