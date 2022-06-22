import styled from 'styled-components';

export const Header = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #5a5b5e;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const BoxAction = styled.div`
  display: flex;
  gap: 12px;
`;

export const Row = styled.div`
  align-items: stretch;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Comments = styled.div`
  border-left: 1px solid #5a5b5e;
  padding: 20px;
  max-width: 340px;

  & > h3 {
    color: #313133;
    font-size: 20px;
    margin-bottom: 48px;
  }
`;
