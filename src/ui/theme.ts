import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';

import { roboto } from './font';
import { tokens } from './tokens';
import { media } from './media';
import { lightTheme } from './lightTheme';
import animations from './animations';

export const themeConfig = createTamagui({
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  defaultFont: 'roboto',
  fonts: {
    roboto,
    body: roboto,
  },
  themes: {
    light: lightTheme,
  },
  tokens,
  media,
  animations,
  disableSSR: true,
});
