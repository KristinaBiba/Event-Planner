import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 270px;
  margin-right: auto;
  margin-left: auto;
  margin-top: calc(100vh / 2 - 130px);
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;
export const PageLink = styled(Link)`
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--primary-background-color);
  border: 1px solid var(--primary-text-color);
  text-decoration: none;
  text-align: center;
  color: var(--primary-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  &:hover {
    background-color: var(--btn-hover-background);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:disabled {
    background-color: var(--btn-disabled-background);
  }
`;
