import { createFont } from 'tamagui';

export const roboto = createFont({
  family: 'Roboto',
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    md: 14,
    5: 16,
    lg: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
  },
  weight: {
    3: '300',
    4: '400',
    true: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  lineHeight: {
    true: 21,
  },
});
