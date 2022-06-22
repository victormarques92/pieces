import { css } from 'styled-components';

export default {
  name: 'day',
  breakpoints: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
  },
  fontFamily: ['Montserrat, Arial, Helvetica, sans-serif'],
  colors: {
    black: '#000000',
    white: '#ffffff',
    grey: {
      1: '#e0e1e3',
      2: '#c7c9cb',
      3: '#6d6f72',
      4: '#5a5b5e',
      5: '#313133',
    },
    primary: {
      main: '#009CDC',
      700: '#004966',
      600: '#0075a3',
      300: '#5cd1ff',
      100: '#c2eeff',
      50: '#ebf9ff',
    },
    secondary: {
      main: '#cc7ab0',
      700: '#4a1c3b',
      600: '#a33e81',
      300: '#e9c4dc',
      100: '#f4e1ee',
      50: '#f9f0f6',
    },
    success: {
      main: '#19873c',
      700: '#105626',
      600: '#167935',
      300: '#64e38c',
      100: '#cbfcd9',
      50: '#eefcf2',
    },
    error: {
      main: '#c71721',
      700: '#5b0b0f',
      600: '#a4131b',
      300: '#ee6d73',
      100: '#F9C8CB',
      50: '#fdedee',
    },
  },
  typography: {
    heading: {
      1: css`
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
        line-height: 112px;
      `,
      2: css`
        font-size: 64px;
        font-weight: 300;
        letter-spacing: -0.5px;
        line-height: 72px;
      `,
      3: css`
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 56px;
      `,
      4: css`
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 48px;
      `,
      5: css`
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 32px;
      `,
      6: css`
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
    },
    subtitle: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
        line-height: 20px;
      `,
    },
    body: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 24px;
      `,
      3: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1.25px;
        line-height: 24px;
        text-transform: uppercase;
      `,
    },
    capition: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.4px;
      line-height: 16px;
    `,
    overline: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1.5px;
      line-height: 16px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};
