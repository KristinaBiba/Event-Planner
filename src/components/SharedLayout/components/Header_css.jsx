import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  
  box-sizing: border-box;
  border-bottom: 1px solid var(--primary-text-color);
  background-color: var(--header-background-color);
`;

export const Wrap = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SiteLink = styled(Link)`
  display: block;
  color: var(--primary-text-color);
  font-family: 'Alata';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 30px 0;
  cursor: pointer;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  }
`;