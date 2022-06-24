import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const keyframe = {
  slideDown: keyframes`
    0% { 
      opacity: 0; 
      transform: translateY(-10px) 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0)
    }
  `,
  slideUp: keyframes`
    0% { 
      opacity: 0;
      transform: translateY(10px)
    }
    100% { 
      opacity: 1; 
      transform: translateY(0) 
    }
  `,
};

export const Trigger = styled(DropdownMenu.Trigger)`
  background-color: transparent;
`;

export const Content = styled(DropdownMenu.Content)`
  animation-duration: '0.6s';
  animation-timing-function: 'cubic-bezier(0.16, 1, 0.3, 1)';
  animation-fill-mode: 'forwards';
  background-color: ${theme.colors.white};
  border-radius: 4px;
  overflow: hidden;

  &[data-side='top'] {
    animation-name: ${keyframe.slideUp};
  }
  &[data-side='bottom'] {
    animation-name: ${keyframe.slideDown};
  }
`;

export const Item = styled(DropdownMenu.Item)`
  width: 180px;

  & > a {
    align-items: center;
    color: ${theme.colors.primary.main};
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    transition: 0.2s ease-in-out;

    ${theme.typography.body[1]}

    &:hover {
      background-color: ${theme.colors.primary[50]};
      color: ${theme.colors.primary[600]};
    }
  }
`;

export const TriggerItem = styled(DropdownMenu.TriggerItem)`
  align-items: center;
  cursor: default;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;

  ${theme.typography.body[1]}

  &[data-state='open'] {
    background-color: ${theme.colors.primary[50]};
  }
`;
