import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 12px;

  & + & {
    margin-top: 40px;
  }
`;

export const BoxImage = styled.div`
  background-color: ${theme.colors.grey[3]};
  border-radius: 50%;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  overflow: hidden;
  width: 40px;

  & > img {
    height: inherit;
    object-fit: cover;
    width: inherit;
  }
`;

export const Content = styled.div`
  & > h4 {
    font-size: 16px;
    font-weight: 700;
  }

  & > p {
    font-size: 14px;
  }
`;
