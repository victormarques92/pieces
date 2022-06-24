import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import theme from '../../theme';

export type ButtonStyleProps = {
  color?: 'primary' | 'secondary' | 'default';
  size?: 'medium' | 'small';
};

export const Btn = styled.button<ButtonStyleProps>`
  border-radius: 4px;
  height: fit-content;
  transition: 0.15s ease-in-out;

  ${theme.typography.body[3]}

  ${switchProp('color', {
    primary: css`
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.primary[600]};
      }
    `,
    secondary: css`
      background-color: ${theme.colors.secondary.main};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.secondary[600]};
      }
    `,
    default: css`
      background-color: transparent;
      color: ${theme.colors.grey[5]};

      &:hover {
        background-color: ${theme.colors.grey[2]};
      }
    `,
  })}

  ${switchProp('size', {
    medium: css`
      padding: 8px 24px;
    `,
    small: css`
      padding: 4px 16px;
    `,
  })}
`;
