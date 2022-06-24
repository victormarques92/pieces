import * as PopoverPrimitive from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const keyframe = {
  slideUpAndFade: keyframes`
    0% {
      opacity: 0;
      transform: translateY(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  slideRightAndFade: keyframes`
    0% {
      opacity: 0;
      transform: translateX(-2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  slideDownAndFade: keyframes`
    0% {
      opacity: 0;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  slideLeftAndFade: keyframes`
    0% {
      opacity: 0;
      transform: translatex(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};

export const Trigger = styled(PopoverPrimitive.Trigger)`
  background-color: transparent;
`;

export const Content = styled(PopoverPrimitive.Content)`
  background-color: ${theme.colors.white};
  border-radius: 4px;
  box-shadow: #0e121659 0px 10px 38px -10px,
    #0e121633 0px 10px 20px -15px;
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-state='open'] {
      &[data-size='top'] {
        animation-name: ${keyframe.slideDownAndFade};
      }
      &[data-size='right'] {
        animation-name: ${keyframe.slideLeftAndFade};
      }
      &[data-size='bottom'] {
        animation-name: ${keyframe.slideUpAndFade};
      }
      &[data-size='left'] {
        animation-name: ${keyframe.slideRightAndFade};
      }
    }
  }
`;

export const StyledArrow = styled(PopoverPrimitive.Arrow)`
  fill: ${theme.colors.white};
  height: 10px;
  position: relative;
  top: -4px;
  width: 15px;
`;
