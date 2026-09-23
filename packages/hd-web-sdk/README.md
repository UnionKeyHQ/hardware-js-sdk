# `@unionkeyhq/hd-web-sdk`

`@unionkeyhq/hd-web-sdk` is a browser implementation of hardware-sdk that creates an iframe and communicates with transport through the iframe to avoid cross-domain issues.

## Installation

Install library as npm module:

```javascript
npm install @unionkeyhq/hd-web-sdk
```

or

```javascript
yarn add @unionkeyhq/hd-web-sdk
```

## Initialization

```javascript
import { HardwareSDK } from '@unionkeyhq/hd-web-sdk';

function init() {
  HardwareSDK.init({
    debug: false,
    connectSrc: 'https://jssdk.unionkey.io/'
  });
}
```

## Docs

Documentation is available [hardware-js-sdk](https://developer.unionkey.io/connect-to-hardware/hardware-sdk/start)
