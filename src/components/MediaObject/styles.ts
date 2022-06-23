import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 12px;

  & + & {
    margin-top: 40px;
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
