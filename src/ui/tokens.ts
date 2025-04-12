import { createTokens } from 'tamagui';

export const size = {
  $0: 0,
  '$0.1': 1,
  '$0.2': 2,
  '$0.3': 3,
  '$0.4': 4,
  '$0.5': 5,
  '$0.6': 6,
  '$0.7': 7,
  '$0.8': 8,
  '$0.9': 9,
  $1: 10,
  '$1.2': 12,
  '$1.4': 14,
  '$1.6': 16,
  '$1.8': 18,
  $2: 20,
  true: 20,
  '$2.2': 22,
  '$2.4': 24,
  '$2.6': 26,
  '$2.8': 28,
  $3: 30,
  '$3.2': 32,
  '$3.4': 34,
  '$3.6': 36,
  '$3.8': 38,
  $4: 40,
  '$4.5': 45,
  $5: 50,
  '$5.5': 55,
  $6: 60,
  '$6.5': 65,
  $7: 70,
  '$7.5': 75,
  $8: 80,
  '$8.5': 85,
  $9: 90,
  '$9.5': 95,
  $10: 100,
  $11: 110,
  $12: 120,
  $13: 130,
  $14: 140,
  $15: 150,
  $16: 160,
  $17: 170,
  $18: 180,
  $19: 190,
  $20: 200,
};

export const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

export const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
  $99: 99,
  $modal: 20,
  $inputBorderRadius: 7,
};

export const spaces = Object.entries(size).map(([k, v]) => {
  return [k, v] as const;
});

export const spacesNegative = spaces
  .slice(1)
  .map(([k, v]) => [`-${k.slice(1)}`, -v]);

export const space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as never;

export const tokens = createTokens({
  color: {},
  radius,
  zIndex,
  space,
  size,
});
