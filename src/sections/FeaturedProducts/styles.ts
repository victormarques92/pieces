import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.div`
  background-color: ${theme.colors.grey[1]};
  padding: 64px 0;
`;

export const RowAds = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

export const ColumnFeatured = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;
