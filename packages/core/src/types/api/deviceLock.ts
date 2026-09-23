import type { Success } from '@unionkeyhq/hd-transport';
import type { CommonParams, Response } from '../params';

export declare function deviceLock(connectId: string, params: CommonParams): Response<Success>;
