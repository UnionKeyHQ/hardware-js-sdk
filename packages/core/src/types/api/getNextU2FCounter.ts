import type { NextU2FCounter } from '@unionkeyhq/hd-transport';
import type { CommonParams, Response } from '../params';

export declare function getNextU2FCounter(
  connectId?: string,
  params?: CommonParams
): Response<NextU2FCounter>;
