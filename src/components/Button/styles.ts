import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import theme from '../../theme';

export type ButtonStyleProps = {
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'small';
};

export const Btn = styled.button<ButtonStyleProps>`
  border-radius: 4px;
  color: ${theme.colors.white};
  height: fit-content;
  transition: 0.15s ease-in-out;

  ${theme.typography.body[3]}

  ${switchProp('color', {
    primary: css`
      background-color: ${theme.colors.primary.main};

      &:hover {
        background-color: ${theme.colors.primary[600]};
      }
    `,
    secondary: css`
      background-color: ${theme.colors.secondary.main};

      &:hover {
        background-color: ${theme.colors.secondary[600]};
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
