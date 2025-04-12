const XS = 320;
const SM = 480;
const MD = 768;
const LG = 1024;
const XL = 1440;

export const media = {
  xs: { maxWidth: XS },
  xsToMd: { minWidth: XS, maxWidth: LG - 1 },
  xsToSm: { minWidth: XS, maxWidth: MD - 1 },
  // equivalent to hidemob class
  xsToLg: { minWidth: XS, maxWidth: LG - 1 },
  xsToLgV2: { minWidth: XS, maxWidth: LG },
  smToMd: { minWidth: SM, maxWidth: MD - 1 },
  gtXs: { minWidth: XS + 1, maxWidth: SM - 1 },
  sm: { maxWidth: SM },
  gtSm: { minWidth: SM + 1, maxWidth: MD - 1 },
  md: { maxWidth: MD },
  minMd: { minWidth: MD },
  gtMd: { minWidth: MD + 1, maxWidth: LG - 1 },
  lg: { maxWidth: LG },
  gtLg: { minWidth: LG + 1 },
  lgToXl: { minWidth: LG + 1, maxWidth: XL },
  smToMdV2: { minWidth: SM, maxWidth: LG - 1 },

  // for edge cases only breakpoints
  maxWidthTabs: { minWidth: LG + 1, maxWidth: 1110 },
  maxWidth1439: { maxWidth: 1439 },
  maxWidth1200: { maxWidth: 1200 },
  lgTo1200: { minWidth: LG + 1, maxWidth: 1200 },
  minWidth1200: { minWidth: 1200 },
};
