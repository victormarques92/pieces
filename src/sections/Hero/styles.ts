import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background: transparent
    linear-gradient(
      90deg,
      #236f8a 0%,
      ${theme.colors.primary[700]} 100%
    )
    0% 0%;
  color: ${theme.colors.white};
  display: flex;
  height: 510px;
  justify-content: center;

  & > div {
    h1 {
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
    }

    h2 {
      font-size: 82px;
      font-weight: 700;
      line-height: 98px;
      margin-top: -16px;
    }
  }
`;
