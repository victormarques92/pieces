import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${theme.colors.grey[1]};
  padding: 12px 20px 24px;
  display: grid;
  gap: 12px;
  width: 288px;
`;

export const Others = styled.div`
  align-items: center;
  display: flex;

  & > span {
    ${theme.typography.capition}
    font-weight: 700;
  }
`;

export const Btn = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  color: ${theme.colors.grey[5]};
  display: flex;
  font-size: 24px;
  justify-content: center;
  margin-left: 12px;
  padding: 8px;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${theme.colors.grey[2]};
  }
`;
