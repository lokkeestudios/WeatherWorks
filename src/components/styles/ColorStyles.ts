import { detect } from 'detect-browser';

const browser = detect();

let isBackgroundBlurSupported = true;

if (browser && browser.name === 'firefox') {
  isBackgroundBlurSupported = false;
}

const ColorStyles = {
  light: {
    primary: 'rgba(105, 25, 255, 1)',
    text: 'rgba(23, 22, 55, 1)',
    text2: 'rgba(23, 22, 55, 0.7)',
    background: 'rgba(243, 245, 252, 1)',
    background2: 'rgba(219, 225, 240, 1)',
  },
  dark: {
    primary: 'rgba(146, 92, 240, 1)',
    text: 'rgba(250, 251, 255, 1)',
    text2: 'rgba(250, 251, 255, 0.7)',
    background: 'rgba(18, 17, 44, 1)',
    background2: 'rgba(26, 25, 62, 1)',
    card: {
      background: isBackgroundBlurSupported
        ? 'rgba(26, 25, 62, 0.5)'
        : 'rgba(26, 25, 62, 0.9)',
      border: '0.5px solid rgba(255, 255, 255, 0.3)',
      shadow: '0px 25px 80px rgba(0, 0, 0, 0.25)',
    },
  },
};

export default ColorStyles;