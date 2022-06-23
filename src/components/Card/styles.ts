import styled, { css } from 'styled-components';
import theme from '../../theme';

interface CardStylesProps {
  featured?: boolean;
}

export const Container = styled.div<CardStylesProps>`
  background-color: ${theme.colors.white};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  max-width: 428px;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${({ featured }) =>
    featured &&
    css`
      height: 100%;
    `}
`;

export const Img = styled.img<CardStylesProps>`
  height: 156px;
  object-fit: contain;
  vertical-align: middle;
  width: 100%;

  ${({ featured }) =>
    featured &&
    css`
      flex: 1;
      height: 100%;
    `}
`;

export const Details = styled.div<CardStylesProps>`
  align-items: center;
  background-color: ${({ featured }) =>
    featured
      ? theme.colors.secondary.main
      : theme.colors.primary.main};
  display: flex;
  gap: 12px;
  justify-content: space-between;
  min-height: 72px;
  padding: 12px 16px;

  & > p {
    color: ${theme.colors.white};
    ${theme.typography.body[1]}
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  left: 12px;
  pointer-events: none;
  position: absolute;
  top: 12px;
`;
