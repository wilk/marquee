import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-marquee',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
