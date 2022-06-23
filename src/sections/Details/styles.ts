import styled from 'styled-components';
import theme from '../../theme';

export const Header = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${theme.colors.grey[4]};
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
  align-items: stretch;
  display: flex;
  flex: 1;
  gap: 32px;
  height: calc(100vh - 262px);
  overflow-y: auto;
  padding: 36px 72px 60px;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:first-of-type {
      display: grid;
      gap: 32px;

      h6 {
        ${theme.typography.heading[6]}
      }

      h3 {
        ${theme.typography.heading[3]}
        font-weight: 700;
      }
    }

    & > div:last-of-type {
      h6 {
        ${theme.typography.heading[6]}
        margin-bottom: 16px;
      }

      p {
        ${theme.typography.capition}
      }
    }
  }

  & > img {
    height: fit-content;
    max-width: 50%;
    width: 492px;
  }
`;

export const Comments = styled.div`
  border-left: 1px solid ${theme.colors.grey[4]};
  height: calc(100vh - 262px);
  max-width: 340px;
  overflow-y: auto;
  padding: 20px;

  & > h3 {
    color: ${theme.colors.grey[5]};
    font-size: 20px;
    margin-bottom: 48px;
  }
`;

export const Favorite = styled.button`
  background-color: transparent;
  display: inherit;
  font-size: 24px;
  position: absolute;
  right: 12px;
  top: 12px;
`;
