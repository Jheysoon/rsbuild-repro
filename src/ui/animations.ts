import { createAnimations } from '@tamagui/animations-css';

const animations = createAnimations({
  '100ms': 'ease-in 100ms',
  '200ms': 'ease-in 200ms',
  bouncy: 'ease-in 200ms',
  quick: 'ease-in 150ms',
  medium: 'ease-in 300ms',
  slow: 'ease-in 450ms',
  lazy: 'ease-in 600ms',
});

export default animations;
