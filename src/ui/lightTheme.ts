import { colors } from './colors';

export const lightTheme = {
  mainColor: colors.landersGreen,
  ...colors,
  color: colors.tintedBlack,
  background: colors.offWhite,

  // component colors

  // Text component Colors
  inputDisabledColor: colors.midGray,
  inputErrorColor: colors.alertRed,
  inputBorderColor: '#dddfe2',
  headerColor: colors.tintedBlack,
  borderColor: '#DEDEDE',

  grey2: '#F8F8F8',
  greyLight: '#c5c5c5',
  grey3: '#666',
  greyText: '#40485A',
  grey4: '#818792',
  greyLight2: '#84817a',
  lightGreen: '#e5efe5',
  lightAlertRed: 'rgba(235, 87, 87, 0.05)',
  warningTextColor: '#6f4400',
  warningBg: '#fdf0d5',
  blue2: 'rgb(46, 127, 183)',
  darkerMainColor: '#73A833',
  grey10: '#EDEDED',

  // Button
  btnPrimaryBackgroundPress: 'rgba(128,175,70,0.5)',
  backgroundPress: 'hsl(0, 0%, 93.0%)',

  // modal
  modalBackgroundColor: '#fff',
};
