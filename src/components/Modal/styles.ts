import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.56);
  display: flex;
  justify-content: center;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: 0.2s ease-in-out;
  width: 100%;
  z-index: 9999;
`;

export const Content = styled.div`
  background-color: ${theme.colors.grey[1]};
  border-radius: 24px;
  max-height: calc(100vh - 120px);
  overflow: hidden;
  width: 1220px;
`;

export const Header = styled.header`
  background-color: ${theme.colors.primary[700]};
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;

  & > h4 {
    color: ${theme.colors.white};
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
`;

export const Close = styled.button`
  align-items: center;
  background-color: transparent;
  color: ${theme.colors.grey[1]};
  display: flex;
  font-size: 20px;
`;
