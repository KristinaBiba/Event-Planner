import styled from 'styled-components';

export const Wrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
  justify-items: center;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
