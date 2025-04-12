import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

import cryptoRandomString from 'crypto-random-string';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

const buildHash = cryptoRandomString({ length: 10 });

export default defineConfig({
  plugins: [
    pluginReact(),  
    pluginNodePolyfill(),
    pluginEslint({
      eslintPluginOptions: {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        failOnWarning: process.env.NODE_AENV !== 'development',
        failOnError: process.env.NODE_ENV !== 'development',
      },
    }),],
  html: {
    template: './public/index.html',
    meta:
      process.env.REACT_APP_ENVIRONMENT !== 'production'
        ? {
            robots: 'noindex, nofollow',
          }
        : undefined,
  },
});
