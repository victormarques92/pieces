import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 12px;

  & + & {
    margin-top: 40px;
  }
`;

export const BoxImage = styled.div`
  background-color: #6d6f72;
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
    margin-bottom: 8px;
  }

  & > p {
    font-size: 14px;
  }
`;
