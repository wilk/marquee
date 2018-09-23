import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'marquee',
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
